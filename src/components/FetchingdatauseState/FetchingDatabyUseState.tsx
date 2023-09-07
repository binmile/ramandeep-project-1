import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {loaderType} from "../../components/type"

const FetchingDatabyUseState = () => {
    const [loading,setLoading]=useState(true)
    const [error,setError]=useState("");
    const [post,setPost]=useState<Record<string, string | number>>({})
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1').then((res)=>{
            setLoading(false);
            setPost(res.data)
            setError('')
        }).catch((error)=>{
            setLoading(false);
            setPost({});
            setError(error);
        })
    })
  return (
    <div>
      {loading?"loading the page":post.title}
      {error?error:null}
    </div>
  )
}

export default FetchingDatabyUseState
