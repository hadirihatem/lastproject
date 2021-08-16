import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getgroupeadmin } from "../action/groupeaction";
import { uploadPicture } from "../action/useraction";
import "./Uploadimg.css";

const UploadImg = () => {
  const [file, setFile] = useState();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handlePicture = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("userId", user._id);
    data.append("picture", file);

    dispatch(uploadPicture(data, user._id));
   
  };

  return (
    <form className="formup" onSubmit={handlePicture}>
      <label className="labelup" for="file">
        {" "}
        <svg width="1em" height="1em" viewBox="0 0 512 512">
          <path
            d="M475.4 121.8H359.6l-12.2-36.6c0-20.2-16.4-36.6-36.6-36.6H201.1c-20.2 0-36.6 16.4-36.6 36.6l-12.2 36.6H36.6C16.4 121.8 0 138.2 0 158.4v219.4c0 20.2 16.4 36.6 36.6 36.6h438.9c20.2 0 36.6-16.4 36.6-36.6V158.4c-.1-20.2-16.5-36.6-36.7-36.6zM256 377.8c-60.6 0-109.7-49.1-109.7-109.7S195.4 158.4 256 158.4s109.7 49.1 109.7 109.7c0 60.5-49.1 109.7-109.7 109.7zm219.4-182.9c0 10.1-8.2 18.3-18.3 18.3h-18.3c-10.1 0-18.3-8.2-18.3-18.3v-18.3c0-10.1 8.2-18.3 18.3-18.3h18.3c10.1 0 18.3 8.2 18.3 18.3v18.3zm-219.4 0c-40.4 0-73.1 32.7-73.1 73.1s32.7 73.1 73.1 73.1s73.1-32.7 73.1-73.1s-32.7-73.1-73.1-73.1z"
            fill="currentColor"
          ></path>
        </svg>
        ADD
      </label>
      <input
        className="inputup"
        type="file"
        id="file"
        name="file"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <br />

      <input  type="submit" value="SEND" />
    </form>
  );
};

export default UploadImg;
