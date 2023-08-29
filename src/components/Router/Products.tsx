import React from 'react'
import { Link, Outlet } from "react-router-dom"
const Products = () => {
  return (
    <>
      <h1>product page</h1>
      <input placeholder="search" />
      <Link to="feature">featured</Link>
      <br />
      <Link to="new">new</Link>
      <Outlet />
    </>

  )
}

export default Products
