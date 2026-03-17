import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import doctorImg from "../assets/doctor.jpg";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ✅ MOVE FUNCTION HERE
  const handleLogin = async () => {

  const res = await fetch("http://localhost:5000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();

  if (data.success) {

    // 🔥 ROLE-BASED REDIRECT

    if (data.role === "patient") {
      window.location.href = "/patient";
    } 
    else if (data.role === "doctor") {
      window.location.href = "/doctor";
    }

  } else {
    alert("Invalid Credentials");
  }
};

  return (
    <div className="login-page">

      {/* LEFT SIDE IMAGE */}
      <div className="login-left">
        <img src={doctorImg} alt="doctor" />
      </div>

      {/* RIGHT SIDE FORM */}
      <div className="login-right">

        <div className="login-card">

          <h2>Welcome Back</h2>
          <p>Login to NeuroNexa</p>

          <p className="forgot">Forgot Password?</p>

          <TextField
            label="Email"
            fullWidth
            margin="normal"
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            variant="contained"
            fullWidth
            className="login-btn"
            onClick={handleLogin}
          >
            Login
          </Button>

          <p className="register-text">
            New user?{" "}
            <Link to="/register" className="register-link">
              Create an account
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;