import "./General.css";
import { Link } from "react-router-dom";
import DocList from "../../../components/doclist/DocList";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import List from "./List";

export default function Patient() {
  const [Name, setName] = useState();
  let [number, setnumber] = useState();
  let [ID, setID] = useState();
  const [docs, setDocs] = useState();

  const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.removeItem("Info");
    navigate("/");
  };

  const fetch_all_doc = async () => {
    try {
      const { data } = await axios.get("/api/user/GetDocs");
      setDocs(data);
    } catch (err) {}
  };

  const send_call_req = async (senderID, receiverID) => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { api } = await axios.post(
        "/api/requests/call",
        { senderID, receiverID },
        config
      );
      console.log(api);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetch_all_doc();
  }, []);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("Info"));
    setID(user.id);
    setName(user.name);
    setnumber(user.phone);
    if (!user) {
      navigate("/");
    }
  }, [navigate]);

  const CALL = async () => {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    number = number.toString();
    await axios.post("/api/supportCall", { number }, config);
  };

  return (
    <>
      <button onClick={CALL}>Call</button>
      <DocList />
      <br />

      <br />
      <div className="row row-cols-1 row-cols-md-3 g-4 frame">
        {docs &&
          docs.map((doc) => {
            return (
              <List
                key={doc._id}
                receiverID={doc._id}
                senderID={ID}
                name={doc.name}
                specialist={doc.specialist}
                email={doc.email}
                degree={doc.degree}
                send_call_req={send_call_req}
              />
            );
          })}
      </div>

      <div className="card mb-3 body2">
        <div className="row g-0">
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title appoint">Join Appointment</h5>
              <p className="card-text text3">
                This service aims to help Doctors whom have their own practice
                to generate an exclusive mobile app which will have information
                like about the doctor, Hours of Operation, Awards, Office Video,
                testimonials
              </p>
              <button type="button" className="btn btn button2">
                <a
                  className="textjoin"
                  href="https://video-call-healthcare.netlify.app/"
                  target="__blank"
                >
                  Join Room
                </a>
              </button>
            </div>
          </div>
          <div className="col-md-4">
            <img
              src="https://static.vecteezy.com/system/resources/previews/002/240/108/non_2x/doctor-in-a-clinic-giving-covid-19-coronavirus-vaccine-to-a-woman-for-immunity-health-concept-illustration-vector.jpg"
              className="img-fluid rounded-start img2"
              alt="..."
            />
          </div>
        </div>
      </div>
    </>
  );
}
