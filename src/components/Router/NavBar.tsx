import React from 'react'
import { NavLink } from 'react-router-dom'
export const NavBar: React.FC = () => {
  const navLinkStyles = ({ isActive }: { isActive: boolean }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration: isActive ? 'none' : 'underline',
      color: isActive ? 'red' : 'green'
    }
  }
  return (
    <>
      <header>
        <a href="#">Logo</a>
        <nav>
          <ul>
            <li> <NavLink style={navLinkStyles} to="useCallback">useCallBack</NavLink></li>
            <li> <NavLink style={navLinkStyles} to="context">context</NavLink></li>
            <li> <NavLink style={navLinkStyles} to="context/example">context 2 eg</NavLink></li>
            <li> <NavLink style={navLinkStyles} to="controlledComponents">controlledComponents</NavLink></li>
            <li> <NavLink style={navLinkStyles} to="lifecycle">Lifecycle</NavLink></li>
            <li> <NavLink style={navLinkStyles} to="pureComponent">pure Components</NavLink></li>
            <li> <NavLink style={navLinkStyles} to="useReducer">useReducer</NavLink></li>
            <li> <NavLink style={navLinkStyles} to="states">states and props</NavLink></li>
            <li> <NavLink style={navLinkStyles} to="usememo">useMemo</NavLink></li>
            <li> <NavLink style={navLinkStyles} to="useEffect">useEffect</NavLink></li>
            <li> <NavLink style={navLinkStyles} to="routes">routes and nested routes</NavLink></li>
            <li> <NavLink style={navLinkStyles} to="reducerwithContext">reducerwithContext</NavLink></li>
            <li> <NavLink style={navLinkStyles} to="jsonByuseState">Json By useState </NavLink></li>
            <li> <NavLink style={navLinkStyles} to="jsonByuseReducer">Json By useReducer </NavLink></li>

          </ul>
        </nav>
      </header>
    </>
  )
}

