import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "black" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
  
        }}
      >
        <Link style={{ color: "white" }} to="/">
          Home
        </Link>
        <Link style={{ color: "white" }} to="/about">
          About
        </Link>
        <Link style={{ color: "white" }} to="/contact">
          Contact Us
        </Link>
        <Link style={{ color: "white" }} to="/admin">
          Admin
        </Link>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src="https://brandradiator.com/images/BR-logo1.png" />
      </div>
    </footer>
  );
}

export default Footer