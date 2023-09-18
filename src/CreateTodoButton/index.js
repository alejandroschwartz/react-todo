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
        {valueType!=='all' &&
          <button className='nav__todos' onClick={() => setSearchType('all')}>
            <FaListCheck fontSize={24} />
            Todas
          </button>
        }
        {valueType!=='completed' &&
          <button className='nav__todos' onClick={() => setSearchType('completed')}>
            <FaCheck fontSize={24} />
            Completas
          </button>
        }
        {valueType!=='incompleted' &&
          <button className='nav__todos' onClick={() => setSearchType('incompleted')}>
            <FaRegCircle fontSize={24} />
            Incompletas
          </button>
        }
        <button className="nav-button" title='Nuevo item' onClick={() => setOpenModal(!openModal)}>
          <FaRegPenToSquare fontSize={28} />
        </button>
    </div>
  )
}