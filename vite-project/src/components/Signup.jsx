import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?cs=srgb&dl=pexels-victorfreitas-841130.jpg&fm=jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
      }}
    >
      <div
        className="card p-4"
        style={{
          width: "400px",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          color: "#fff",
        }}
      >
        <h3 className="text-center mb-3">Join Us!</h3>
        <p className="text-center">Start your journey to a healthier you.</p>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Full Name</label>
            <input type="text" className="form-control" id="name" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" required />
          </div>
          <button type="submit" className="btn btn-success w-100">Sign Up</button>
        </form>
        <div className="text-center mt-3">
          <p>
            Already have an account? <Link to="/" className="text-warning">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
