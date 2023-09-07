import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import './Footer.scss';

export function Footer() { 
    return (
        <footer className="footer">
            <p className="footer__text">
                Diseñado por: <br/> <strong> Alejandro Matías Schwartz</strong>
            </p> 
            <div className='footer__media'>
                <a className="footer__icon" href="https://www.linkedin.com/in/alejandro-matias-schwartz/">
                    <FaLinkedin fontSize={36} color="#313434" />
                </a>
                <a className="footer__icon" href="https://github.com/alejandroschwartz">
                    <FaGithub fontSize={36} color="#313434" />
                </a>
            </div>
        </footer>   
    )
};