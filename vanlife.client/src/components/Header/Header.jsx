import "./Header.css";
import { NavLink } from "react-router-dom";
import { setActiveNav } from "../../helper-functions";

export default function Header() {
  return (
    <div className="header">
      <NavLink to="/">
        <h1 className="page--title">#VANLIFE</h1>
      </NavLink>
      <nav className="page--nav">
        <ul>
          <NavLink
            to="/host"
            className={({ isActive }) => setActiveNav(isActive, "page--nav--active")}
          >
            <li>Host</li>
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => setActiveNav(isActive, "page--nav--active")}
          >
            <li>About</li>
          </NavLink>
          <NavLink
            to="/vans"
            className={({ isActive }) => setActiveNav(isActive, "page--nav--active")}
          >
            <li>Vans</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
}
