import React from "react";
import { FaHome, FaUpload, FaCalendarAlt, FaComments } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {

  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", icon: <FaHome />, path: "/patient" },
    { name: "Upload MRI", icon: <FaUpload />, path: "/upload" },
    { name: "Appointments", icon: <FaCalendarAlt />, path: "/appointments" },
    { name: "Chat", icon: <FaComments />, path: "/chat" }
  ];

  return (
    <div className="sidebar">

      <h2 className="logo">NeuroNexa</h2>

      <ul className="menu">

        {menuItems.map((item, index) => (
          <Link to={item.path} key={index} style={{ textDecoration: "none" }}>
            <li className={location.pathname === item.path ? "active" : ""}>

              <span className="icon">{item.icon}</span>
              <span>{item.name}</span>

            </li>
          </Link>
        ))}

      </ul>

    </div>
  );
}

export default Sidebar;