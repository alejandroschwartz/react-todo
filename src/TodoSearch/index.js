import React, { useContext } from 'react';
import './TodoSearch.css';
import { TodoContext } from '../TodoContext';

export function TodoSearch() {
  const {
    searchValue,
    setSearchValue,
  } = useContext(TodoContext);

  return(
    <input 
      type="text" 
      className="TodoSearch__input" 
      placeholder="Buscar" 
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
    />
  )
}