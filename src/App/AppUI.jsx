import { TodoCounter } from '../TodoCounter'
import { TodoSearch } from '../TodoSearch'
import { TodoList } from '../TodoList'
import { TodoItem } from '../TodoItem'
import { TodosLoading } from '../TodosLoading'
import { TodosError } from '../TodosError'
import { EmptyTodos } from '../EmptyTodos'
import { CreateTodoButton } from '../CreateTodoButton'
import { Modal } from '../Modal'
import { TodoForm } from '../TodoForm'
import { TodoContext } from '../TodoContext'
import { TodoFiltered } from '../TodoFilter'
import { Filter } from '../Filter'

export function AppUI () {
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <Filter />
      <TodoContext.Consumer>
        {({
          loading,
          error,
          searchedTodos,
          completeTodo,
          deleteTodo,
          openModal,
          setOpenModal,
          categoryFilter
        }) => {
          return (
            <>
              <TodoList>
                {loading && <TodosLoading />}
                {error && <TodosError />}
                {(!loading && searchedTodos.length === 0 && !error) && <EmptyTodos />}
                {categoryFilter !== 'All' && <TodoFiltered />}

                {categoryFilter === 'All' &&
                  searchedTodos.map((item, index) => {
                    return (
                      <TodoItem
                        key={index}
                        task={item.text}
                        completed={item.completed}
                        category={item.categories}
                        onComplete={() => completeTodo(index)}
                        onDelete={() => deleteTodo(item.text)}
                      />
                    )
                  })}
              </TodoList>
              <CreateTodoButton setOpenModal={setOpenModal} />
              {openModal && (
                <Modal>
                  <TodoForm />
                </Modal>
              )}
            </>
          )
        }}
      </TodoContext.Consumer>
    </>
  )
}
