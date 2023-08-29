import React from 'react'
import { NavBar } from './NavBar'
import { useNavigate } from 'react-router-dom'
export const About: React.FC = () => {
  const navigate = useNavigate()
  const goContact = () => {
    navigate('/contact')
  }
  const goback = () => {
    navigate(-1)
  }
  const backtoMainPage = () => {
    navigate('/', { replace: true })
  }

  return (
    <>


      <h2>
        About page
      </h2>
      <button onClick={goContact}>go to contact page</button>
      <button onClick={goback}>Go back</button>
      <button onClick={backtoMainPage}>go back to original tab</button>

    </>
  )
}

