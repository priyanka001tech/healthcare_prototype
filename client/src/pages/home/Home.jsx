import "./home.css";
import Header from "../../components/header/Header";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <>
      <Header />
      <div className="home text-center">
        <img
          className="home-img img-fluid"
          src="https://cdn.dribbble.com/users/499731/screenshots/6197032/patient_experience.gif"
        ></img>
      </div>
      <div>
        <div className="d-flex justify-content-around align-items-center flex-column  ">
          <button className="btn-my m-2" type="button">
            <Link to="/register" className="text-home">
              Register as Doctor
            </Link>
          </button>
          <button className="btn-my m-2" type="button">
            <Link to="/register_as_user" className="text-home">
              Register as Patient
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}
