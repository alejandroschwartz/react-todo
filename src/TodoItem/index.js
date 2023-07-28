import './TodoItem.css';
import { BsFillXCircleFill, BsFillCheckCircleFill } from 'react-icons/bs'

export function TodoItem(props) {
    return (
        <li className={`TodoItem ${!props.completed ? " TodoItem__check--true " : " TodoItem__check--false "}`}>
            <span onClick={props.onComplete}> 
                <BsFillCheckCircleFill className='TodoItem__icon'/>
            </span>
            <p>{props.item}</p>
            <span onClick={props.onDelete}> 
                <BsFillXCircleFill className='TodoItem__icon'/>
            </span>
        </li>
    )
}