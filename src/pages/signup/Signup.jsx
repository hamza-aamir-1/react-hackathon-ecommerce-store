import React from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "./Signup.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { auth } from "../../config/firebase";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const Signup = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if(email && password){
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate('/')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
      });
      setEmail('');
      setPassword('');
    }
    else if(email && !password){
      toast.error('Enter Password', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }
    else if(!email && password){
      toast.error('Enter Email', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }
    else{
      toast.error('Enter Email & Password', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }
  };

  return (
    <div className="my-5 container signup_box position-relative">
      <div className="signup_form_heading py-5 text-center">Signup</div>
      <Link to="/" className="top-0 position-absolute signup_back_icon m-5">
        <i className="bi bi-arrow-left-short"></i>
      </Link>
      <form className="login_form px-5 pb-5 text-white" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control shadow-none signup_input"
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
            className="form-control shadow-none signup_input"
            id="exampleInputPassword1"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>
        <div className="text-center mt-5">
          <button type="submit" className="btn shadow-none signup_btn">
            Signup
          </button>
        </div>
        <div className="text-center mt-4">
          Already have an account?
          <Link to="/Login" className="ms-2 text-white">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
