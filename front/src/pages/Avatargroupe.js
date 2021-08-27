import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadavatar } from "../action/groupeaction";
import './Uploadimg.css'



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
    <form  style={{ textAlign:'center'  ,display:'grid', gridTemplateColumns:'1fr 1fr' , marginLeft:'30%', marginRight:'10%'}} onSubmit={handlePicture}>
    <button style={{border:'3px solid #3498db',borderRadius:'10%' , background:'none',padding:'10px 20px', fontSize:'20px ', fontFamily:'montserrat' ,color:"#3498db" , marginBottom:'30%', width:'60%',textAlign:'center'}}>
    <label  for="file" >
     Upload your group picture  
  </label>
  </button>
      <input
      className="inputup"
       style={{textDecoration:'none'}}
        type="file"
        id="file"
        name="file"
        onChange={(e) => setFile(e.target.files[0])}
      />
      
      
      
      <input type="submit" value="Confirm" style={{border:'3px solid #3498db',borderRadius:'10%' , background:'none',padding:'10px 20px', fontSize:'20px ', fontFamily:'montserrat',marginBottom:'30%' ,width :'60%'}}/>


    </form>
  );
};

export default Avatargroupe;