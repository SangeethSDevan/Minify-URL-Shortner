import axios from "axios"
import { store } from "./App"

const getToken=()=>{
    const state=store.getState()
    return state.user.token
}

const api=axios.create({
    baseURL:import.meta.env.VITE_URL
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

