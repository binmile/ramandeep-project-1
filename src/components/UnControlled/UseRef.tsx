import React, { useState,useRef } from 'react'

export const UseRef:React.FC = () => {
    const luckyName=useRef<HTMLInputElement>(null!);
    const[show,setShow]=useState<boolean>(false);
    const onSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const name=luckyName.current.value;
        name === ""?alert("plz fill the data"):setShow(true)
    }
  return (
    <>
      <form action="" onSubmit ={onSubmit}>
        <div>
        <label htmlFor='luckyName'>
            Entr your LuckyName
        </label>
        <input type="text" id="luckyName" ref={luckyName} />
        </div>
        <br/>
        <button >Submit</button>
        <p>{show? `your  name is ${luckyName.current.value} `:""}</p>
      </form>
    </>
  )
}

