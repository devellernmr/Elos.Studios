import React, { useState } from "react";
import { FaHome, FaUser, FaFolderOpen, FaEnvelope } from "react-icons/fa";
import "./navbar.scss";
import logo from '../../assets/Elos-Studios-Logo.png';

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Logo" />
        <h1>Elos.Studios</h1>
      </div>
      <button
        className="menu-btn"
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span className="linha"></span>
        <span className="linha"></span>
        <span className="linha"></span>
      </button>
      {/* This overlay will close the menu when the dark background is clicked */}
      {open && <div className="menu-overlay" onClick={() => setOpen(false)} />}
      <nav>
        <ul className={`nav-links ${open ? "active" : ""}`}>
          <div className="menu-logo md:hidden ">Elos.Studios</div>
          <button
            className="close-btn"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            ×
          </button>
          <li>
            <a href="#home" className="nav-link" onClick={() => setOpen(false)}>
              <FaHome className="link-icon"></FaHome>
              Home
            </a>
          </li>
          <li className="flex-row inline ">
            <a
              href="#sobre"
              className="nav-link"
              onClick={() => setOpen(false)}
            >
              <FaUser className="link-icon"></FaUser>
              Sobre
            </a>
          </li>
          <li>
            <a
              href="#projetos"
              className="nav-link"
              onClick={() => setOpen(false)}
            >
              <FaFolderOpen className="link-icon"></FaFolderOpen>
              Projetos
            </a>
          </li>
          <li>
            <a
              href="#contato"
              className="nav-link"
              onClick={() => setOpen(false)}
            >
              <FaEnvelope className="link-icon"></FaEnvelope>
              Contato
            </a>
          </li>
          <div className="mobile-cta">
            <button className="btn-projects-nav">Projetos</button>
            <button className="btn-contact-nav">Entre em Contato</button>
          </div>
        </ul>
      </nav>
      <div className="button-nav">
        <button className="btn-projects-nav">Projetos</button>
        <button className="btn-contact-nav">Entre em Contato</button>
      </div>
    </header>
  );
}

export default Navbar;
