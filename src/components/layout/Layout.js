import Nav from "../Nav";

const Layout = ({ children }) => {
  return (
    <div className="container-fluid d-flex flex-column min-vh-100 flex-wrap p-0 m-0">
      <header>
        <div className="banner d-flex w-100">
          <h1>Kirby's World</h1>
          <Nav></Nav>
        </div>
      </header>

      <main className="flex-grow-1">{children}</main>

      <footer>
        <div className="email w-25">
          <h5 className="text-capitalize">email:</h5>
          <p>david@kinetic.com</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
