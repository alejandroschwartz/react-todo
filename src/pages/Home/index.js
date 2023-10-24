import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'
import { Header } from '../../components/Header'
import { SvgStudy } from '../../assets/SvgStudy'
import LogoutButton from '../../components/login/LogoutButton'
import Login from '../../components/login/Login'
import Profile from '../../components/login/Profile'
import Loading from '../../assets/loading.gif'
import './Home.scss'

const Home = () => {
    const { isAuthenticated, isLoading } = useAuth0();

    return (
        <>
            <Header />
            {isLoading ?
                <div className='Home_loading'>
                    <img src={Loading}  className='Home_loading--img' /> 
                    <p>Cargando...</p>
                </div>
                :
                <>
                    {isAuthenticated ? 
                        <div className='Home__container'>
                            <Profile />
                            <Link to={'/app'} className='Home__link' >
                                Tareas
                            </Link>
                            <LogoutButton /> 
                        </div>
                        : 
                        <div className='Home__container'>
                            {/* <div className='Home__image'>
                                <SvgStudy />
                            </div>
                            <h2 className='Home__text'>
                                Organiza, planifica y triunfa gestionando tus tareas
                            </h2> */}
                            <Login />
                        </div>
                    }
                </>
            }
        </>
    )
}

export { Home }