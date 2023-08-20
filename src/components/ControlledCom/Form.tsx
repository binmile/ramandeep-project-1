import React,{ FormEvent, useState}from 'react'
import { FormType } from '../type'
export const Form:React.FC= () => {
 
    const[fullName,setFullName]=useState<FormType>({
        fname:"",
        email:"",
        phone:""
    })
    const inputEvent=(e:React.ChangeEvent<HTMLInputElement>)=>{
const{name,value}=e.target;
        setFullName((preValue)=>({
          
            ...preValue,
            [name]:value
    }))
    }
    const onSubmit=(e:FormEvent)=>{
        e.preventDefault()
    }
  return (
    <div>
      <h1>Hello {fullName.fname} {fullName.phone} {fullName.email} </h1>
      <input type="text" placeholder='Enter your name' onChange={inputEvent} name="name" value={fullName.fname}/>
      <input type="text" placeholder='Enter your phone number' onChange={inputEvent} name="phone" value={fullName.email}/>
      <input type="text" placeholder='Enter your name' onChange={inputEvent} name="email" value={fullName.phone}/>

      <button onClick={onSubmit}>Click</button>
    </div>
  )
}