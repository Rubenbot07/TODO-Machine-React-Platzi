import React from 'react'
import { TodoIcon } from './index'

export function DeleteIcon ({ onDelete }) {
  return (
    <TodoIcon
      type='delete'
      color='rgb(109, 26, 109, 0.8)'
      onClick={onDelete}
    />
  )
}
