import { SET_CUR_USER } from "../actionTypes"

const initialState = {
    isAuth:false,
    user:{}
}

export default (state=initialState,action) =>{
    switch(action.type){
        case SET_CUR_USER:
            return {
                isAuth: !!Object.keys(action.user).length,
                user:action.user                
            }
        default:
            return state    
    }
}