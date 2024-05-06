import { useContext } from 'react'
import './TodoCategories.css'
import { TodoContext } from '../TodoContext'

export function TodoCategories () {
  const {
    category,
    setCategory
  } = useContext(TodoContext)
  const listItems = ['Others', 'Home', 'Study', 'Gym']
  const changeCategory = (item) => {
    setCategory(item)
    console.log(typeof category)
  }
  return (
    <div className='categories-container'>
      <span className='categories-span'>Categories</span>
      <select
        onClick={(event) => changeCategory(event.target.value)}
      >
        {listItems.map((item, index) => (
          <option
            key={index}
            className='list-item'
          >
            {item}
          </option>
        ))}
      </select>
    </div>
  )
}
