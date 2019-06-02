import axios from 'axios';
import {GET_VIDEOS,
    GET_ERRORS,
    SET_URL
} from './types';


//GET VIDEOS
export const getVideos =()=> dispatch =>{
    axios
        .get('/get-course')
        .then(res=>{
            //console.log(res.data[0]);
            dispatch({
                type:GET_VIDEOS,
                payload:res.data[0]
            })
        })
        .catch(err=>
            {    console.log(err)        
            dispatch({
                type:GET_ERRORS,
                payload:err
            })
        }
         );
};

export const setCurrentUrl =(name)=> dispatch =>{
    axios
        .get(`/fetch/${name}`)
        .then(res=>{
            console.log(res);
            dispatch({
                type:SET_URL,
                payload:res
            })
        })
        .catch(err=>
            {    console.log(err)        
            dispatch({
                type:GET_ERRORS,
                payload:err
            })
        }
         );
};