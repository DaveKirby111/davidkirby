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
    url: "/about",
    page: "about",
  },

  {
    id: 3,
    url: "/resume",
    page: "resume",
  },

  {
    id: 4,
    url: "/gallery",
    page: "gallery",
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
