import React from "react";
import "./Signup.css";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="my-5 container signup_box position-relative">
      <div className="signup_form_heading py-5 text-center">Signup</div>
      <Link to="/" className="top-0 position-absolute signup_back_icon m-5">
        <i className="bi bi-arrow-left-short"></i>
      </Link>
      <form className="login_form px-5 pb-5 text-white">
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control shadow-none signup_input"
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
            className="form-control shadow-none signup_input"
            id="exampleInputPassword1"
          />
        </div>
        <div className="text-center mt-5">
          <button type="submit" className="btn shadow-none signup_btn">
            Signup
          </button>
        </div>
        <div className="text-center mt-4">
          Already have an account? 
          <Link to="/Login" className="ms-2 text-white">Login</Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;