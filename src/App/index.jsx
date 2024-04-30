import { AppUI } from './AppUI'
import { TodoProvider } from '../TodoContext'
import './App.css'

function App () {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  )
}

export default App

// loading={loading}
// error={error}
// completedTodos={completedTodos}
// totalTodos={totalTodos}
// searchValue={searchValue}
// setSearchValue={setSearchValue}
// searchedTodos={searchedTodos}
// completeTodo={completeTodo}
// deleteTodo={deleteTodo}
