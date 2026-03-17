import React, { useEffect } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";
import doctorImg from "../assets/hospital.jpg";
import "./LandingPage.css";

function LandingPage() {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="landing">

      <div className="navbar">
        <h2 className="logo">NeuroNexa</h2>

        <div>
          <Link to="/login">
            <Button variant="contained">Login</Button>
          </Link>

          <Link to="/register">
            <Button variant="outlined" style={{marginLeft:"10px"}}>
              Register
            </Button>
          </Link>
        </div>
      </div>


      <section className="hero">

        <div className="hero-left" data-aos="fade-right">

          <h1>AI Brain Tumor Detection</h1>

          <p>
            Upload MRI scans and detect brain tumors using advanced
            Artificial Intelligence technology.
          </p>

          <Link to="/upload">
            <Button variant="contained" size="large">
              Upload MRI
            </Button>
          </Link>

        </div>

        <div className="hero-right" data-aos="fade-left">
          <img src={doctorImg} alt="doctor"/>
        </div>

      </section>


      <section className="features">

        <div className="feature-card" data-aos="zoom-in">
          <h3>AI Detection</h3>
          <p>Deep learning model analyzes MRI scans instantly.</p>
        </div>

        <div className="feature-card" data-aos="zoom-in">
          <h3>Secure Medical Data</h3>
          <p>Patient reports stored safely with healthcare standards.</p>
        </div>

        <div className="feature-card" data-aos="zoom-in">
          <h3>Doctor Consultation</h3>
          <p>Chat and video consultation with doctors.</p>
        </div>

      </section>


      <section className="stats">

        <div className="stat" data-aos="fade-up">
          <h2><CountUp end={10000} duration={3} />+</h2>
          <p>MRI Scans</p>
        </div>

        <div className="stat" data-aos="fade-up">
          <h2><CountUp end={95} duration={3} />%</h2>
          <p>AI Accuracy</p>
        </div>

        <div className="stat" data-aos="fade-up">
          <h2><CountUp end={500} duration={3} />+</h2>
          <p>Doctors</p>
        </div>

      </section>

    </div>
  );
}

export default LandingPage;