import {
  BsPersonFill,
  BsSearchHeartFill,
} from "react-icons/bs";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import CartWidget from "./CartWidget";

function NavigationBar({productsQuantity}) {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="index.html">
          <img
            src="src/assets/images/logo.png"
            alt="Imágen del logo"
            width={100}
            height={100}
            className="d-inline-block align-text-center"
          />
          <h1 className="text-brand">L&amp;J Accesorios</h1>
        </Navbar.Brand>
        <Navbar.Toggle
          className='navbar-toggler d-flex d-lg-none flex-column justify-content-around'
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="toggler-icon top-bar" />
          <span className="toggler-icon middle-bar" />
          <span className="toggler-icon bottom-bar" />
        </Navbar.Toggle>
        <Navbar.Collapse
          className="flex-column ml-lg-0 ml-3 pt-2"
          id="navbarSupportedContent"
        >
          <div className="col-md-5">
            <div className="input-group">
              <input
                className="form-control border-end-0 border rounded-pill"
                type="search"
                placeholder="Buscar"
                aria-label="Buscar"
              />
              <span className="input-group-append">
                <button
                  className="btn btn-outline-secondary bg-white border-bottom-0 border rounded-pill ms-searchbar"
                  type="button"
                >
                  <BsSearchHeartFill />
                </button>
              </span>
            </div>
          </div>
          <Container className="container col-12 mt-3">
            <Nav className="navbar-nav me-auto justify-content-center gap-5">
              <Nav.Link href="./pages/bijouterie.html">
                <strong>Bijouterie</strong>
              </Nav.Link>
              <Nav.Link href="./pages/resin.html">
                <strong>Resina</strong>
              </Nav.Link>
              <Nav.Link href="./pages/steel.html">
                <strong>Acero</strong>
              </Nav.Link>
              <Nav.Link href="./pages/contact.html">
                <strong>Contacto</strong>
              </Nav.Link>
            </Nav>
          </Container>
          <div className="nav-icons d-flex d-lg-none">
            <CartWidget productsQuantity={productsQuantity} isCollapsed={true}/>
            <a className="mt-3" aria-label="Perfil de usuario">
              <BsPersonFill style={{ fontSize: 30 }} />
            </a>
          </div>
        </Navbar.Collapse>
        <div className="nav-icons d-none d-lg-flex col-2">
            <CartWidget productsQuantity={productsQuantity} isCollapsed={false}/>
          <a className="nav-link" aria-label="Perfil de usuario">
            <BsPersonFill style={{ fontSize: 30 }} />
          </a>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
