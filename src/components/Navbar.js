import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <span className="logo-bracket">&lt;</span>
        <span className="logo-name">Sishir</span>
        <span className="logo-bracket">/&gt;</span>
      </div>
      <div className="nav-links">
        <NavLink to="/" end className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Home
        </NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Projects
        </NavLink>
        <a href="mailto:sishirkundan96@gmail.com" className="nav-cta">
          Get in touch
        </a>
      </div>
    </nav>
  );
}