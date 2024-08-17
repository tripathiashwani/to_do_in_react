import { useState, useEffect } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
import Alert from './components/Alert'
import axios from 'axios';

function App() {
  const [todos, setTodos] = useState([])
  const [todoValue, setTodoValue] = useState('')
  const [alert, setAlert] = useState({ type: '', message: '', visible: false });

  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({ todos: newList }))
  }
  useEffect(() => {
    async function fetchTodos() {
      const response = await axios.get('http://localhost:5000/api/tasks/todos');
      setTodos(response.data.todos);
    }
    fetchTodos();
  }, []);

   async function handleAddTodos(newTodo) {
    const response = await axios.post('http://localhost:5000/api/tasks/todos', { newTodo });
    const newTodoList = [...todos, newTodo]
    persistData(newTodoList)
    setTodos(newTodoList)
    setAlert({
      type: 'success',
      message: 'Todo added successfully!',
      visible: true,
    });
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })
    persistData(newTodoList)
    setTodos(newTodoList)
    setAlert({
      type: 'danger',
      message: 'Todo deleted successfully!',
      visible: true,
    });
  }

  function handleEditTodo(index) {
    const valueToBeEdited = todos[index]
    setTodoValue(valueToBeEdited)
    handleDeleteTodo(index)
    setAlert({
      type: 'info',
      message: 'Todo is ready to edit!',
      visible: true,
    });
  }
  function closeAlert() {
    setAlert((prev) => ({ ...prev, visible: false }));
  }
  useEffect(() => {
    if (!localStorage) {
      return
    }

    let localTodos = localStorage.getItem('todos')
    if (!localTodos) {
      return
    }

    console.log(localTodos)
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)

  }, [])

  return (
    <>
     {alert.visible && (
        <Alert
          type={alert.type}
          message={alert.message}
          onClose={closeAlert}
        />
      )}
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos} />
      <TodoList handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} todos={todos} />
    </>
  )
}

export default App