import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ isToggled, onToggleSidebar }) => {
  // Menentukan kelas sidebar berdasarkan isToggled
  const sidebarClass = isToggled
    ? "navbar-nav bg-gradient-danger sidebar sidebar-danger accordion toggled"
    : "navbar-nav bg-gradient-danger sidebar sidebar-danger accordion";

  // Menentukan kelas sidebarToggle berdasarkan isToggled
  const sidebarToggleClass = isToggled ? "toggled" : "";

  return (
    <ul className={sidebarClass} id="accordionSidebar">
      {/* Brand Sidebar */}
      <Link
        to="/admin"
        className="sidebar-brand d-flex text-active align-items-center justify-content-center"
      >
        <div className="sidebar-brand-text mx-3" style={{ color: "white" }}>
          <FontAwesomeIcon
            icon={faCamera}
            className="me-2"
            style={{ color: "white" }}
          />
          Web Gallery
        </div>
        <div className="text-center d-none d-md-inline"></div>
      </Link>

      <hr className="sidebar-divider my-0" />

      {/* Menu Dashboard */}
      <li className="nav-item active">
        <Link to="/admin" className={`nav-link ${sidebarToggleClass}`}>
          <i className="bi bi-speedometer2 me-2" style={{ color: "white" }}></i>
          <span style={{ color: "white" }}>Dashboard</span>
        </Link>
      </li>

      <hr className="sidebar-divider" />

      {/* Menu Kategori */}
      <li className="nav-item">
        <Link to="kategori" className={`nav-link ${sidebarToggleClass}`}>
          <i className="bi bi-clipboard me-2" style={{ color: "white" }}></i>
          <span style={{ color: "white" }}>Kategori</span>
        </Link>
      </li>

      {/* Menu Gambar */}
      <li className="nav-item">
        <Link to="picture" className={`nav-link ${sidebarToggleClass}`}>
          <i className="bi bi-image me-2" style={{ color: "white" }}></i>
          <span style={{ color: "white" }}>Gambar</span>
        </Link>
      </li>

      {/* Menu Informasi */}
      <li className="nav-item">
        <Link to="menu" className={`nav-link ${sidebarToggleClass}`}>
          <i className="bi bi-info-circle me-2" style={{ color: "white" }}></i>
          <span style={{ color: "white" }}>Menu</span>
        </Link>
      </li>

      {/* Menu Penduduk */}
      <li className="nav-item">
        <Link to="penduduk" className={`nav-link ${sidebarToggleClass}`}>
          <i className="bi bi-person-fill me-2" style={{ color: "white" }}></i>
          <span style={{ color: "white" }}>Penduduk</span>
        </Link>
      </li>

      <hr className="sidebar-divider" />

      {/* Menu Home */}
      <li className="nav-item">
        <Link to="/home" className={`nav-link ${sidebarToggleClass}`}>
          <i className="bi bi-house me-2" style={{ color: "white" }}></i>
          <span style={{ color: "white" }}>Home</span>
        </Link>
      </li>

      {/* <div className='text-center my-3'>
                <button className={`rounded-circle border-0 ${sidebarToggleClass}`} id="sidebarToggle" onClick={onToggleSidebar}></button>
            </div> */}
    </ul>
  );
};

export default Sidebar;
