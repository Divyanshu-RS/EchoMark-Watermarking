// src/components/Navigation.js
import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link"; 
import logo from "../assets/ELogo.png";

const Navigation = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-black shadow-sm sticky-top">
    <div className="container">
      <a href="/" className="navbar-brand d-flex align-items-center">
        <img
          src={logo}
          alt="EchoMark Logo"
          width="50"
          height="50"
          className="me-2"
        />
        <span>EchoMark Watermarking</span>
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/features" className="nav-link">
              Features
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/metrics" className="nav-link">
              Metrics
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/team" className="nav-link">
              Team
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className="nav-link">
              Contact
            </NavLink>
          </li>

          {/* ✅ SCROLL TO DOWNLOAD SECTION */}
          <li className="nav-item ms-lg-3 d-flex align-items-center">
            <HashLink
              smooth
              to="/#download"
              className="btn btn-warning btn-sm text-dark fw-semibold"
              style={{ border: "none" }}
            >
              Download
            </HashLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navigation;
