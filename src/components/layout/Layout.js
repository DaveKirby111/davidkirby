import React from "react";
import Nav from "../Nav";
import { Link } from "react-router-dom";

import dk from "../../images/dk-2.png";

const Layout = ({ children, page }) => {
  return (
    <div className="layout container-fluid d-flex flex-column min-vh-100 flex-wrap p-0 m-0">
      <header>
        <div className="banner d-flex align-items-center w-100">
          <Link to="/" className="nav-link logo">
            <img src={dk} alt="logo" height={"100px"} width={"200px"} />
          </Link>

          <Nav />
        </div>
        <h1 className="text-white w-75 mx-auto mt-2">{page}</h1>
      </header>

      <main className="flex-grow-1">{children}</main>

      <footer className="d-flex">
        <div className="email w-25 text-center d-flex justify-content-center align-items-center">
          <h4 className="text-capitalize">
            <a
              href="mailto:davidkirby225@gmail.com"
              className="text-decoration-none"
            >
              <i className="icon fas fa-envelope" />
              email
            </a>
          </h4>
        </div>
        <div className="info w-50 text-center">
          {" "}
          <p className="author mt-4">David Kirby 2023</p>
        </div>
        <div className="social w-25 d-flex justify-content-center align-items-lg-center">
          <a
            href="https://www.linkedin.com/in/david-kirby-64a1487a/"
            rel="noreferrer"
            target="_blank"
            className="linked"
          >
            <i class="fa-brands fa-linkedin"></i>
          </a>

          <a
            href="https://github.com/DaveKirby111?tab=repositories"
            rel="noreferrer"
            target="_blank"
            className="gith"
          >
            <i class="fa-brands fa-github"></i>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
