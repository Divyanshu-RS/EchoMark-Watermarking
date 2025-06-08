import React from "react";
import "./Loader.css";
import logo from "../assets/ELogo.png";


const Loader = () => (
  <div className="loader-container">
    <img
      src={logo}
      className="loader-logo transition-in"
    />
    <div className="spinner transition-in delay" />
    <h4 className="text-white mt-3 transition-in delay-more">
      Loading EchoMark...
    </h4>
  </div>
);

export default Loader;
