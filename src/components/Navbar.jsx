import React, { useState } from "react";
import "../navbar.css";
import { NavLink , Link} from "react-router-dom";


function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav">
      
        <img src="https://jntuhcej.ac.in/images_new/jntuhlogo1.png" alt="logo" className="image"></img>
      
      <ul className={active}>
        <li className="nav__item">
          <a href="#" className="nav__link">
          <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/"
              exact
          >
            Home
          </NavLink>
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            About
          </a>
          
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Departments
          </a>
        </li>
        <li className="nav__item">
          <Link to="/auth">
          
            Student 
          
          </Link>
        </li>
        
        <li className="nav__item">
          <a href="#" className="nav__link">
            Teacher 
          </a>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;