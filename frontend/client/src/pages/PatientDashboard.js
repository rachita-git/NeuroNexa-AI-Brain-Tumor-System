import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import DashboardCard from "../components/DashboardCard";
import { FaFileMedical, FaCalendarCheck, FaComments } from "react-icons/fa";
import "./Dashboard.css";
function PatientDashboard() {
  return (
    <div className="dashboard">

      <Sidebar />

      <div className="main">

        <Navbar />

        <div className="content">

          <h2 className="title">Patient Dashboard</h2>

          {/* CARDS */}

          <div className="card-container">

            <div className="card">
              <FaFileMedical size={35} className="icon" />
              <h3>MRI Reports</h3>
              <p>12</p>
            </div>

            <div className="card">
              <FaCalendarCheck size={35} className="icon" />
              <h3>Appointments</h3>
              <p>3</p>
            </div>

            <div className="card">
              <FaComments size={35} className="icon" />
              <h3>Messages</h3>
              <p>5</p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default PatientDashboard;