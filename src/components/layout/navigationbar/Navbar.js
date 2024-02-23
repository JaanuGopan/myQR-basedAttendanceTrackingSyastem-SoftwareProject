import React from "react";
import "./navbar.css";
import { Link, useParams, useNavigate } from "react-router-dom";

export default function Navbar() {
  const { id } = useParams();
  let navigate = useNavigate();

  return (
    <div className="first-container">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {/* <img src={logo} className="logo" /> */}
          </a>

          <div>
            <button className="btn2" onClick={() => navigate("/login")}>
              <span>SignIn</span>
              <i></i>
            </button>
            <button className="btn2" onClick={() => navigate("/signup")}>
              <span>SignUp</span>
              <i></i>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
