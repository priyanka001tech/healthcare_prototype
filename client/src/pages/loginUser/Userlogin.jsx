import React, { useEffect, useState } from "react";
import Sawo from "sawo";

const API_KEY = "e00d0a49-98ff-473e-8676-07ff7cd36072";

const Userlogin = () => {
  const [isUserLoggedIn, setUserLoggedIn] = useState(false);
  const [payload, setPayload] = useState({});

  useEffect(() => {
    var config = {
      containerID: "1fcc9a11-6090-4ac5-8f31-50c5ee97246e",
      identifierType: "email",
      apiKey: API_KEY,
      onSuccess: (payload) => {
        console.log("Payload : " + JSON.stringify(payload));
        setUserLoggedIn(true);
        setPayload(payload);
      },
    };
    let sawo = new Sawo(config);
    sawo.showForm();
  }, []);

  return (
    <div className="containerStyle">
      <section>
        <h2 className="title">SAWO React Example App</h2>
        <h2 className="title">User Logged In : {isUserLoggedIn.toString()}</h2>

        {!isUserLoggedIn ? (
          <div className="formContainer" id="sawo-container"></div>
        ) : (
          <div className="loggedin">
            <h2>User Successful Login</h2>
            <div>UserId: {payload.user_id}</div>
            <div>Verification Token: {payload.verification_token}</div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Userlogin;
