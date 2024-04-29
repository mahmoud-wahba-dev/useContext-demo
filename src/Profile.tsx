import React, { useContext } from "react";
import { loginContext } from "./Contexts/LoginContext";

const Profile = () => {
  const { userName } = useContext(loginContext);
  return (
    <>
      <h1>Profile</h1>
      <h2>user name : {userName} </h2>
    </>
  );
};

export default Profile;
