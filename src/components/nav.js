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
                to="/allmembers"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                All Members
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/allborrowings"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                All borrowings
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/addmembers"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Add Members
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/addbooks"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Add Books
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/addborrowings"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Add borrowings
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Logout
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
