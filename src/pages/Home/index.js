import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'
import { Header } from '../../components/Header'
import LogoutButton from '../../components/login/LogoutButton'
import Login from '../../components/login/Login'
import Profile from '../../components/login/Profile'
import Loading from '../../assets/loading.gif'
import './Home.scss'

const Home = () => {
    const { isAuthenticated, isLoading } = useAuth0();

    if(isLoading) {
        return <>
            <Header />
            <div className='Home__loading'>
                <img src={Loading} className='Home__loading--img' /> 
                <p>Cargando...</p>
            </div>
        </>
    } 

    return <>
        <Header />
        {isAuthenticated ? 
            <div className='Home__container'>
                <Profile />
                <Link to={'/tareas'} className='Home__link' >
                    Tareas
                </Link>
                <LogoutButton /> 
            </div>
            : 
            <div className='Home__container'>
                <Login />
            </div>
        }
    </>
}

export { Home }