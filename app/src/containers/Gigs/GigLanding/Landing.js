import React from 'react';
import styles from './Landing.css';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Container from 'react-bootstrap/lib/Container';
import Button from 'react-bootstrap/lib/Button';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


const Jumbo = ({ isVisible }) => {

  return (
    <div>
      <Jumbotron fluid className={styles.Jumbo} >
        <Container className={styles.Container}>
          <h1 className={styles.title}>Please sign up to acc</h1>
          <div className={styles.des}>An organization’s mission statement should clearly communicate what it is that they do. Many mission statements succumb to an overuse of words in general, but especially jargon.  Good mission statements should be clear, concise, and useful. Some might also add “inspiring” to the list of descriptors. We don’t altogether disagree, but we find that including this as an upfront criteria often ends up with a Frankenstein that is a part mission, part vision statement (desired end-state), and almost always too long.</div>
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
