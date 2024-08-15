import './TodoList.css'
// import { TodoFiltered } from '../TodoFilter'
export function TodoList (props) {
  const renderFunc = props.render || props.children
  return (
    <section className='TodoList-container'>
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}
      {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptyResult()}
      {(props.categoryFilter !== 'All') && props.filters()}
      {!props.loading && props.categoryFilter === 'All' && props.searchedTodos.map(renderFunc)}
    </section>
  )
}
