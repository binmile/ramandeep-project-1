import React from 'react'
import{useState} from 'react'
const Login :React.FC= () => {
    const [isLoggedIn,setLoggedIn]=useState<boolean>(false)
    const handleLogin=()=>{
        setLoggedIn(true)
    }
    const handleLogout=()=>{
setLoggedIn(false)
    }
  return (
    <>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>LogOut</button>
      <div>user is {isLoggedIn?'logged in':'logged out'}</div>
    </>
  )
}

export default Login
