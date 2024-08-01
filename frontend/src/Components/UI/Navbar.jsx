import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import assets from '../../assets/assets'
import "./Navbar.css"
import { useNavigate } from 'react-router-dom'
function Navbar() {

  const user=useSelector(state=>state.user.username)
  const dispatch=useDispatch()
  const navigate=useNavigate()

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <p>Minify</p>
      </div>
      <div className="nav-user">
        <p>Hi <span> {user}!</span></p>
      </div>
      <div className="info">
        <button><img src={assets.info} alt="info" /></button>
        <button><img src={assets.logout} alt="logout" onClick={()=>{
          dispatch({type:"USER-LOGOUT"})
          navigate("/login")
          }}/></button>
      </div>
    </div>
  )
}

export default Navbar