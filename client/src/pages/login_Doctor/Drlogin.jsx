import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Drlogin = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const SubmitHandeler = async (e) => {
    e.preventDefault();
    if (!email | !password) {
      return;
    }
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/user/LoginDoctor",
        {
          email,
          password,
        },
        config
      );
      console.log(data);
      localStorage.setItem("Info", JSON.stringify(data));
      navigate("/memberDoctor");
    } catch (err) {}
  };

  return (
    <div>
      <form>
        <input
          type="text"
          name="email"
          placeholder="enter your Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        password
        <br />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <button onClick={SubmitHandeler}>Submit</button>
      </form>
    </div>
  );
};

export default Drlogin;
