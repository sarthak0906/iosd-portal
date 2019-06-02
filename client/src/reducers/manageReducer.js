import{GET_ALL_USERS,CLEAR_ALL_USERS} from '../actions/types'

const initialState={
    allusers:null
}

export default function(state=initialState,action){
    switch(action.type){
        case GET_ALL_USERS:
            return {...state,
                allusers:action.payload}
        case CLEAR_ALL_USERS:
            return {...state,
                allusers:null}
        default:
           return state;
    }
}