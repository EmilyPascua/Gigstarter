import React from 'react';
import styles from './Jumbotron.css';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Container from 'react-bootstrap/lib/Container';
import Button from 'react-bootstrap/lib/Button';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


const Jumbo = ({ isVisible }) => {

  return (
    <div>
      <Jumbotron fluid className={styles.Jumbo} >
        <Container className={styles.Container}>
          <h1 id="jum">Welcome to GigStarter</h1>
          <p className={styles.des}>A brighter future is just 1 click away</p>
          <p><Button href="login" variant="outline-primary" size="lg" >Let's get started!</Button></p>
          <p><Button variant="outline-secondary" size="lg" onClick={() => scroller.scrollTo("Sec1", {
            duration: 1000,
            delay: 50,
            smooth: "easeInOutQuint",
          })}>I want to learn more</Button></p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Jumbo;
