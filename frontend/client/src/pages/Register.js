import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import doctorImg from "../assets/doctor.jpg";
import "./Register.css";

function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("patient");

  const handleRegister = async () => {

    // ✅ Validation
    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password, role }),
      });

      const data = await res.json();

      if (data.success) {
        alert("Registered Successfully");
        window.location.href = "/login";
      } else {
        alert(data.message || "Error registering user");
      }

    } catch (error) {
      console.error(error);
      alert("Server error");
    }
  };

  return (
    <div className="register-page">

      {/* LEFT IMAGE */}
      <div className="register-left">
        <img src={doctorImg} alt="doctor" />
      </div>

      {/* RIGHT FORM */}
      <div className="register-right">

        <div className="register-card">

          <h2>Create Account</h2>
          <p>Join NeuroNexa</p>

          <TextField
            label="Full Name"
            fullWidth
            margin="normal"
            onChange={(e) => setName(e.target.value)}
          />

          <TextField
            label="Email"
            fullWidth
            margin="normal"
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* ROLE */}
          <select
            className="role-select"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="patient">Patient</option>
            <option value="doctor">Doctor</option>
          </select>

          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            onChange={(e) => setPassword(e.target.value)}
          />

          <TextField
            label="Confirm Password"
            type="password"
            fullWidth
            margin="normal"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <Button
            variant="contained"
            fullWidth
            className="register-btn"
            onClick={handleRegister}
          >
            Register
          </Button>

          {/* LOGIN LINK */}
          <p className="login-text">
            Already have an account?{" "}
            <Link to="/login" className="login-link">
              Login
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Register;