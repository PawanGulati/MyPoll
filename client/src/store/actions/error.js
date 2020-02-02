import {ADD_ERROR,REMOVE_ERROR,CLOSE_ERR_COMP} from '../actionTypes'

export const addError = (error) =>({
    type:ADD_ERROR,
    error
})

export const removeError = () =>({
    type:REMOVE_ERROR
})

export const closeErr = () =>({
    type:CLOSE_ERR_COMP
})