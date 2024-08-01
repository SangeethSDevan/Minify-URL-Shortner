import axios from "axios"
import { store } from "./App"

const getToken=()=>{
    const state=store.getState()
    return state.user.token
}

const api=axios.create({
    baseURL:"http://localhost:8000/api/v1"
})

api.interceptors.request.use(
    config=>{
        const token=getToken()
        if(token){
            config.headers["authorization"]=token
        }
        return config
    },
    err => console.log(err)
)

export default api;

