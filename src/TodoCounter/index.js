import React from 'react'
import './TodoCounter.css'

export function TodoCounter(props) {
    return (
        <>
            {props.completed === props.total ?
                <p className="TodoCounter__title">
                    Felicitaciones!!! Completaste todos los TODO's
                </p>
                : 
                <p className="TodoCounter__title">
                    Ya completaste <strong>{props.completed}</strong> de <strong>{props.total}</strong> todos
                </p>
            }
        </>
    )
}