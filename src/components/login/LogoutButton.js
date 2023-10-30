import { useAuth0 } from "@auth0/auth0-react"
import React from "react"
import './Login.scss'

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <div className='LogoutButton__container' >
      <button 
        className='LogoutButton__button'
        onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
      >
        Cerrar sesión
      </button>
    </div>
  );
};

export default LogoutButton;