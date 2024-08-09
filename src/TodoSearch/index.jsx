import './TodoSearch.css'
export function TodoSearch ({ searchValue, setSearchValue }) {
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
