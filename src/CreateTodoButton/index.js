import React from 'react';
import { useContext } from 'react';
import './CreateTodoButton.scss';
import { FaRegPenToSquare, FaHouse, FaNewspaper } from 'react-icons/fa6';
import { TodoContext } from '../TodoContext';

export function CreateTodoButton() {
  const {
    openModal,
    setOpenModal,
  } = useContext(TodoContext); 

  return (
      <div className="nav-container">
        <a href='https://alejandroschwartz.com.ar/' className='nav__link'>
          <FaHouse fontSize={20} />
          <br/>
          Portfolio
        </a>
        <button className="nav-button" title='Nuevo item' onClick={() => setOpenModal(!openModal)}>
          <FaRegPenToSquare fontSize={28} />
        </button>
        <a href='https://astro-ale-portfolio.netlify.app/blog/' className='nav__link'>
          <FaNewspaper fontSize={20} />
          <br/>
          Blog
        </a>
    </div>
  )
}