import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logos/capware_logo.png';

function Navbar() {
  const handleLinkClick = () => {
    const navbarCollapse = document.getElementById('navbarNav');
    const bsCollapse = new window.bootstrap.Collapse(navbarCollapse, {
      toggle: false
    });
    bsCollapse.hide();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        {/* Logo with max height */}
        <img
          src={logo}
          alt="Capware Logo"
          className="img-fluid"
          style={{ maxHeight: '100px' , maxWidth:'100vh' }}
        />

        <button
          className="navbar-toggler"
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
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={handleLinkClick}>Home</Link>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                About
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/aboutschool" onClick={handleLinkClick}>About School</Link></li>
                <li><Link className="dropdown-item" to="/aboutsanstha" onClick={handleLinkClick}>About Sanstha</Link></li>
                <li><Link className="dropdown-item" to="/aboutboardmembers" onClick={handleLinkClick}>Board Members</Link></li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={handleLinkClick}>Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/gallery" onClick={handleLinkClick}>Gallery</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
