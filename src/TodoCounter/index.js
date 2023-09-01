import React, { useContext } from 'react'
import './TodoCounter.scss'
import { TodoContext } from '../TodoContext';

export function TodoCounter() {
    const {
        completedTodos,
        totalTodos,
    } = useContext(TodoContext);

    return (
        <>
            {completedTodos === totalTodos ?
                <p className="TodoCounter__title">
                    Felicitaciones!!! Completaste todos los TODO's
                </p>
                : 
                <p className="TodoCounter__title">
                    Ya completaste <strong>{completedTodos}</strong> de <strong>{totalTodos}</strong> todos
                </p>
            }
        </>
    )
}