import Nav from "../Nav";

const Layout = ({ children, pageTitle }) => {
  return (
    <div className="container-fluid d-flex flex-column min-vh-100 flex-wrap p-0 m-0">
      <header>
        <div className="banner d-flex w-100">
          <h1 className="ms-5">Kirby's World</h1>
          <Nav></Nav>
        </div>
        <h2>{pageTitle}</h2>
      </header>

      <main className="flex-grow-1">{children}</main>

      <footer className="d-flex">
        <div className="email w-25 text-center">
          <h4 className="text-capitalize mt-3">email:</h4>
          <p>david@kinetic.com</p>
        </div>
        <p className="author align-self-center mx-auto">David Kirby 2023</p>
      </footer>
    </div>
  );
};

export default Layout;
