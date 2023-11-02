import React from 'react';
import { useContext } from 'react';
import { TodoCounter } from '../../components/TodoCounter';
import { TodoSearch } from '../../components/TodoSearch';
import { CreateTodoButton } from '../../components/CreateTodoButton';
import { TodoList } from '../../components/TodoList';
import { TodoItem } from '../../components/TodoItem';
import { TodoLoading } from '../../components/TodoLoading';
import { TodoError } from '../../components/TodoError';
import { TodoContext } from '../../components/TodoContext';
import { Modal } from '../../components/Modal';
import { TodoForm } from '../../components/TodoForm/TodoForm';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import '../Home/Home.scss'

function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodos,
    deleteTodos,
    openModal,
  } = useContext(TodoContext);

  console.log("searchedTodos", searchedTodos);

  return (
    <div className="App">
      <Header/>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {loading && <TodoLoading />}
        {error && <TodoError />}
        {(!loading && searchedTodos.length === 0) && <p>Crea tu primer Tarea. <br/> Presiona el botón verde de la esquina inferior derecha y comienza. </p>}
        {searchedTodos.map(item =>
          <TodoItem
            key={item.id}
            item={item.text}
            type={item.select}
            completed={item.completed}
            onComplete={() => completeTodos(item.id)}
            onDelete={() => deleteTodos(item.id)}
          />
        )}
      </TodoList>
      <CreateTodoButton />

      {openModal && 
        <Modal>
          <TodoForm />
        </Modal>
      }
      <Footer/>
    </div>
)};

export { AppUI };