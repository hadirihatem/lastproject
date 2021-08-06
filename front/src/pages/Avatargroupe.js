import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadavatar } from "../action/groupeaction";



const Avatargroupe = ({groupe}) => {
  const [file, setFile] = useState();
  const dispatch = useDispatch();


  const handlePicture = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("groupeId", groupe._id);
    data.append("picture", file);

    dispatch(uploadavatar( groupe._id, data));
  };


  return (
    <form  onSubmit={handlePicture}>
      <label >Changer d'image</label>
      <input
       style={{textDecoration:'none'}}
        type="file"
        id="file"
        name="file"
        onChange={(e) => setFile(e.target.files[0])}
      />
      
      <br/>
      
      <input type="submit" value="Envoyer" />


    </form>
  );
};

export default Avatargroupe;
