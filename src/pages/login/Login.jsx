import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const Login = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      navigate('/')
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  }

  return (
    <div className="my-5 container login_box position-relative">
      <div className="login_form_heading py-5 text-center">Login</div>
      <Link to='/' className="top-0 position-absolute login_back_icon m-5">
        <i className="bi bi-arrow-left-short"></i>
      </Link>
      <form className="login_form px-5 pb-5 text-white" onSubmit={handleLogin}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control shadow-none login_input"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control shadow-none login_input"
            id="exampleInputPassword1"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
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
