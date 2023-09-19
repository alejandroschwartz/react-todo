import React from 'react';
import { FaChrome, FaGithub, FaLinkedin } from 'react-icons/fa6';
import './Footer.scss';

export function Footer() { 
    return (
        <footer className="footer">
            <p className="footer__text">
                Diseñado por: <br/> <strong> Alejandro Matías Schwartz</strong>
            </p> 
            <div className='footer__media'>
                <a className="footer__icon" href="https://www.linkedin.com/in/alejandro-matias-schwartz/">
                    <FaLinkedin className='footer__svg' />
                    <span> Linkedin</span>
                </a>
                <a className="footer__icon" href="https://github.com/alejandroschwartz">
                    <FaGithub className='footer__svg' />
                    <span> Github</span>
                </a>
                <a className="footer__icon" href='https://alejandroschwartz.com.ar/'>
                    <FaChrome className='footer__svg' />
                    <span> Portfolio</span>
                </a>
            </div>
        </footer>   
    )
};