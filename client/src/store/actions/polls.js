import {SET_POLLS,SET_CUR__POLL} from '../actionTypes'
import { addError, removeError } from './error'
import api from '../../services/api/api'

export const setPolls = polls =>({
    type:SET_POLLS,
    polls
})

export const setCurPoll = poll =>({
    type:SET_CUR__POLL,
    poll
})

export const getPolls = () =>{
    return async dispatch =>{
        try {
            const polls = await api.call('get','polls')
            // console.log(polls);
            
            dispatch(setPolls(polls))
            dispatch(removeError())
        } catch (err) {
            const {error} = err.response.data
            dispatch(addError(error))
        }
    }
}

export const getUserPolls = () =>{
    return async dispatch =>{
        try {
            const polls = await api.call('get','polls/user')
            
            dispatch(setPolls(polls))
            dispatch(removeError())
        } catch (err) {
            const {error} = err.response.data
            dispatch(addError(error))
        }
    }
}

export const createPoll = data =>{
    return async dispatch =>{
        try {
            const poll = await api.call('post','polls',data)
            dispatch(setCurPoll(poll))
            dispatch(removeError())
        } catch (err) {
            const {error} = err.response.data
            dispatch(addError(error))
        }
    }
}

export const getPoll = id =>{
    return async dispatch =>{
        try {
            const poll = await api.call('get',`polls/${id}`)
            dispatch(setCurPoll(poll))
            dispatch(removeError())
        } catch (err) {
            const {error} = err.response.data
            dispatch(addError(error))
        }
    }
}

export const vote = (id,data) =>{
    return async dispatch =>{
        try {
            const poll = await api.call('post',`polls/${id}`,data)
            dispatch(setCurPoll(poll))
            dispatch(removeError())
        } catch (err) {
            const {error} = err.response.data
            dispatch(addError(error))
        }
    }
}