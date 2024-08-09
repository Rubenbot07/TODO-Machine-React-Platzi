import { useState } from 'react'
import { TodoCategories } from '../TodoCategories'
import './TodoForm.css'

export function TodoForm ({ addTodo, setOpenModal, setCategory, category }) {
  const [newTodoValue, setNewTodoValue] = useState('')

  const onSubmit = (event) => {
    event.preventDefault()
    if (newTodoValue) {
      addTodo(newTodoValue)
    }
    setOpenModal(false)
    setCategory('Others')
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
        onChange={onChange}
      />
      <TodoCategories category={category} setCategory={setCategory} />
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
