import React from 'react';
import './TodoItem.scss';
import { FaCheck, FaRegCircle, FaXmark } from 'react-icons/fa6';

export function TodoItem(props) {

    const colorFunc = (type) => {

        const typeColor = {
            'HACER': '#ed7d31',
            'PLANIFICAR': '#599bd5',
            'DELEGAR': '#fec000',
            'POSTERGAR': '#a5a5a5'
        }
        return typeColor[type]
    }

    return (
        <li 
            className={`TodoItem ${!props.completed ? " TodoItem__check--true " : " TodoItem__check--false "}`}
            style={{ borderLeft: `8px solid ${colorFunc(props.type)}` }} 
        >
            <span 
                onClick={props.onComplete}
            > 
                { props.completed ?
                    <FaCheck 
                        className={`TodoItem__icon ${!props.completed ? '' : 'check'} `}
                        title='Completar'
                    />
                    :
                    <FaRegCircle 
                        className='TodoItem__icon'
                        title='Incompleta'
                    />
                }
            </span>
            <div style={{ width:'100%' }} >
                <p className='TodoItem__badget'>
                    {props.type}
                </p>
                <p className={`TodoItem__text ${!props.completed ? '' : 'check'} `} >
                    {props.item}
                </p>
            </div>
            <span onClick={props.onDelete}> 
                <FaXmark 
                    className={`TodoItem__icon ${!props.completed ? '' : 'check'} `}    
                />
            </span>
        </li>
    )
}