import React, { useContext } from 'react'
import { themeCon } from './ThemeContext'

export const Box = () => {
  const theme = useContext(themeCon)
  return (
    <>
      <p style={{ backgroundColor: theme.primary.main, color: theme.primary.text }}>theme context</p>
    </>
  )
}

