import './TodoList.css'
// import { TodoFiltered } from '../TodoFilter'
export function TodoList (props) {
  return (
    <section className='TodoList-container'>
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {(!props.loading && props.searchedTodos.length === 0) && props.onEmptyTodos()}
      {(props.categoryFilter !== 'All') && props.filters()}
      <ul className='tasks-container'>
        {props.categoryFilter === 'All' && props.searchedTodos.map(props.render)}
      </ul>
    </section>
  )
}
