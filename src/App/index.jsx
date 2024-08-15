import './App.css'
import { React } from 'react'
import { useTodos } from './useTodos'
import { TodoHeader } from '../TodoHeader'
import { TodoCounter } from '../TodoCounter'
import { TodoSearch } from '../TodoSearch'
import { TodoList } from '../TodoList'
import { TodoItem } from '../TodoItem'
import { TodosLoading } from '../TodosLoading'
import { TodosError } from '../TodosError'
import { EmptyTodos } from '../EmptyTodos'
import { EmptyResult } from '../EmptyResult'
import { CreateTodoButton } from '../CreateTodoButton'
import { Modal } from '../Modal'
import { TodoForm } from '../TodoForm'
import { TodoFiltered } from '../TodoFilter'
import { Filter } from '../Filter'
import { ChangeAlert } from '../ChangeAlert'

function App () {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    category,
    setCategory,
    addTodo,
    categoryFilter,
    setCategoryFilter,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    synchronizeTodos
  } = useTodos()
  return (
    <>
      <TodoHeader loading={loading}>
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <Filter
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
        />
      </TodoHeader>
      <TodoList
        categoryFilter={categoryFilter}
        error={error}
        loading={loading}
        totalTodos={totalTodos}
        searchedTodos={searchedTodos}
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptyResult={() => <EmptyResult searchedValue={searchValue} />}
        filters={() =>
          <TodoFiltered
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
            searchedTodos={searchedTodos}
            categoryFilter={categoryFilter}
          />}
        // render={item => (
        //   <TodoItem
        //     key={item.id}
        //     task={item.text}
        //     completed={item.completed}
        //     category={item.categories}
        //     onComplete={() => completeTodo(item.id)}
        //     onDelete={() => deleteTodo(item.text)}
        //   />
        // )}
      >
        {item => (
          <TodoItem
            key={item.id}
            task={item.text}
            completed={item.completed}
            category={item.categories}
            onComplete={() => completeTodo(item.id)}
            onDelete={() => deleteTodo(item.text)}
          />
        )}
      </TodoList>
      {/* <TodoList>
        {loading && <TodosLoading />}
        {error && <TodosError />}
        {(!loading && searchedTodos.length === 0 && !error) && <EmptyTodos />}
        {categoryFilter !== 'All' &&
          <TodoFiltered
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
            searchedTodos={searchedTodos}
            categoryFilter={categoryFilter}
          />}

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
      </TodoList> */}
      <CreateTodoButton
        setOpenModal={setOpenModal}
        openModal={openModal}
      />
      {openModal && (
        <Modal>
          <TodoForm
            addTodo={addTodo}
            setOpenModal={setOpenModal}
            setCategory={setCategory}
            category={category}
          />
        </Modal>
      )}
      <ChangeAlert
        synchronize={synchronizeTodos}
      />
    </>
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
