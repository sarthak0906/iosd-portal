import {GET_ERRORS,GET_ALL_USERS} from './types';
import axios from 'axios';

export const getAllUsers =()=> dispatch =>{
    axios
        .get('/api/users/manage')
        .then(res=>{
            dispatch({
                type: GET_ALL_USERS,
                payload: res.data
              })
        })
        .catch(err=>
            {
            dispatch({
                type:GET_ERRORS,
                payload:err.response.data
            })
        }
         );
};