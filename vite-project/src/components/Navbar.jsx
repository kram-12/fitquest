import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  // Determine which links to show based on the current path
  const isLoginPage = location.pathname === "/";
  const isSignupPage = location.pathname === "/signup";

  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "#2d6a4f", padding: "10px 20px" }}
    >
      <div className="container-fluid">
        <Link
          to="/"
          className="navbar-brand text-white"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: "600",
            fontSize: "1.5rem",
          }}
        >
          Fit<span style={{ color: "#ffb703" }}>Quest</span>
        </Link>
        <button
          className="navbar-toggler text-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {isLoginPage ? (
              // Links for Login page
              <li className="nav-item">
                <Link to="/signup" className="nav-link text-white">
                  Signup
                </Link>
              </li>
            ) : isSignupPage ? (
              // Links for Signup page
              <li className="nav-item">
                <Link to="/" className="nav-link text-white">
                  Login
                </Link>
              </li>
            ) : (
              // Links for other authenticated pages
              <>
                <li className="nav-item">
                  <Link to="/home" className="nav-link text-white">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/analysis" className="nav-link text-white">
                    Analysis
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link text-white">
                    Logout
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
