import { useState } from "react";
import "./App.css";
import LoginComp from "./Login";
import Profile from "./Profile";
import { loginContext } from "./Contexts/LoginContext";
function App() {
  const [showProfile, setShowProfile] = useState(false);
  const [userName, setUserName] = useState("");

  return (
    <>
      <loginContext.Provider value={(userName, setUserName, setShowProfile)}>
        {showProfile ? <Profile /> : <LoginComp />}
      </loginContext.Provider>
    </>
  );
}

export default App;
