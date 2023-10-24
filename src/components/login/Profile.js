import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0()

  if (isLoading) {
    return <div>Loading ...</div>
  }

  return (
    isAuthenticated && (
      <div className='Profile__container' >
        <img className='Profile__image' src={user.picture} alt={user.name} />
        <h2 className='Profile__title' >{user.name}</h2>
        <p className='Profile__text' >{user.email}</p>
      </div>
    )
  )
}

export default Profile