import React from 'react'
import { ButtonProps } from '../type'

const Button: React.FC<ButtonProps> = ({ handleClick, children }) => {
  console.log('rendering button - ', children)
  return (
    <>
      <button onClick={handleClick}>{children}</button>
    </>
  )
}

export default React.memo(Button)
