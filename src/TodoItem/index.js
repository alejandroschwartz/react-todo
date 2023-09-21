import React from 'react';
import './TodoItem.scss';
import { FaCheck, FaRegCircle, FaXmark } from 'react-icons/fa6';

export function TodoItem(props) {

    return (
        <li className={`TodoItem ${!props.completed ? " TodoItem__check--true " : " TodoItem__check--false "}`}>
            <span onClick={props.onComplete}> 
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
            <p className={`TodoItem__text ${!props.completed ? '' : 'check'} `} >
                {props.item}
            </p>
            <span onClick={props.onDelete}> 
                <FaXmark 
                    className={`TodoItem__icon ${!props.completed ? '' : 'check'} `}    
                />
            </span>
        </li>
    )
}