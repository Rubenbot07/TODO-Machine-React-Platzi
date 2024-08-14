import './Filter.css'

export function Filter ({ categoryFilter, setCategoryFilter, loading }) {
  const menuFilters = ['All', 'Home', 'Study', 'Gym', 'Others']

  const changeFilter = (item) => {
    console.log(categoryFilter)
    setCategoryFilter(item)
  }
  return (
    <div className={`filters ${!!loading && 'filters--loading'}`}>
      <span>Filters</span>
      <select
        className='filters-container'
        onChange={(event) => changeFilter(event.target.value)}
      >
        {
            menuFilters.map((item, index) => {
              return (
                <option
                  key={index}
                  className='filterItem'
                >
                  {item}
                </option>
              )
            })
        }
      </select>
    </div>
  )
}
