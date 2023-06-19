import React, { useState, useEffect } from "react";
import Nav from "../Nav";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const Layout = ({ children }) => {
  const storedMode = localStorage.getItem("mode");
  const [mode, setMode] = useState(storedMode || "light");

  const toggleDark = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem("mode", newMode);
  };

  useEffect(() => {
    if (storedMode) {
      setMode(storedMode);
    }
  }, [storedMode]);

  return (
    <div className={`${mode}`}>
      <div className="layout container-fluid d-flex flex-column min-vh-100 flex-wrap p-0 m-0">
        <header>
          <div className="banner d-flex flex-column align-items-center w-100">
            <Link to="/" className="nav-link">
              <h1 className="ms-5 mt-5 mb-4">David Kirby</h1>
            </Link>

            <div className="switch-checkbox ms-3 mb-5">
              <div className="icon-container">
                <FontAwesomeIcon
                  icon={faSun}
                  className={`me-2 ${mode === "light" ? "sun-light" : ""}`}
                />
              </div>

              <label className="switch">
                <input
                  type="checkbox"
                  checked={mode === "dark"}
                  onChange={toggleDark}
                />
                <span className="slider round"></span>
              </label>

              <div className="icon-container">
                <FontAwesomeIcon
                  icon={faMoon}
                  className={`ms-2 ${mode === "dark" ? "moon-dark" : ""}`}
                />
              </div>
            </div>

            <Nav mode={mode} />
          </div>
        </header>

        <main className="flex-grow-1">{children}</main>

        <footer className="d-flex">
          <div className="email w-25 text-center d-flex justify-content-center align-items-center">
            <h4 className="text-capitalize">
              <a
                href="mailto:davidkirby225@gmail.com"
                className={`text-decoration-none ${
                  mode === "dark" ? "nav-link-dark" : "nav-link-light"
                }`}
              >
                <i className="icon fas fa-envelope" />
                email
              </a>
            </h4>
          </div>
          <p className="author align-self-center mx-auto">David Kirby 2023</p>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
