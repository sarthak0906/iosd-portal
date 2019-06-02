import { combineReducers } from 'redux'
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import videoReducer from './videoReducer'
import manageReducer from './manageReducer'


export default combineReducers({
    auth:authReducer,
    errors:errorReducer,
    video:videoReducer,
    allusers:manageReducer

})