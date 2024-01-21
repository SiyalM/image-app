import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <Link className="home-link" to="/">
        Homepage
      </Link>
      <div className="options">
        <button className="btn-login">Login</button>
        <button className="btn-border">Create Account</button>
      </div>
    </div>
  );
};

export default Navigation;
