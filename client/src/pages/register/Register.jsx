import "./Register.css";
import Header from "../../components/header/Header";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
export default function Register() {
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
      navigate("/Doctor");
    } catch (err) {}
  };

  return (
    <>
      <Header />

      <div className="register">
        <span className="registerTitle">Register with us!</span>
        <div className="container">
          <div className="row justify-content-around">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <img
                className="reg-img"
                src="https://t3.ftcdn.net/jpg/02/84/82/20/360_F_284822080_hfz9ROJ4zdQyWtva3nIqFs611aMe3GEa.jpg"
              ></img>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <form className="registerForm">
                <label>Doctor's Name</label>
                <input
                  type="text"
                  name="name"
                  className="registerInput"
                  placeholder="enter your name..."
                  onChange={(e) => setName(e.target.value)}
                />
                <label>Degree</label>
                <input
                  className="registerInput"
                  type="text"
                  name="name"
                  placeholder="enter your Degree"
                  onChange={(e) => setdegree(e.target.value)}
                  required
                />
                <label>Specialist</label>
                <input
                  className="registerInput"
                  type="text"
                  name="specialist"
                  placeholder="specialist in"
                  onChange={(e) => setSpecialist(e.target.value)}
                  required
                />
                <label>Email</label>
                <input
                  className="registerInput"
                  type="text"
                  name="email"
                  placeholder="enter your Email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label>Password</label>
                <input
                  className="registerInput"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <label>confirmpassword</label>
                <input
                  className="registerInput"
                  type="password"
                  onChange={(e) => setConfirmpassword(e.target.value)}
                  required
                />
                <br />
                <button className="registerButton" onClick={SubmitHandeler}>
                  Register
                </button>
              </form>
              <button className="registerLoginButton">
                <Link to="/login" className="link reg-text">
                  Login
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
