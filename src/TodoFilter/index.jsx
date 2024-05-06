import { useContext, useState } from 'react'
import { TodoItem } from '../TodoItem'
import { TodoContext } from '../TodoContext'

export function TodoFiltered () {
  const {
    completeTodo,
    deleteTodo,
    searchedTodos,
    categoryFilter
  } = useContext(TodoContext)
  const filtered = searchedTodos.filter((item) => item.categories === categoryFilter)
  return (
    <>
      {
        filtered.map((item, index) => {
          return (
            <TodoItem
              key={index}
              task={item.text}
              completed={item.completed}
              category={item.categories}
              onComplete={() => completeTodo(item.text)}
              onDelete={() => deleteTodo(item.text)}
            />
          )
        })
    }
    </>
  )
}
