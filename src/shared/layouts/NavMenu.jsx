import Navbar from "react-bootstrap/Navbar";
import { Container, Nav } from "react-bootstrap";
import { Ulogo } from "../../utils/images";
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
              <Nav.Link className="nav-home" href="#home">
                Home
              </Nav.Link>
              <Nav.Link className="nav-second" href="#link">
                Social Media
              </Nav.Link>
              <Nav.Link className="nav-second" href="#link">
                Properties
              </Nav.Link>
              <Nav.Link className="nav-second" href="#link">
                USHX Token
              </Nav.Link>
              <Nav.Link className="nav-second" href="#link">
                Realtors
              </Nav.Link>
              <Nav.Link className="nav-second" href="#link">
                Investors
              </Nav.Link>
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
