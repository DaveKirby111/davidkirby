import "../App.css";
import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  {
    id: 1,
    url: "/",
    page: "home",
  },

  {
    id: 2,
    page: "about",
  },

  {
    id: 3,
    page: "resume",
  },

  {
    id: 4,
    page: "gallery",
  },

  {
    id: 5,
    page: "contact",
  },
];

function Nav() {
  return (
    <nav className="navbar navbar-expand-sm ms-auto text-capitalize">
      <ul className="navbar-nav">
        {links.map((link) => {
          return (
            <li className="nav-item" key={link.id}>
              <NavLink to={link.url} className="nav-link">
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
