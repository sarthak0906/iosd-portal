import {GET_ERRORS,
        SET_CURRENT_USER,
        GET_PROFILE,
        PROFILE_LOADING,
        CLEAR_CURRENT_PROFILE,
        CLEAR_ALL_USERS} from './types';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken'
import jwt_decode from 'jwt-decode'


//Register User
export const registerUser =(userData,history)=> dispatch =>{
    axios
        .post('/api/users/register',userData)
        .then(res=>//console.log(res.data)
        history.push('/login'))
        .catch(err=>
            {
            
            dispatch({
                type:GET_ERRORS,
                payload:err.response.data
            })
        }
         );
};
//this.props.history.push('/dashboard)

// Login - Get User Token
export const loginUser =(userData) =>dispatch=>{
    axios
        .post('/api/users/login',userData)
        .then(res =>{
              //save to local Storage
              const { token }=res.data;
              localStorage.setItem('jwtToken',token);
              //set token to Auth header
              setAuthToken(token);
              //Decode token to get userData
              const decoded=jwt_decode(token);
              //set current user
              console.log(decoded.payload+':decoded')
              dispatch(setCurrentUser(decoded));
        })
        .catch(err=>
            dispatch({
                type:GET_ERRORS,
                payload:err.response.data
            })
        )
};

//set logged in user
export const setCurrentUser=(decoded)=>{
    return{
        type:SET_CURRENT_USER,
        payload:decoded
    }
}

//log out 
export const logoutUser =()=>dispatch=>{
  localStorage.removeItem('jwtToken');
    setAuthToken(false);
    dispatch(setCurrentUser({})) 
    
}

export const clearAllUsers =()=>dispatch=>{
  dispatch({
    type:CLEAR_ALL_USERS
})
}

// Get current profile
export const getCurrentProfile = () => dispatch => {
    dispatch(setProfileLoading());
    axios
      .get('/api/users/current')
      .then(res =>
        dispatch({
          type: GET_PROFILE,
          payload: res.data
        })
      )
      .catch(err =>
        dispatch({
          type: GET_PROFILE,
          payload: {}
        })
      );
  };

// Profile loading
export const setProfileLoading = () => {
    return {
      type: PROFILE_LOADING
    };
  };

// Clear profile
export const clearCurrentProfile = () => {
    return {
      type: CLEAR_CURRENT_PROFILE
    };
  };
  
