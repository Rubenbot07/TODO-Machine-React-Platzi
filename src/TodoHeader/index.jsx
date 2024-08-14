import React from 'react'
import './TodoHeader.css'
export const TodoHeader = ({ children, loading }) => {
  return (
    <header>
      {
        React.Children
          .toArray(children)
          .map(child => React.cloneElement(child, { loading }))
      }
    </header>
  )
}
