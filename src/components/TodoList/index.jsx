import './TodoList.css'
export function TodoList (props) {
  return (
    <ul className='tasks-container'>
      {props.children}
    </ul>
  )
}
