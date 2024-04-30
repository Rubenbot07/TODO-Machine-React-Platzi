import React from 'react'
import { TodoIcon } from './index.jsx'

export function CompleteIcon ({ completed, onComplete }) {
  return (
    <TodoIcon
      type='check'
      color={completed ? 'green' : 'rgb(109, 26, 109, 0.8)'}
      onClick={onComplete}
    />
  )
}
