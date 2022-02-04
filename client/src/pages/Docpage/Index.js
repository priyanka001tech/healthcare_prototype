import React from "react";

// components
import CardPageVisits from "./CardProfile/CardPageVisits.js";

import CardProfile from "./CardProfile/CardProfile.js";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
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
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <CardPageVisits />
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <CardProfile
            name={name}
            email={email}
            specialist={specialist}
            degree={degree}
          />
        </div>
      </div>
    </>
  );
}
