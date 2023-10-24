import React from "react"
import { useAuth0 } from "@auth0/auth0-react"
import { SvgStudy } from "../../assets/SvgStudy";
import './Login.scss'

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <>
      <div className='Login__image'>
          <SvgStudy />
      </div>
      <div className='Login__container' >
        <h2 className='Login__text'>
            Organiza, planifica y triunfa gestionando tus tareas
        </h2>
        <button 
          className='Login__button register'
          onClick={() => loginWithRedirect()}
        >
          Registrarse
        </button>
        <button 
          className='Login__button login'
          onClick={() => loginWithRedirect()}
        >
          Iniciar sesión
        </button>
      </div>
    </>)
};

export default Login;