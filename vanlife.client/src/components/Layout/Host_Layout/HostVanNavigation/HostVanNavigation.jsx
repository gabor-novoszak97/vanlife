import { Outlet, NavLink } from "react-router-dom";
import { setActiveNav } from "../../../../helper-functions";
import "./HostVanNavigation.css"

export default function HostVanNavigation(props) {
  return (
    <div className="hostvan--nav--container">
      <nav className="hostvan--nav">
        <ul>
          <NavLink
            to=""
            end
            className={({ isActive }) =>
              setActiveNav(isActive, "all--host--nav--active")
            }
          >
            <li>Details</li>
          </NavLink>
          <NavLink
            to="pricing"
            className={({ isActive }) =>
              setActiveNav(isActive, "all--host--nav--active")
            }
          >
            <li>Pricing</li>
          </NavLink>
          <NavLink
            to="photos"
            className={({ isActive }) =>
              setActiveNav(isActive, "all--host--nav--active")
            }
          >
            <li>Photos</li>
          </NavLink>
        </ul>
      </nav>
      <Outlet context={props.van}/>
    </div>
  );
}
