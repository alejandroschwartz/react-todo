import React, { useContext } from 'react'
import './TodoCounter.scss'
import { TodoContext } from '../TodoContext';
import { FaRegRectangleList } from 'react-icons/fa6';

export function TodoCounter() {
    const {
        completedTodos,
        totalTodos,
    } = useContext(TodoContext);

    return (
        <>
            { (completedTodos === totalTodos && totalTodos !== 0) ?
                <p className="TodoCounter__title">
                    Felicidades! <br/> Completaste todas las tareas.
                </p>
                : 
                <>
                    { totalTodos !== 0 ?
                        <p className="TodoCounter__title">
                            Completaste <strong>{completedTodos}</strong> de <strong>{totalTodos}</strong> tareas
                        </p>
                        :
                        <p className="TodoCounter__title">
                            No creaste tareas
                        </p>
                    }
                </>
            }
        </>
    )
}