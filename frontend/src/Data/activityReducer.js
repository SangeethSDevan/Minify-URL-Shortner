const initialState={
    newLoong:"",
    base:"",
    links:[]
}

const activityReducer=(state=initialState,action)=>{
    switch(action.type){
        case "HANDLE-CHANGE":
          return {
            ...state,
            newLoong:action.content
          }
        case "DATA-FETCH":
            return {
                ...state,
                links:action.content.data,
                base:action.content.base
            }
        case "DATA-DELETE":
            return {
                ...state,
                links:state.links.filter(item=>item._id!==action.id)
            }
        default:
            return state
    }
}

export default activityReducer;