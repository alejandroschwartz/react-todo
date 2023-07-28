import { useContext } from 'react';
import './CreateTodoButton.css';
import { TodoContext } from '../TodoContext';

export function CreateTodoButton() {
  const {
    openModal,
    setOpenModal,
  } = useContext(TodoContext); 

  return (
    <button 
      className='CreateTodobutton'
      onClick={() => setOpenModal(!openModal)}
    >
      +
    </button>
  )
}