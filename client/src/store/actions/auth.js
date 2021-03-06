import {SET_CUR_USER} from '../actionTypes'
import {removeError,addError} from './error'

import api from '../../services/api/api'

export const setCurUser = user =>({
    type:SET_CUR_USER,
    user
})

const setToken = token =>{
    api.setToken(token)
}

export const authUser = (path,data) =>{
    return async dispatch =>{
        try {
            const {token, ...user} = await api.call('post',`auth/${path}`,data)
            // console.log(token,user);   

            setToken(token) 
            
            localStorage.setItem(
                'jwtToken',token
            )
            dispatch(setCurUser(user))
            dispatch(removeError())
        } catch (err) {
            // console.log(err.response);
            
            const {error} = err.response.data
            
            dispatch(addError(error))
        }
    }
}

export const logout = () =>{
    return dispatch =>{
        localStorage.clear()
        api.setToken(null)
        dispatch(setCurUser({}))
        dispatch(removeError())
    }
}
