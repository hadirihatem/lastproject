import {
    GETCOMMENT_SUCCESS,
    GETCOMMENT_FAIL,
    DELETECOMMENT_FAIL,
    ADDCOOMENT_FAIL,
} from "../action/type";

let initState = {
   comment:[]
  };

  const commentReducer = (state = initState, action) => {
    switch (action.type) {
    case GETCOMMENT_SUCCESS:
        return {
             ...state,
            comment:action.payload.data
        }
      default:
        return state;
    }
  };
  
  export default commentReducer;
  