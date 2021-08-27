import {combineReducers} from 'redux'
import authReducer from './authReducer'
import postReducer from './postReducer'
import userReducer from './userReducer'
import groupeReducer from './groupeReducer'
import groupeadminReducer from './groupeAdminReducer'
import commentReducer from './commentReducer'
export default combineReducers(  {
        auth: authReducer ,
    posts:postReducer,
     user:userReducer,
     groupe:groupeReducer,
     gadmin:groupeadminReducer,
    comment:commentReducer,
 })