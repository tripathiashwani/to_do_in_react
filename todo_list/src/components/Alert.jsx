// src/components/Alert.jsx
import React from 'react';

function Alert({ type, message, onClose }) {
  const typeStyles = {
    info: {
      textColor: 'text-blue-800',
      borderColor: 'border-blue-300',
      bgColor: 'bg-blue-50',
      darkTextColor: 'dark:text-blue-400',
      darkBorderColor: 'dark:border-blue-800',
    },
    danger: {
      textColor: 'text-red-800',
      borderColor: 'border-red-300',
      bgColor: 'bg-red-50',
      darkTextColor: 'dark:text-red-400',
      darkBorderColor: 'dark:border-red-800',
    },
    success: {
      textColor: 'text-green-800',
      borderColor: 'border-green-300',
      bgColor: 'bg-green-50',
      darkTextColor: 'dark:text-green-400',
      darkBorderColor: 'dark:border-green-800',
    },
    warning: {
      textColor: 'text-yellow-800',
      borderColor: 'border-yellow-300',
      bgColor: 'bg-yellow-50',
      darkTextColor: 'dark:text-yellow-300',
      darkBorderColor: 'dark:border-yellow-800',
    },
    default: {
      textColor: 'text-gray-800',
      borderColor: 'border-gray-300',
      bgColor: 'bg-gray-50',
      darkTextColor: 'dark:text-gray-300',
      darkBorderColor: 'dark:border-gray-600',
    },
  };

  const styles = typeStyles[type] || typeStyles.default;

  return (
    <div
      className={`flex items-center p-4 mb-4 border-t-4 ${styles.textColor} ${styles.borderColor} ${styles.bgColor} ${styles.darkTextColor} ${styles.darkBorderColor}`}
      role="alert"
    >
      <svg
        className="flex-shrink-0 w-4 h-4"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
      </svg>
      <div className="ms-3 text-sm font-medium">{message}</div>
      <button
        type="button"
        className="ms-auto -mx-1.5 -my-1.5 p-1.5 bg-blue-50 text-blue-500 rounded-lg focus:ring-2 focus:ring-blue-400 hover:bg-blue-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700"
        onClick={onClose}
        aria-label="Close"
      >
        <span className="sr-only">Dismiss</span>
        <svg
          className="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 6 6m0 0 6 6M7 7l-6-6M7 7l-6 6"
          />
        </svg>
      </button>
    </div>
  );
}

export default Alert;
