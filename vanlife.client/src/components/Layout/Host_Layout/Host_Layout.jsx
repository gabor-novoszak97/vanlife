import { Outlet, NavLink } from "react-router-dom";
import "./Host_Layout.css";
import { setActiveNav } from "../../../helper-functions";

export default function Host_Layout() {
  return (
    <div>
      <nav className="all--host--nav">
        <ul>
          <NavLink
             to="" end
            className={({ isActive }) =>
              setActiveNav(isActive, "all--host--nav--active")
            }
          >
            <li>Dashboard</li>
          </NavLink>
          <NavLink
            to="income"
            className={({ isActive }) =>
              setActiveNav(isActive, "all--host--nav--active")
            }
          >
            <li>Income</li>
          </NavLink>
          <NavLink
            to="vans"
            className={({ isActive }) =>
              setActiveNav(isActive, "all--host--nav--active")
            }
          >
            <li>Vans</li>
          </NavLink>
          <NavLink
            to="reviews"
            className={({ isActive }) =>
              setActiveNav(isActive, "all--host--nav--active")
            }
          >
            <li>Reviews</li>
          </NavLink>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
