import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';

const NavBar = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg" fixed="top">
        <Navbar.Brand href="#home">Gigstarter</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" />
          <Nav>
            <Nav.Link href="#home">About Us</Nav.Link>
            <Nav.Link href="#link">Gigs</Nav.Link>
            <Nav.Link href="#login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;