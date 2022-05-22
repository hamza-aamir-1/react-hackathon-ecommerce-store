import React, { useContext } from "react";
import { auth } from '../../../config/firebase';
import { signOut } from 'firebase/auth';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LoggedInContext from "../../../context/LoggedinContext/LoggedinContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {

    const navigate = useNavigate();

    const a = useContext(LoggedInContext);
  const [isLoggedIn, setIsLoggedIn] = useState();
  useEffect(() => {
    console.log(a.userStatus.uid)
    if(a.userStatus.uid){
      setIsLoggedIn(true);
    }
    else{
      setIsLoggedIn(false);
    }
  }, [])

    const handleLogout = () => {
        signOut(auth).then(() => {
          setIsLoggedIn(false);
          navigate('/adminlogin')
        }).catch((error) => {
          console.log(error)
        });
      }

  return (
    <div>
        <div>
            <button onClick={handleLogout}>Log out</button>
        </div>
        <div>
            <Link to="/addproduct">
                <button>Add Product</button>
            </Link>
        </div>
    </div>
  )
}

export default Dashboard