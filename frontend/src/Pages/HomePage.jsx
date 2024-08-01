import React, { useEffect } from 'react'
import Navbar from '../Components/UI/Navbar'
import InputSection from '../Components/UI/InputSection'
import CardSection from '../Components/UI/CardSection'
import api from '../api'
import { useDispatch } from 'react-redux'

function HomePage() {
  const dispatch=useDispatch()

  const getLinks=()=>{
    api.get("/shortify")
    .then((res)=>res.data)
    .then((data)=>dispatch({type:"DATA-FETCH",content:data}))
  }

  useEffect(()=>{
    getLinks()
  },[])
  return <div className='home'>
        <Navbar/>
        <InputSection getLinks={getLinks}/>
        <CardSection/>
  </div>
}

export default HomePage