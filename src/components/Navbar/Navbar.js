import React from 'react'
import styles from './Navbar.css'
import Navbar from 'react-bootstrap/lib/Navbar'
import Nav from 'react-bootstrap/lib/Nav'
import profPic from '../../assets/user.svg'

const checkLogin = () => {
  if (sessionStorage.getItem('sessionAuth')) {
    return (
      <div className={styles.NavItem}>
        <img
          src={profPic}
          className={styles.ProfPic}
          width={32}
          height={32}
          alt="prof_pic"
        />
        <Nav.Link onClick={() => logout()}>Sign Out</Nav.Link>
      </div>
    )
  } else {
    return (
      <div className={styles.NavItem}>
        <Nav.Link href="forhire">
          <div className={styles.ForHire}>For Hire</div>
        </Nav.Link>
        <Nav.Link href="hiring">
          <div className={styles.Hire}>Hiring</div>
        </Nav.Link>
      </div>
    )
  }
}

const logout = () => {
  sessionStorage.removeItem('sessionAuth')
  window.location.replace(window.location.origin + '/home')
}

const NavBar = props => {
  return (
    <div className={styles.Nav}>
      <Navbar
        expand="lg"
        fixed="top"
        bg="dark"
        variant="dark"
        className={styles.NavbarCustom}
      >
        <Navbar.Brand href="home">Gigstarter</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" />
          <Nav>
            <Nav.Link href="about">About Us</Nav.Link>
            <Nav.Link href="gigs">Gigs</Nav.Link>
            {checkLogin()}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default NavBar
