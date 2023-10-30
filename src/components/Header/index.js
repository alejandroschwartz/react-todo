import React, { useState } from 'react';
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Profile from '../login/Profile';
import LogoutButton from '../login/LogoutButton';

export function Header() {
    const [toggle, setToggle] = useState(false); 

    return(
        <nav className="navbarItems" >
            <div className="menu__icon" onClick={() => setToggle(!toggle)} >
                {toggle
                    ? <FontAwesomeIcon icon={faXmark} fontSize={28} />
                    : <FontAwesomeIcon icon={faBars}  fontSize={28} />
                }
            </div>
            <h1 className="navbar__logo" > 
                - Listando tareas - 
            </h1>
            <ul className={toggle ? 'nav__menu active' : 'nav__menu'} onClick={() => setToggle(!toggle)} >
                <div className='App__aside'>
                    <div className='Home__container'>
                        <Profile/>
                        <Link to={'/app'} className='nav__links' >
                            Completas
                        </Link>
                        <Link to={'/app'} className='nav__links' >
                            Todas
                        </Link>
                        <Link to={'/app'} className='nav__links' >
                            Por hacer
                        </Link>
                        <Link to={'/app'} className='nav__links' >
                            Documentación
                        </Link>
                        <LogoutButton/>
                    </div>
                </div>
            </ul>
        </nav>
    )
}