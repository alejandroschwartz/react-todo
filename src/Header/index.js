import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import './Header.scss';

export function Header() {

    // state = {
    //     clicked: false
    // }

    // handleClick = () => {
    //     this.setState({ clicked: !this.state.clicked })
    // }

    // render() {
        return(
            <nav className="navbarItems" >
                <a to="/" className="navbar__logo--link" >
                    <h1 className="navbar__logo" > - Listando tareas - </h1>
                </a>
                {/* <a to="/" className="navbar__logo--link" >
                    <h3 className="navbar__logo" > Alejandro Schwartz </h3>
                </a> */}
                {/* <div className="menu__icon" onClick={this.handleClick} >
                    {this.state.clicked 
                        ? <FontAwesomeIcon icon={faXmark} fontSize={28} />
                        : <FontAwesomeIcon icon={faBars}  fontSize={28} />
                    }
                </div> */}
                {/* // <ul className={this.state.clicked ? 'nav__menu active' : 'nav__menu'} onClick={this.handleClick} >
                    // <Link to="/" className="nav__links" >
                    //     <li>Sobre mí</li>
                    // </Link>
                    // <Link to="/proyect" className="nav__links" >
                    //     <li>Proyectos</li>
                    // </Link>
                    // <Link to="/blog" className="nav__links" >
                    //     <li>Blog</li>
                    // </Link>
                        <Link to="/contact" className="nav__links" >
                        <li>Contacto</li>
                    </Link> 
                </ul> */}
            </nav>
        )
    // }
}