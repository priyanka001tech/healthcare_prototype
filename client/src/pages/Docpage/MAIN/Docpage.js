import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TopBar from "./components/Nav";
import List from "./components/List";
import Profile from "./components/Profile";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Docpage.css";
import axios from "axios";

function Docpage() {
  const [name, setName] = useState();
  const [email, setemail] = useState();
  const [specialist, setspecialist] = useState();
  const [degree, setdegree] = useState();
  const [token, setToken] = useState();
  const [data, setdata] = useState([]);
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("Info");
    navigate("/");
  };

  const fetch_all_req = async () => {
    try {
      const config = { headers: { Authorization: `Bearer ${token}` } };
      const { data } = await axios.get("/api/user/GetAllReq", config);
      setdata(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("Info"));
    setName(user.name);
    setemail(user.email);
    setdegree(user.degree);
    setspecialist(user.specialist);
    setToken(user.token);
    if (!user) {
      navigate("/");
    }
  }, []);
  useEffect(() => {
    fetch_all_req();
  }, [token]);

  return (
    <>
      {" "}
      <div className="App ">
        <TopBar />
      </div>
      <div class="container">
        <div class="row">
          <div class="col">
            <Profile
              name={name}
              email={email}
              degree={degree}
              specialist={specialist}
            />
          </div>
          <div class="col">
            <List requests={data} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Docpage;
