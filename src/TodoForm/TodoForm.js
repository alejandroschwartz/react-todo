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
        if (newTodoValue.length > 2 && newTodoValue.length < 101 ) {
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
                    <small>Debe tener de 3 a 100 caracteres para guardar!</small>
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