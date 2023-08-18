import React from 'react'
type HeadingProps={
  children:string
}
export const Heading:React.FC<HeadingProps> = (props) => {
  return (
    <div>
        <h2>{props.children}</h2>
    </div>
  )
}


