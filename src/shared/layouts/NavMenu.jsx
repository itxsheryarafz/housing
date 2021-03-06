import Navbar from "react-bootstrap/Navbar";
import { Container, Nav } from "react-bootstrap";
import { Ulogo } from "../../utils/images";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
export default function NavMenu() {
  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src={Ulogo} alt=""></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="navbar-collapse collapse justify-content-center navbar-fixed-top"
          >
            <Nav className="justify-content-center navbar-nav align-items-center navbar-menu">
              <NavLink
                className="nav-link"
                exact
                activeClassName="active"
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/social"
              >
                Social Media
              </NavLink>
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/properties"
              >
                Properties
              </NavLink>
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/uhx-token"
              >
                USHX Token
              </NavLink>
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/realtors"
              >
                Realtors
              </NavLink>
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/investors"
              >
                Investors
              </NavLink>
            </Nav>
          </Navbar.Collapse>
          <div className="btn-2">
            <Nav.Link href="#link">
              <button className="btn-login">Login</button>
            </Nav.Link>
            <Nav.Link href="#link">
              <button className="btn-join">Join</button>
            </Nav.Link>
          </div>
        </Container>
      </Navbar>
    </header>
  );
}
