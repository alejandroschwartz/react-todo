import React from 'react';
import './TodoList.scss';

export function TodoList({ children }) {
    return (
      <main>
        <h3>Lista de Tareas</h3>
        <ul className="TodoList">
            {children}
        </ul>
      </main>
    )
}