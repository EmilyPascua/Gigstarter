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
          <h1 className={styles.title}>Welcome to Gigstarter</h1>
          <div className={styles.des}>"Empowering generations through independent work."</div>
          <div>
            <Button variant="outline-primary" size="lg" className={styles.Button1} onClick={() => scroller.scrollTo("Sec6", {
              duration: 1000,
              delay: 50,
              smooth: "easeInOutQuint",
            })}>Let's get started!</Button>
            <Button variant="outline-success" size="lg" onClick={() => scroller.scrollTo("Sec1", {
              duration: 1000,
              delay: 50,
              smooth: "easeInOutQuint",
            })}>I want to learn more</Button>
          </div>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Jumbo;
