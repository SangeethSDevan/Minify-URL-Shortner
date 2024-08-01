import React from 'react'
import "./CardSection.css"
import { useSelector,useDispatch} from 'react-redux'
import api from '../../api'
import assets from '../../assets/assets'
import { toast } from 'react-toastify'

function CardSection() {

  const dispatch=useDispatch()

  const deleteLink=(id)=>{
    dispatch({type:"DATA-DELETE",id:id})
    api.delete(`shortify/delete/${id}`)
    .then((res)=>toast.success(res.data.message))
    .catch((err)=>alert(err.response.data.message))
  }

  const handleCopy=async(text)=>{
    try{
      await navigator.clipboard.writeText(text)
      toast.success("Copied to Clipboard!")
    }catch(err){
      toast.error("Couldn't Copy message!")
    }
  }

  const data=useSelector(state=>state.data.links)
  const base=useSelector(state=>state.data.base)
  
  return <div className='table'>
    {data.length===0?
    <p>Enter a valid link and press "Shortify" to get URL</p>:
    <table>
    <thead>
      <tr>
      <th>Loong URL</th>
      <th>Mini URL</th>
      <th>Clicks</th>
      <th>Delete</th>
      </tr>
    </thead>
    <tbody>
    {data.map(item=><tr key={item._id}>
      <td>{item.url.length>25?item.url.slice(0,25)+"...":item.url}</td>
      <td className='short'>
        <a href={`${base}/${item.shortid}`} target='_blank'>{item.shortid}</a>
        <img src={assets.copy} alt="copy" onClick={()=>handleCopy(`${base}/${item.shortid}`)}/>
        </td>
      <td>{item.clicks}</td>
      <td className='close'><img src={assets.close} alt="close" onClick={()=>deleteLink(item._id)}/></td>
    </tr>)}
    </tbody>
  </table>
    }
  </div>
}

export default CardSection