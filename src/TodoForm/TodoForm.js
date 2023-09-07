import React, { useContext, useState } from 'react';
import './TodoForm.scss';
import { TodoContext } from '../TodoContext';

function TodoForm() {
    const {
        addTodo,
        setOpenModal,
    } = useContext(TodoContext);
    const [newTodoValue, setNewTodoValue] = useState('');
    const handleText = (event) => {
        setNewTodoValue(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        setOpenModal(false);
        addTodo(newTodoValue);
    };

    return (
        <form className="TodoForm__container" onSubmit={handleSubmit} >
            <label className="TodoForm__label" >Nueva tarea</label>
            <textarea className="TodoForm__textarea" placeholder="Ej: Comprar lechuga" value={newTodoValue} onChange={handleText} />
            <div className="TodoForm__buttons" >
                <button type="button" className="TodoForm__button-cancel" onClick={() => setOpenModal(false)} >Cerrar</button>
                <button type="submit" className="TodoForm__button-save" onSubmit={handleSubmit} >Guardar</button>
            </div>
        </form>
    )
};

export { TodoForm };