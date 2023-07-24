import React, { useState } from 'react';
import './App.css';
import { useLocalStorage } from './useLocalStorage';
import { AppUI } from './AppUI';

// localStorage.removeItem('TODOS_V1');
// const defaultTodos = [
//   {id: 1, text: "Curso de React", completed: true},
//   {id: 2, text: "Clase de html", completed: false},
//   {id: 3, text: "Hacer commit", completed: true},
//   {id: 4, text: "Salir a correr", completed: false},
// ];
// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));

export function App() {
  const {
    item: todos, 
    saveItem: saveTodos, 
    loading, 
    error,
  } = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = useState('');
  const totalTodos = todos.length;
  const completedTodos = todos.filter(todo => todo.completed === true).length;
  const searchedTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()));
  
  const completeTodos = (todoId) => {
    let newTodos = [...todos];
    let todoIndex = newTodos.findIndex(todo => todo.id === todoId);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };
  
  const deleteTodos = (todoId) => {
    let newTodos = [...todos];
    let todoIndex = newTodos.findIndex(todo => todo.id === todoId);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <AppUI
      loading={loading}
      error={error}
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodos={completeTodos}
      deleteTodos={deleteTodos}
    />
  );
}