import { useContext } from 'react'
import './CreateTodoButton.css'
import { TodoContext } from '../TodoContext'
export function CreateTodoButton () {
  const {
    openModal,
    setOpenModal
  } = useContext(TodoContext)
  return (
    <button
      id='create-task-btn'
      onClick={() => { setOpenModal(!openModal) }}
    >
      {openModal ? 'x' : '+'}
    </button>
  )
}
