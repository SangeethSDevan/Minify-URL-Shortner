import React, { useRef } from 'react'
import "./Form.css"
import {Link, useNavigate} from "react-router-dom"
import api from '../../api'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'

function Form(props) {

  const isLogin=props.type==="Login"?true:false
  const navigate=useNavigate()
  const dispatch=useDispatch()

  const loginHandleChnage=(e)=>{
    e.preventDefault()
    const name=nameRef.current.value
    const email=emailRef.current.value
    const password=passwordRef.current.value

    if(isLogin){
      api.post("/user/login",{email:email,password:password})
      .then((res)=>res.data)
      .then((data)=>{
        dispatch({type:"USER-LOGIN",username:data.user,token:data.token})
        toast.success(`Welcome ${data.user}`)
      })
      .then(()=>navigate("/"))
      .catch(err=>toast.error(err.response.data.message))
    }else{
      api.post("/user/signup",{username:name,email:email,password:password})
      .then((res)=>{
        console.log(res)
        navigate("/login")
        toast.success(res.data.message)
      })
      .catch(err=>toast.error(err.response.data.message))
    }
  }

  const nameRef=useRef("")
  const passwordRef=useRef("")
  const emailRef=useRef("")

  return (
    <form className='form'>
      <p className='welcome'>Welcome to <span>Minify!</span></p>
      <p className='tag'>Shortify your Loong URL</p>
     {isLogin?"":<input type="text" placeholder='name' ref={nameRef}/>}
      <input type="email" placeholder='email' ref={emailRef}/>
      <input type="password" placeholder='password' ref={passwordRef}/>
      {isLogin?<p>Don't have an Account? <Link to={"/signup"} className='link'>Signup</Link></p>:<p>Already have an account? <Link to={"/login"} className='link'>Login</Link></p>}
      <button onClick={loginHandleChnage}>{props.type}</button>
    </form>
  )
}

export default Form