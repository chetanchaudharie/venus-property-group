import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  const token = localStorage.getItem("adminToken");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#07363c' }}>
      {/* Change container to container-fluid for full width */}
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={logo}
            alt="Logo"
            width="40"
            height="40"
            className="me-2"
            style={{ objectFit: 'contain' }}
          />
          <span className="text-white fw-bold">Venus Property Group</span>
        </Link>

        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">Rent</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/services">Services</Link>
            </li>
            {/* 📞 Phone Number - Always visible */}
            <li className="nav-item ms-3">
              <a className="nav-link fw-bold" style={{ color: "#FFD700" }} href="tel:+919876543210">
                📞 +91 9876543210
              </a>
            </li>
            {!token ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/admin/login">Login</Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <button onClick={handleLogout} className="nav-link text-white" style={{ background: "none", border: "none" }}>
                    Logout
                  </button>
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