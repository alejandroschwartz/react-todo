import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoLoading } from '../TodoLoading';
import { TodoError } from '../TodoError';
import { TodoContext } from '../TodoContext';
import { useContext } from 'react';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm/TodoForm';
import { Footer } from '../Footer';
import { Header } from '../Header';

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
  );
};

export { AppUI };