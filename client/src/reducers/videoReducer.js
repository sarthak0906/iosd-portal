import{GET_ERRORS,GET_VIDEOS,SET_URL} from '../actions/types'

const initialState={
    data:null,
    video:null
}

export default function(state=initialState,action){
    switch(action.type){
        case GET_ERRORS:
           return action.payload;
      
        case GET_VIDEOS:
        return{
            ...state,
            data:action.payload
        }     
        
        case SET_URL:
        return{
            ...state,
            video:action.payload
        }     
        
        default:
           return state;

    }
}