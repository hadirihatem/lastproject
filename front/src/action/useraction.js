import {
  
  UPLOAD_PICTURE,
    UPDATEUSER_SUCCES,
    UPDATEUSER_FAIL,
    GETUSERS_SUCCESS,
    GETUSERS_FAIL,
    FOLLOW_FAIL,
    FOLLOW,
    UNFOLLOW_FAIL,
    UNFOLLOW,
 
    SUBSCRIBE_SUCCESS,
    SUBSCRIBE_FAIL,
}from './type'
import axios from "axios";

import { loadUser } from './authaction';
//-------------------upoladavatar------------



export const uploadPicture = (data, id) =>(dispatch)=> {
  console.log(id)
  console.log(data)
       axios
        .put(`http://localhost:4000/uploadpic/${id}`, data)
        .then((res) => dispatch(loadUser(id)))
          .catch((err) =>
          dispatch({
            type: UPLOAD_PICTURE,
            payload: err.response.data.msg,
          })
        );
        }



export const updateuser=(id,data )=>(dispatch)=>{
  console.log(id)
  console.log(data)

  axios.put(`http://localhost:4000/users/${id}`, data)
  .then((res) => {
    dispatch({
      type: UPDATEUSER_SUCCES,
      payload: { user: "User Updated" },
    });
    dispatch(loadUser())
  })
  .catch((err) =>
    dispatch({
      type: UPDATEUSER_FAIL,
      payload: err,
    })
  );
};

//--------------------

export const getUsersList = () => (dispatch) => {
  axios
    .get(`http://localhost:4000/users`)
    .then((res) => {
      dispatch({
        type: GETUSERS_SUCCESS,
        payload: res.data.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GETUSERS_FAIL,
      });
      // console.log(err);
    });
}


export const follow =(userId)=>(dispatch)=>{
  
  axios.put(`http://localhost:4000/user/follow/${userId}`)
  .then((res)=>{
    dispatch({
      type: FOLLOW,
      payload: res.data,
    })
  })
  .catch((err) => {
    dispatch({
      type: FOLLOW_FAIL,
      payload:err
    });
    // console.log(err);
  });
}

export const unfollow =(userId)=>(dispatch)=>{
  axios.put(`http://localhost:4000/user/unfollow/${userId}`)
  .then((res)=>{
    dispatch({
      type:UNFOLLOW,
      payload: res.data,
    })
  })
  .catch((err) => {
    dispatch({
      type:UNFOLLOW_FAIL ,
      payload:err
    });
    // console.log(err);
  });
}

//--------------getfriends----------------

export const subscribe=(id)=>(dispatch)=>{
axios.put(`http://localhost:4000/user/users/${id}`)
.then((res)=>{
  dispatch({
    type:SUBSCRIBE_SUCCESS,
    payload: res.data,
  })
})
.catch((err) => {
  dispatch({
    type:SUBSCRIBE_FAIL ,
    payload:err
  });
  // console.log(err);
});
}
