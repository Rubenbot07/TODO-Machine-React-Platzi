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
import { TodoContext } from '../../TodoContext'
export function AppUI () {
  return (
    <>
      <TodoCounter />
      <TodoSearch />

      <TodoContext.Consumer>
        {({
          loading,
          error,
          searchedTodos,
          completeTodo,
          deleteTodo,
          openModal,
          setOpenModal
        }) => {
          return (
            <>
              <TodoList>
                {loading && <TodosLoading />}
                {error && <TodosError />}
                {(!loading && searchedTodos.length === 0 && !error) && <EmptyTodos />}

                {
                  searchedTodos.map((item, index) => {
                    return (
                      <TodoItem
                        key={index}
                        task={item.text}
                        completed={item.completed}
                        onComplete={() => completeTodo(item.text)}
                        onDelete={() => deleteTodo(item.text)}
                      />
                    )
                  })
                }
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
