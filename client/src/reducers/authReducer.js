import {SET_CURRENT_USER,PROFILE_LOADING,GET_PROFILE,CLEAR_CURRENT_PROFILE} from '../actions/types';
import isEmpty from '../validations/is-empty';


const initialState={
    isAuthenticated :false,
    user:{},
    loading:false
}

export default function(state=initialState,action){
    switch(action.type){
        case SET_CURRENT_USER:
           return{
               ...state,
               isAuthenticated: !isEmpty(action.payload),
               user:action.payload
           }
        case PROFILE_LOADING:
           return {
               ...state,
               loading:true
           };
        case GET_PROFILE:
           return {
               ...state,
               loading:false,
               profile:action.payload
           };
           case CLEAR_CURRENT_PROFILE:
           return {
               ...state,
               profile:null
           };
        default:
           return state;
    }
}