import {ADD_ERROR,REMOVE_ERROR, CLOSE_ERR_COMP} from '../actionTypes'

const initial_state ={
    message:null,
    openErr:false
}

export default (state = initial_state, action) =>{
    switch(action.type){
        case ADD_ERROR:
            return{...state,message:action.error.message,openErr:true}
        case REMOVE_ERROR:
            return{...state,message:null}
        case CLOSE_ERR_COMP:
            return{...state,openErr:false}
        default:
            return state        
    }
}