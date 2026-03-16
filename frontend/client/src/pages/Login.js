import React from "react";
import { TextField, Button } from "@mui/material";

function Login() {
  return (
    <div style={{ width: "300px", margin: "100px auto" }}>
      <h2>Login</h2>

      <TextField label="Email" fullWidth margin="normal" />
      <TextField label="Password" type="password" fullWidth margin="normal" />

      <Button variant="contained" fullWidth>
        Login
      </Button>
    </div>
  );
}

export default Login;