import { IconButton } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { deletecomment } from "../action/postaction";
import BorderColorIcon from "@material-ui/icons/BorderColor";

import DeleteIcon from "@material-ui/icons/Delete";
import refreshComment from "./Posts"
const ITEM_HEIGHT = 48;

const Comments = (props) => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <br />
      <p>comment</p>

      <hr />
      {props.comments &&
        props.comments.map((comment, index) => (
          <h5>
            <img
              src={comment.writer.avatar}
              style={{ borderRadius: "50%", width: "30px", height: "30px" }}
            />
            {comment.writer.firstname} : {comment.content} 
  
          
           <DeleteIcon  style={{marginLeft:'230px'}}
           onClick={() => dispatch(deletecomment(comment._id))}/>
          </h5>
        ))}
    </div>
  );
};

export default Comments;

// <IconButton
// aria-label="more"
// aria-controls="long-menu"
// aria-haspopup="true"
// onClick={handleClick}
// >
// <MoreVertIcon />
// </IconButton>
// <Menu
// id="long-menu"
// anchorEl={anchorEl}
// keepMounted
// open={open}
// onClose={handleClose}
// PaperProps={{
// style: {
//   maxHeight: ITEM_HEIGHT * 4.5,
//   width: '20ch',
// },
// }}
// >
// <button onClick={()=>dispatch(deletecomment(comment._id)),handleClose}>delete</button>
// <button onClick={handleClose}>update</button>
// </Menu>
