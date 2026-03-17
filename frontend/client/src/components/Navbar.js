import React from "react";
import { FaBell, FaUserCircle } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">

      <h3 className="nav-title">Dashboard</h3>

      <div className="nav-right">

        <div className="icon">
          <FaBell />
          <span className="badge">3</span>
        </div>

        <div className="profile">
          <FaUserCircle size={28} />
          <span>Rachita</span>
        </div>

      </div>

    </div>
  );
}

export default Navbar;