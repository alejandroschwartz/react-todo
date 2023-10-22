import { useAuth0 } from "@auth0/auth0-react"
import React from "react"
import './LoginButton.scss'

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className='LoginButton__container' >
      <button 
        className='LoginButton__button'
        onClick={() => loginWithRedirect()}
      >
        Iniciar seción
      </button>
      <button 
        className='LoginButton__button'
        onClick={() => loginWithRedirect()}
      >
        Registrarse
      </button>
    </div>
  )
};

export default LoginButton;