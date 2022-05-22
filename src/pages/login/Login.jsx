import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="my-5 container login_box position-relative">
      <div className="login_form_heading py-5 text-center">Login</div>
      <Link to='/' className="top-0 position-absolute login_back_icon m-5">
        <i className="bi bi-arrow-left-short"></i>
      </Link>
      <form className="login_form px-5 pb-5 text-white">
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control shadow-none login_input"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control shadow-none login_input"
            id="exampleInputPassword1"
          />
        </div>
        <div className="text-center mt-5">
          <button type="submit" className="btn shadow-none login_btn">
            Login
          </button>
        </div>
        <div className="text-center mt-4">
          No account? 
          <Link to="/Signup" className="ms-2 text-white">Signup</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
