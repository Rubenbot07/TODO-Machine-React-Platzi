import { CompleteIcon } from '../TodoIcon/CompleteIcon'
import { DeleteIcon } from '../TodoIcon/DeleteIcon'
import './TodoItem.css'
export function TodoItem (props) {
  return (
    <li className='task-item'>
      <CompleteIcon
        completed={props.completed}
        onComplete={props.onComplete}
      />
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--completed'}`}>
        {props.task}
      </p>

      <DeleteIcon
        onDelete={props.onDelete}
      />
    </li>
  )
}
