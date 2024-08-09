import './TodoList.css'
import { TodoFiltered } from '../TodoFilter'
export function TodoList (props) {
  return (
    <section className='TodoList-container'>
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {(!props.loading && props.searchedTodos.length === 0) && props.onEmptyTodos()}
      {props.categoryFilter !== 'All' &&
        <TodoFiltered
          completeTodo={props.completeTodo}
          deleteTodo={props.deleteTodo}
          searchedTodos={props.searchedTodos}
          categoryFilter={props.categoryFilter}
        />}
      <ul className='tasks-container'>
        {props.categoryFilter === 'All' && props.searchedTodos.map(props.render)}
      </ul>
    </section>
  )
}
