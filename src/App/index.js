import React from 'react';
import './App.scss';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';

// localStorage.removeItem('TODOS_V1');
// const defaultTodos = [
//   {id: 1, text: "Curso de React", completed: true},
//   {id: 2, text: "Clase de html", completed: false},
//   {id: 3, text: "Hacer commit", completed: true},
//   {id: 4, text: "Salir a correr", completed: false},
// ];
// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));

export function App() {

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}