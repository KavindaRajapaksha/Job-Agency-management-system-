import React from 'react';
import "./navbar.css";
import { useNavigate } from 'react-router-dom';




const NavBar = () => {
  const navigate = useNavigate();

  return (
    
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <div className="d-flex justify-content-between w-100">
          <a className="navbar-brand" href="/">JOB BRIDGE</a> 
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" onClick={()=>{navigate("/")}}>Home<span className="sr-only"></span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={()=>{navigate("/about")}}>About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={()=>{navigate("/login")}}>Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={()=>{navigate("/contact")}}>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
