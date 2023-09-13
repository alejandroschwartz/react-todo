import React, { useContext, useState } from 'react';
import './TodoForm.scss';
import { TodoContext } from '../TodoContext';

function TodoForm() {
    const {
        addTodo,
        setOpenModal,
    } = useContext(TodoContext);
    const [newTodoValue, setNewTodoValue] = useState('');
    const [isTodoValid, setIsTodoVales] = useState(undefined);
    const handleText = (event) => {
        setNewTodoValue(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        if (newTodoValue.length > 3) {
            setIsTodoVales(true);
            setOpenModal(false);
            addTodo(newTodoValue);
        } else {
            setIsTodoVales(false);
        }
    };

    return (
        <form className="TodoForm__container" onSubmit={handleSubmit} >
            <label className="TodoForm__label" >Nueva tarea</label>
            <textarea 
                className="TodoForm__textarea" 
                placeholder="Ej: Comprar lechuga" 
                value={newTodoValue} 
                onChange={handleText} 
            />
            {isTodoValid === false ?
                <span className='TodoForm__validation' >
                    Debe tener mas de 4 caracteres para guardar!
                </span>
                : <span className='TodoForm__valid' ></span>
            }
            <div className="TodoForm__buttons" >
                <button type="button" className="TodoForm__button-cancel" onClick={() => setOpenModal(false)} >Cerrar</button>
                <button type="submit" className="TodoForm__button-save" onSubmit={handleSubmit} >Guardar</button>
            </div>
        </form>
    )
};

export { TodoForm };