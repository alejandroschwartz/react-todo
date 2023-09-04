import React from 'react';
import { useContext } from 'react';
import './CreateTodoButton.scss';
import { FaRegPenToSquare } from 'react-icons/fa6';
import { TodoContext } from '../TodoContext';

export function CreateTodoButton() {
  const {
    openModal,
    setOpenModal,
  } = useContext(TodoContext); 

  return (
    <button 
      className='CreateTodobutton'
      title='Nuevo item'
      onClick={() => setOpenModal(!openModal)}
    >
      <FaRegPenToSquare fontSize={32} />
    </button>
  )
}