import React from 'react'
import { NavLink } from 'react-router-dom'
export const NavBar:React.FC = () => {
  return (
    <div>
          <header>
        <a href="#">Logo</a>
        <nav>
            <ul>
                <li> <NavLink to="/home">Home</NavLink></li>
                <li> <NavLink to="/about">About</NavLink></li>
                <li> <NavLink to="/contact">Contact</NavLink></li>
                <li> <NavLink to="/practice">Practice</NavLink></li>


            </ul>
        </nav>
      </header>
    </div>
  )
}

