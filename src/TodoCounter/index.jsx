import { useContext } from 'react'
import { TodoContext } from '../TodoContext'
import './TodoCounter.css'
export function TodoCounter () {
  const {
    totalTodos,
    completedTodos
  } = useContext(TodoContext)
  return (
    totalTodos === completedTodos
      ? (totalTodos > 1)
          ? <h1 className='counterTitle'>Congratulations, You've completed all tasks</h1>
          : <h1 className='counterTitle'>Welcome! Create your first Todo</h1>
      : <h1 className='counterTitle'>You have completed <span style={{ fontWeight: 'bolder' }}>{completedTodos}</span> of <span style={{ fontWeight: 'bolder' }}>{totalTodos}</span> TODOS</h1>
  )
}
