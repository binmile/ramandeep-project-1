import React from 'react'
import { NavBar } from './NavBar'
import { Outlet, NavLink, Link } from "react-router-dom"
export const MainHeader: React.FC = () => {
  return (

    <>
      <NavBar />

      <Link to="home">Home</Link>
      <Link to="about">About</Link>
      <Link to="contact">Contact</Link>
      <Link to="user">User</Link>
      <Link to="products">Products</Link>
      <Link to="profile">Profile</Link>

      <Outlet />
    </>
  )
}

