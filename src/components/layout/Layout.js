import Nav from "../Nav";
import { Link } from "react-router-dom";

const Layout = ({ children, pageTitle }) => {
  return (
    <div className="container-fluid d-flex flex-column min-vh-100 flex-wrap p-0 m-0">
      <header>
        <div className="banner d-flex w-100">
          <Link to="/" className="nav-link">
            <h1 className="ms-5">Kirby's World</h1>
          </Link>
          <Nav></Nav>
        </div>
        <h2>{pageTitle}</h2>
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
        <p className="author align-self-center mx-auto">David Kirby 2023</p>
      </footer>
    </div>
  );
};

export default Layout;
