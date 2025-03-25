import { Navbar, Container, Nav } from "react-bootstrap";

import React from "react";

export default function Header() {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container fluid>
          <Navbar.Brand href="/">ProShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="mr-auto">
              <Nav.Link href="cart"><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
              <Nav.Link href="login"><i className="fas fa-user"></i>Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
