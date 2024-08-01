import "./InputSection.css"
import { useDispatch, useSelector } from 'react-redux'
import api from '../../api'

function InputSection({getLinks}) {
  const dispatch=useDispatch()
  const loong=useSelector(state=>state.data.newLoong)

  const addLink=()=>{
    console.log(loong)
    api.post("/shortify",{url:loong})
    .then((res)=>toast.success(res.data.message))
    .then(()=>getLinks())
    .catch(err=>toast.error(err.response.data.message))
  }

  return (
    <div className='input'>
        <p><span>Minify</span> your Looong URL:</p>
        <div className="input-comp">
            <input type="text" placeholder='Enter your URL here' onChange={(e)=>dispatch({type:"HANDLE-CHANGE",content:e.target.value})}/>
            <button onClick={addLink}>Shortify</button>
        </div>
    </div>
  )
}

export default InputSection