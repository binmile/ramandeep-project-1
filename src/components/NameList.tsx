import React from 'react'
import { ListProps} from './type'

export const NameList = (props:ListProps) => {
  const {name}=props

  return (
    <div>
      {name.map((i,index)=>{
        return(
            <h2 key={index}>{i.first} {i.last}</h2>
        )
      })}
    </div>
  )
}

