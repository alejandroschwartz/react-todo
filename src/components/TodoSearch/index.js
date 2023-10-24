import React, { useContext } from 'react';
import './TodoSearch.scss';
import { TodoContext } from '../TodoContext';
import { FaMagnifyingGlass } from 'react-icons/fa6';

export function TodoSearch() {
  const {
    totalTodos,
    searchValue,
    setSearchValue,
  } = useContext(TodoContext);

  return (
    <div className='TodoSearch__container'>
        <input 
          type="text" 
          className="TodoSearch__input" 
          placeholder="Buscar tarea" 
          autoComplete='off'
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <div className='TodoSearch__icon' >
          <FaMagnifyingGlass className='icon' aria-hidden='true' />
        </div>
    </div>
  )
}