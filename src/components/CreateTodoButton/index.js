import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import './CreateTodoButton.scss';
import { FaRegPenToSquare, FaListCheck, FaCheck, FaRegCircle } from 'react-icons/fa6';
import { TodoContext } from '../TodoContext';

export function CreateTodoButton() {
  const {
    openModal,
    setOpenModal,
    setSearchType,
    searchType,
  } = useContext(TodoContext); 

  const [valueType, setValueType] = useState()

  useEffect(() => {
    setValueType(searchType);
  }, [searchType]);

  return (
      <div className="nav-container">
        {
          // valueType!=='all' &&
          <button className='nav__todos' title='Ver todas' onClick={() => setSearchType('all')}>
            <FaListCheck className='nav__svg' />
            {/* Todas */}
          </button>
        }
        {
          // valueType!=='completed' &&
          <button className='nav__todos' title='Ver completas' onClick={() => setSearchType('completed')}>
            <FaCheck className='nav__svg' />
            {/* Completas */}
          </button>
        }
        {
          // valueType!=='incompleted' &&
          <button className='nav__todos' title='Ver incompletas' onClick={() => setSearchType('incompleted')}>
            <FaRegCircle className='nav__svg' />
            {/* Incompletas */}
          </button>
        }
        <button className="nav-button" title='Crear tarea' onClick={() => setOpenModal(!openModal)}>
          <FaRegPenToSquare className='nav__svg' />
        </button>
    </div>
  )
}