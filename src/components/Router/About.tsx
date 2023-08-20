import React from 'react'
import { useNavigate } from 'react-router-dom'
export const About :React.FC = () => {
    const navigate=useNavigate()
    const goback=()=>{
        navigate('/contact')
    }
  return (
    <div>
      <h2>
        About page
      </h2>
      <button onClick={goback}>Go back</button>
    </div>
  )
}

