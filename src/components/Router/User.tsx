import React from 'react'
import { Outlet, useSearchParams } from "react-router-dom"
const User: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const showActiveUsers = searchParams.get('filter') === 'active'
  return (
    <>

      <h1>User 1</h1>
      <h1>User 2</h1>
      <h1>User 3</h1>

      <Outlet />
      <div>
        <button onClick={() => setSearchParams({ filter: 'active' })}>Active params</button>
        <button onClick={() => setSearchParams({})}>Reset Params</button>

      </div>
      {showActiveUsers ? <h2>showing active users</h2> : <h2>showing all users</h2>}
    </>
  )
}

export default User