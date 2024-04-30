import { useContext } from 'react'
import { TodoContext } from '../../TodoContext'
import './TodoSearch.css'
export function TodoSearch () {
  const {
    searchValue,
    setSearchValue
  } = useContext(TodoContext)
  return (
    <input
      id='input'
      type='text'
      placeholder='Search task'
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value)
      }}
    />
  )
}
