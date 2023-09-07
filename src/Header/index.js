import React, { Component } from 'react';
import './Header.scss';

export function Header() {

    return(
        <nav className="navbarItems" >
            <a to="/" className="navbar__logo--link" >
                <h1 className="navbar__logo" > - Listando tareas - </h1>
            </a>
        </nav>
    )
}