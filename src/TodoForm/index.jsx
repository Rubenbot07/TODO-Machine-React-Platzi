import { useState, useContext } from 'react'
import { TodoContext } from '../TodoContext'
import './TodoForm.css'

export function TodoForm () {
  const {
    addTodo,
    setOpenModal
  } = useContext(TodoContext)
  const [newTodoValue, setNewTodoValue] = useState('')

  const onSubmit = (event) => {
    event.preventDefault()
    if (newTodoValue) {
      addTodo(newTodoValue)
    }
    setOpenModal(false)
  }

  const onCancel = () => {
    setOpenModal(false)
  }

  const onChange = (event) => {
    setNewTodoValue(event.target.value)
  }
  return (
    <form onSubmit={onSubmit}>
      <label>Write a new TODO!</label>
      <textarea
        placeholder='Write here!'
        value={newTodoValue}
        onChange={onChange}
      />
      <div className='TodoForm-buttonContainer'>
        <button
          className='TodoForm-button TodoForm-button--cancel'
          onClick={onCancel}
        >
          Cancel
        </button>
        <button
          className='TodoForm-button TodoForm-button--add'
        >
          Add
        </button>
      </div>
    </form>
  )
}
