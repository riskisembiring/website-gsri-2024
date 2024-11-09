// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/images/logo.jpg" alt="Logo Gereja" className="logo-image" />
        <Link to="/" className="navbar-brand">
          GEREJA SIDANG ROHUL KUDUS INDONESIA (GSRI)
        </Link>
      </div>
      <button className="navbar-toggle" onClick={toggleMobileMenu}>
        ☰
      </button>
      <ul className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <li><Link to="/">Beranda</Link></li>
        <li><Link to="/TentangKami">Tentang Kami</Link></li>
        <li><Link to="/Kegiatan">Kegiatan</Link></li>
        <li><Link to="/Kontak">Kontak</Link></li>
        </ul>
    </nav>
  );
};

export default Navbar;
