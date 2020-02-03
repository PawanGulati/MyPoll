import {SET_CUR__POLL,SET_POLLS} from '../actionTypes'

const initialState ={
    polls:[],
    poll:null
}

export default (state=initialState,action)=>{
    switch(action.type){
        case SET_POLLS:
            return{
                ...state,
                polls:action.polls
            }
        case SET_CUR__POLL:
            return{
                ...state,
                poll:action.poll
            }
        default:
            return state        
    }
}