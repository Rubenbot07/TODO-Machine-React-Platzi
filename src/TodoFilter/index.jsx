import { TodoItem } from '../TodoItem'

export function TodoFiltered ({ completeTodo, deleteTodo, searchedTodos, categoryFilter }) {
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
