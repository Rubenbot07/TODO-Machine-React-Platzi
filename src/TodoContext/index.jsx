import { createContext, useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
const TodoContext = createContext()
function TodoProvider ({ children }) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error
  } = useLocalStorage('TODOS_V1', [])
  const [searchValue, setSearchValue] = useState('')
  const [openModal, setOpenModal] = useState(false)

  const completedTodos = todos.filter(todo => todo.completed).length
  const totalTodos = todos.length

  const searchedTodos = todos.filter(
    (todo) => {
      return todo.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    }
  )

  const addTodo = (text) => {
    const newTodos = [...todos]
    newTodos.push(
      {
        text,
        completed: false
      }
    )
    saveTodos(newTodos)
  }

  const completeTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex((todo) => todo.text === text)
    if (newTodos[todoIndex].completed === true) {
      newTodos[todoIndex].completed = false
      saveTodos(newTodos)
    } else {
      newTodos[todoIndex].completed = true
      saveTodos(newTodos)
    }
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(todo => { return todo.text === text })
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
  }
  return (
    <TodoContext.Provider value={{
      loading,
      error,
      completedTodos,
      totalTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      addTodo,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal
    }}
    >
      {children}
    </TodoContext.Provider>
  )
}

export { TodoContext, TodoProvider }
