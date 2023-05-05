import Nav from "../Nav";

const Layout = ({ children }) => {
  return (
    <div className="container-fluid d-flex flex-column min-vh-100 flex-wrap p-0 m-0">
      <header className="d-flex">
        <h1>Kirby's World</h1>
        <Nav></Nav>
      </header>

      <main className="flex-grow-1">{children}</main>

      <footer></footer>
    </div>
  );
};

export default Layout;
