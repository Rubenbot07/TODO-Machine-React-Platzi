import './TodoCategories.css'

export function TodoCategories ({ category, setCategory }) {
  const listItems = ['Others', 'Home', 'Study', 'Gym']
  const changeCategory = (item) => {
    setCategory(item)
    console.log(typeof category)
  }
  return (
    <div className='categories-container'>
      <span className='categories-span'>Categories</span>
      <select
        onChange={(event) => changeCategory(event.target.value)}
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
