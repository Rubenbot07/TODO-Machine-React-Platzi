import { useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

export function useTodos () {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error
  } = useLocalStorage('TODOS_V1', [])
  const [searchValue, setSearchValue] = useState('')
  const [openModal, setOpenModal] = useState(false)
  const [category, setCategory] = useState('Others')
  const [categoryFilter, setCategoryFilter] = useState('All')

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
        completed: false,
        categories: category,
        id: searchedTodos.length
      }
    )
    saveTodos(newTodos)
  }

  const completeTodo = (id) => {
    const newTodos = [...todos]
    if (newTodos[id].completed === true) {
      newTodos[id].completed = false
      saveTodos(newTodos)
    } else {
      newTodos[id].completed = true
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
    {
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
      setOpenModal,
      category,
      setCategory,
      categoryFilter,
      setCategoryFilter
    }
  )
}
