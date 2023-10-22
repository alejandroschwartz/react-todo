import React from 'react'
import { Header } from '../../Header'
import { useAuth0 } from '@auth0/auth0-react'
import LogoutButton from '../../LogoutButton'
import LoginButton from '../../LoginButton'
import Profile from '../../Profile'
import './Home.scss'
import { SvgStudy } from '../../assets/SvgStudy'
import { Link } from 'react-router-dom'

const Home = () => {
    const { isAuthenticated } = useAuth0();

    return (
        <>
            <Header />
            {isAuthenticated ? 
                <div className='Home__container'>
                    <Profile />
                    <Link to={'/app'} className='Home__link' >
                        home
                    </Link>
                    <LogoutButton /> 
                </div>
                : 
                <div className='Home__container'>
                    <div className='Home__image'>
                        <SvgStudy />
                    </div>
                    <h2 className='Home__text'>
                        Organiza, planifica y triunfa gestionando tus tareas
                    </h2>
                    <LoginButton />
                </div>
            }
        </>
    )
}

export { Home }