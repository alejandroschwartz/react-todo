import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import Login from '../../components/login/Login'
import Loading from '../../assets/loading.gif'
import { Todo } from '../Todo'
import './Home.scss'

const Home = () => {
    const { isAuthenticated, isLoading } = useAuth0();

    if(isLoading) {
        return <>
            <div className='Home__loading'>
                <img src={Loading} className='Home__loading--img' /> 
                <p>Cargando...</p>
            </div>
        </>
    } 

    return <>
        { isAuthenticated 
            ? <Todo/>
            : <Login />
        }
    </>
}

export { Home }