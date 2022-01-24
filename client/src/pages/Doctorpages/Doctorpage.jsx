import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Doctorpage = () => {
  const [name, setName] = useState();
  const [email, setemail] = useState();
  const [specialist, setspecialist] = useState();
  const [degree, setdegree] = useState();
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("Info");
    navigate("/");
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("Info"));
    setName(user.name);
    setemail(user.email);
    setdegree(user.degree);
    setspecialist(user.specialist);
    if (!user) {
      navigate("/");
    }
  }, []);
  return (
    <div>
      <p>current user is {name} </p>and his data is {email} {degree}{" "}
      {specialist}
      <br></br>
      <button onClick={logoutHandler}>Logout</button>
    </div>
  );
};

export default Doctorpage;
