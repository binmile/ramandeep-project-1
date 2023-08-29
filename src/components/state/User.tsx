import React, { useState } from 'react'
import { AuthUser } from '../type'
export const User: React.FC = () => {
  const [user, setUser] = useState<AuthUser | null>(null)
  const handleLogin = () => {
    setUser({
      name: 'raman',
      email: 'ramansaini@gmail.com'
    })
  }
  const handleLogOut = () => {
    setUser(null)
  }
  return (
    <>

      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogOut}>LogOut</button>
      <p>user name is {user?.name}</p>
      <p>user email is {user?.email} </p>

    </>
  )
}

