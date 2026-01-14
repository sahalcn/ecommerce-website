import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBarD() {
 return (
    <Navbar
      expand="lg"
      className="shadow-sm"
      style={{
        backgroundColor: "#e6f4ff",
        borderBottom: "2px solid #ffc107",
      }}
    >
      <Container fluid className="px-4">
        {/* Brand */}
        <Navbar.Brand
          href="/"
          className="fw-bold fs-4"
          style={{ color: "#8b4513" }}
        >
          E-COMMERCE
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          {/* Center Menu */}
          <Nav className="mx-auto gap-4">
            <Nav.Link href="/" className="fw-semibold text-dark">
              Home
            </Nav.Link>

            <Nav.Link href="/cart" className="fw-semibold text-dark">
              Cart
            </Nav.Link>

            <NavDropdown
              title="Account"
              id="navbarScrollingDropdown"
              className="fw-semibold"
            >
              <NavDropdown.Item href="/login">
                Login
              </NavDropdown.Item>
              <NavDropdown.Item href="/register">
                Register
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          {/* Search */}
          
            <Form>
              
            <Button variant="warning" className="rounded-pill px-4">
              Log out
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
      <Nav.Link/>
    </Navbar>
  );
}






export default NavBarD