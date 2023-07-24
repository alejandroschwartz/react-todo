import React from 'react';
import './TodoSearch.css';

export function TodoSearch({ searchValue, setSearchValue }) {

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