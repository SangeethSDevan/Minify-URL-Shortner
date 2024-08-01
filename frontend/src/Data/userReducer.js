const initialState={
    username:"",
    token:"",
}

const userReducer=(state=initialState,action)=>{
    switch(action.type){
        case "USER-LOGIN":
            return {
                ...state,
                username:action.username,
                token:action.token,
            }
        case "USER-LOGOUT":
            console.log(state)
            return{
                username:"",
                token:"",
                data:[]
            }
        default:
            return state

    }
}

export default userReducer