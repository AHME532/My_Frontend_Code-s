import React from 'react'

function Todo({ todo, onDelete }) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      padding: '10px',
      margin: '5px 0',
      background: '#f8f9fa',
      borderRadius: '5px'
    }}>
      <span>{todo.text}</span>
      <button onClick={() => onDelete(todo.id)} style={{
        background: '#dc3545',
        color: 'white',
        border: 'none',
        padding: '5px 10px',
        borderRadius: '5px',
        cursor: 'pointer'
      }}>
        Delete
      </button>
    </div>
  )
}

export default Todo