import React from "react";

function DashboardCard({ title, value }) {
  return (
    <div style={styles.card}>

      <h3>{title}</h3>
      <h1>{value}</h1>

    </div>
  );
}

const styles = {

  card: {
    background: "white",
    padding: "25px",
    borderRadius: "10px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
    width: "220px",
    transition: "0.3s"
  }

};

export default DashboardCard;