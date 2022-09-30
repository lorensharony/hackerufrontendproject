import "./TopNavLink.css";
import { NavLink } from "react-router-dom";

const TopNavLink = ({ label, to }) => {
  return (
    <li className="nav-item">
      <NavLink className="nav-link my-top-nav-link" to={to}>
        {label}
      </NavLink>
    </li>
  );
};

export default TopNavLink;
