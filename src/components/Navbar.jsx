import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Navigation() {
  return (
    <Navbar className="navBar" bg="light" expand="lg">
      <Container>
        <Navbar.Brand className="navText" href="#home">
          JKCodes
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" me-auto">
            <Nav.Link className="navText" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="navText" href="#aboutSection">
              About Me
            </Nav.Link>
            <Nav.Link className="navText" href="#portfolioSection">
              Projects
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
