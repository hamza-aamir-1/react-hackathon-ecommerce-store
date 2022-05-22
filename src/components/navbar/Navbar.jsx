import React, { useContext } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import LoggedInContext from "../../context/LoggedinContext/LoggedinContext";
import { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";

const NavbarHeader = () => {

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
    }).catch((error) => {
      console.log(error)
    });
  }

  return (
    <Navbar expand="lg" className="px-4 py-1">
      <Container>
        <Link to="/" className="text-decoration-none">
          <Navbar.Brand className="navbar_brand">
            <img src="favicon.png" className="pe-2" width="40px" alt="" />
            ECOM
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="navbarToggler"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex align-items-center">

            <Link to="/" className="navItem">
              Home
            </Link>

            <NavDropdown title="Pages" id="basic-nav-dropdown">
              <Link to="/Login" className="navbarDropdownLink">
                Pages 1
              </Link>
              <Link to="/Login" className="navbarDropdownLink">
                Pages 2
              </Link>
            </NavDropdown>

            {!isLoggedIn && (
              <NavDropdown title="Account" id="basic-nav-dropdown">
              <Link to="/Login" className="navbarDropdownLink">
                Login
              </Link>
              <Link to="/Signup" className="navbarDropdownLink">
                Signup
              </Link>
            </NavDropdown>
            )}

            {isLoggedIn && (
                <button className="navbarDropdownLink" onClick={handleLogout}>
                  Logout
                </button>
            )}

          </Nav>
        </Navbar.Collapse>
        <Nav></Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarHeader;
