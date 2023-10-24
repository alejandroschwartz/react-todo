import React, { useContext, useState } from 'react';
import './TodoForm.scss';
import { TodoContext } from '../TodoContext';

function TodoForm() {
    const {
        addTodo,
        setOpenModal,
    } = useContext(TodoContext);
    const [newTodoValue, setNewTodoValue] = useState({
        text: '',
        select: ''
    });
    const [isTodoValid, setIsTodoVales] = useState(undefined);
    const handleText = (event) => {
        setNewTodoValue({
            ...newTodoValue,
            text: event.target.value
        });
    };
    const handleSelect = (event) => {
        setNewTodoValue({
            ...newTodoValue,
            select: event.target.value
        });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("newTodoValue:", newTodoValue)
        if (newTodoValue.text.length > 2 && newTodoValue.text.length < 101 ) {
            setIsTodoVales(true);
            setOpenModal(false);
            addTodo(newTodoValue.text, newTodoValue.select);
        } else {
            setIsTodoVales(false);
        }
    };

    return (
        <form className="TodoForm__container" onSubmit={handleSubmit} >
            <label className="TodoForm__label" >Nueva tarea</label>
            <textarea 
                className="TodoForm__textarea" 
                placeholder="Ej Comprar tomate y lechuga" 
                value={newTodoValue.text} 
                onChange={handleText} 
            />
            {isTodoValid === false ?
                <span className='TodoForm__validation' >
                    <small>Debe tener de 3 a 100 caracteres para guardar!</small>
                </span>
                : <></>
            }
            <select className="TodoForm__select" onChange={handleSelect} >
                <option value=''            >Seleccionar... </option>
                <option value='HACER'       >Hacerlo ya</option>
                <option value='PLANIFICAR'  >Planificar</option>
                <option value='DELEGAR'     >Delegar</option>
                <option value='ELIMINAR'    >Postergar</option>
            </select>
            <div className="TodoForm__buttons" >
                <button type="button" className="TodoForm__button-cancel" onClick={() => setOpenModal(false)} >Cerrar</button>
                <button type="submit" className="TodoForm__button-save" onSubmit={handleSubmit} >Guardar</button>
            </div>
        </form>
    )
};

export { TodoForm };