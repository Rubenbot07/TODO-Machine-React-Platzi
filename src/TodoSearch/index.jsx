import './TodoSearch.css'
export function TodoSearch ({ searchValue, setSearchValue, loading }) {
  return (
    <input
      id='input'
      type='text'
      placeholder='Search task'
      value={searchValue}
      disabled={loading}
      onChange={(event) => {
        setSearchValue(event.target.value)
      }}
    />
  )
}
