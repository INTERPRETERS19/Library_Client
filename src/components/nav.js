import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import "./nav.css";

function Neworders() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <img src={logo} alt="logo" height={80} />
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/allbooks"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                All Books
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/allorders"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                All Orders
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/neworders"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                New Orders
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/newbooks"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                New Books
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Neworders;