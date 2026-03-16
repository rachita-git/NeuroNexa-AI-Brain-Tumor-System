import React from "react";
import { Button } from "@mui/material";

function LandingPage() {
  return (
    <div style={{ textAlign: "center", padding: "100px" }}>
      <h1>NeuroNexa</h1>
      <h3>AI Powered Brain Tumor Detection System</h3>

      <Button variant="contained" href="/login">
        Login
      </Button>
    </div>
  );
}

export default LandingPage;