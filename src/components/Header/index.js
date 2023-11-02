import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import Profile from '../login/Profile';
import LogoutButton from '../login/LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';
import { TodoContext } from '../TodoContext';
import { FaCheck, FaListCheck, FaRegCircle } from 'react-icons/fa6';
import './Header.scss';

export function Header() {
    const {
        setSearchType,
        searchType,
    } = useContext(TodoContext); 
    const [toggle, setToggle] = useState(false); 
    const { isAuthenticated, isLoading } = useAuth0();
    const [valueType, setValueType] = useState()
    useEffect(() => {
        setValueType(searchType);
    }, [searchType]);

    return(
        <nav className="navbarItems" >
            { isAuthenticated &&
                <div className="menu__icon" onClick={() => setToggle(!toggle)} >
                    { toggle
                        ? <FontAwesomeIcon icon={faXmark} fontSize={28} />
                        : <FontAwesomeIcon icon={faBars}  fontSize={28} />
                    }
                </div>
            }
            <span className="navbar__logo"> - Listando tareas - </span>
            { isAuthenticated &&
                <ul className={toggle ? 'nav__menu active' : 'nav__menu'} onClick={() => setToggle(!toggle)} >
                    <div className='App__aside'>
                        <div className='Home__container'>
                            <Profile/>
                            <button className='nav__links' title='Ver todas' onClick={() => setSearchType('all')}>
                                <FaListCheck className='menu__svg'/>Todas
                            </button>
                            <button className='nav__links' title='Ver completas' onClick={() => setSearchType('completed')}>
                                <FaCheck className='menu__svg'/>Completas
                            </button>
                            <button className='nav__links' title='Ver incompletas' onClick={() => setSearchType('incompleted')}>
                                <FaRegCircle className='menu__svg'/>Por hacer
                            </button>
                            <LogoutButton/>
                        </div>
                    </div>
                </ul>
            }
        </nav>
    )
}