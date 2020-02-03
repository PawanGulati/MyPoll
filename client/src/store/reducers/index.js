import {combineReducers} from 'redux'

import error from './error'
import auth from './auth'
import polls from './polls'

export default combineReducers({
    error,auth,polls
})
