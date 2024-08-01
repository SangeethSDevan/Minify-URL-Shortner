import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

function Protected({children}) {
  const token=useSelector(state=>state.user.token)
  const [isAuthorized,setisAuthorized]=useState(null)
 
  const auth=async()=>{
    if(!token) return setisAuthorized(false)

    setisAuthorized(true)
  }

 
  useEffect(()=>{
    auth().catch(()=>setisAuthorized(false))
  },[token])

  if(isAuthorized===null) return <div>Loading...</div>

  return isAuthorized?children:<Navigate to={"/login"}/>
}

export default Protected