import {SET_CUR_POLL,SET_POLLS} from '../actionTypes'

const initialState ={
    polls:[],
    poll:{},
    pollCount:0
}

export default (state=initialState,action)=>{
    switch(action.type){
        case SET_POLLS:
            return{
                ...state,
                polls:action.polls,
                pollCount:action.totalPolls.length
            }
        case SET_CUR_POLL:
            return{
                ...state,
                poll:action.poll
            }
        default:
            return state        
    }
}

// export const polls = (state=[],action) =>{
//     switch(action.type){
//         case SET_POLLS:
//             return action.polls
//         default:
//             return state
//     }   
// }

// export const curPolls = (state={},action) =>{
//     switch(action.type){
//         case SET_POLLS:
//             return action.poll
//         default:
//             return state
//     }   
// }
