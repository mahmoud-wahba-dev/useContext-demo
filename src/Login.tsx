import React, { useContext, useState } from "react";
import { loginContext } from "./Contexts/LoginContext";
const LoginComp = () => {
  const { setUserName, setShowProfile } = useContext(loginContext);
  return (
    <>
      <form action="">
        <input
          placeholder="user name ..."
          type="text"
          onChange={(e) => setUserName(e.target.value)}
        />
        <br />
        <br />
        <input placeholder="passwod" type="text" />
        <br />
        <br />
        <button onClick={() => setShowProfile(true)} type="button">
          Submit
        </button>
      </form>
    </>
  );
};

export default LoginComp;
