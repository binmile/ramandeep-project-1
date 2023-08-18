import React from 'react'
type OscarProps={
    children:React.ReactNode
}
export const Oscar:React.FC<OscarProps> = (props:OscarProps) => {
  return (
    <div>
      <p>{props.children}</p>
    </div>
  )
}

