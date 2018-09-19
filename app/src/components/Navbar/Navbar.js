import React from 'react';
import styles from './Navbar.css';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';

const NavBar = (props) => {
  return (
    <div>
      <Navbar expand="lg" fixed="top" bg="dark" variant="dark">
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
