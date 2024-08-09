import './CreateTodoButton.css'
export function CreateTodoButton ({ setOpenModal, openModal }) {
  return (
    <button
      id='create-task-btn'
      onClick={() => { setOpenModal(!openModal) }}
    >
      {openModal ? 'x' : '+'}
    </button>
  )
}
