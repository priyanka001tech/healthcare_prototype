import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Register = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [degree, setdegree] = useState();
  const [specialist, setSpecialist] = useState();
  const [confirmpassword, setConfirmpassword] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const SubmitHandeler = async (e) => {
    e.preventDefault();
    if (
      !name ||
      !email ||
      !password ||
      !confirmpassword ||
      !degree ||
      !specialist
    ) {
      return;
    }
    if (password !== confirmpassword) {
      return;
    }
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/user",
        {
          name,
          email,
          password,
          degree,
          specialist,
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
          name="name"
          placeholder="enter your name"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />
        <input
          type="text"
          name="name"
          placeholder="enter your Degree"
          onChange={(e) => setdegree(e.target.value)}
          required
        />
        <br />
        <input
          type="text"
          name="specialist"
          placeholder="specialist in"
          onChange={(e) => setSpecialist(e.target.value)}
          required
        />
        <br />
        <input
          type="text"
          name="email"
          placeholder="enter your Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        password
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        confirmpassword
        <input
          type="password"
          onChange={(e) => setConfirmpassword(e.target.value)}
          required
        />
        <br />
        <button onClick={SubmitHandeler}>Submit</button>
      </form>
    </div>
  );
};

export default Register;
