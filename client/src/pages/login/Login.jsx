import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div>
      <button>
        <Link to="/">Register As Doctor</Link>
      </button>
      <br></br>
      <button>
        <Link to="/login_as_User">Login as user</Link>
      </button>
    </div>
  );
};

export default Login;
