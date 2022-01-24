import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
var user;
const Userpage = () => {
  const [Name, setName] = useState();
  const [phone, setphone] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    user = JSON.parse(localStorage.getItem("Info"));
    setName(user.name);
    setphone(user.phone);
    if (!user) {
      navigate("/");
    }
  }, [user]);
  return (
    <div>
      <p>current user is {Name} </p>and his phone number is {phone}
    </div>
  );
};

export default Userpage;
