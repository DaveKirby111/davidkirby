import "../App.css";
import React from "react";
import { NavLink } from "react-router-dom";
import { links } from "./NavArray";

const active = ({ isActive }) => {
  return {
    textDecoration: isActive ? "underline" : "none",
  };
};

function Nav() {
  return (
    <nav className="navbar navbar-expand-sm ms-auto text-capitalize">
      <ul className="navbar-nav">
        {links.map((link) => {
          return (
            <li className="nav-item" key={link.id}>
              <NavLink to={link.url} className="nav-link" style={active}>
                <i className={link.icon}></i>
                {link.page}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Nav;
