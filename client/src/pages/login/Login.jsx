import "./Login.css";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const SubmitHandeler = async (e) => {
    e.preventDefault();
    if (!email || !password) {
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
      navigate("/Doctor");
    } catch (err) {}
  };

  return (
    <>
      <Header />
      <div className="login">
        <span className="loginTitle">Welcome Back !!!</span>
        <div className="container">
          <div className="row justify-content-around">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <form className="loginForm">
                <label>Email</label>
                <input
                  type="text"
                  className="loginInput"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your Email..."
                />
                <label>Password</label>
                <input
                  type="password"
                  className="loginInput"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password..."
                />
                <button className="loginButton" onClick={SubmitHandeler}>
                  Login
                </button>
              </form>
              <button className="loginRegisterButton">
                <Link to="/register" className="link log-text">
                  Register
                </Link>
              </button>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <img
                className="log-img"
                src="https://img.freepik.com/free-vector/medical-video-call-consultation-illustration_88138-415.jpg?size=626&ext=jpg"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
