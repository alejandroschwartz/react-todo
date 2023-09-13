import React, { useContext } from 'react';
import './TodoSearch.scss';
import { TodoContext } from '../TodoContext';

export function TodoSearch() {
  const {
    totalTodos,
    searchValue,
    setSearchValue,
  } = useContext(TodoContext);

  return (
    <div className='TodoSearch__container'>
      {/* { totalTodos !== 0 && */}
        <input 
          type="text" 
          className="TodoSearch__input" 
          placeholder="Buscar tarea" 
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      {/* } */}
    </div>
  )
}