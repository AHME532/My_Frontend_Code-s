import React, { useState } from 'react'
import Todo from './components/Todo'

function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input }])
      setInput('')
    }
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div style={{ background: 'white', padding: '30px', borderRadius: '10px', width: '400px' }}>
      <h1 style={{ textAlign: 'center' }}>✅ Todo List</h1>
      
      <div style={{ display: 'flex', gap: '10px', margin: '20px 0' }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter todo..."
          style={{ flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '5px' }}
        />
        <button onClick={addTodo} style={{ padding: '8px 15px', background: '#28a745', color: 'white', border: 'none', borderRadius: '5px' }}>
          Add
        </button>
      </div>

      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} onDelete={deleteTodo} />
      ))}

      {todos.length === 0 && <p style={{ textAlign: 'center', color: '#888' }}>No todos yet!</p>}
    </div>
  )
}

export default App