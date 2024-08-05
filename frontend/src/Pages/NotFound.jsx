import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";
import assets from "../assets/assets";


function NotFound() {
  return (
    <div className="err-container">
      <div className="err-content">
        <div className="err-title">
          <h1>404-Page Not </h1>
          <img src={assets.error} alt="error" />
        </div>
        <p>
          Sorry, the page you are looking for does not exist. Please check the
          URL or return to the <Link to={"/"} className="link">Home Page</Link>
        </p>
      </div>
    </div>
  );
}

export default NotFound