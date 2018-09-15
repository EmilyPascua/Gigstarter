import React from 'react';
import styles from './Jumbotron.css';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Container from 'react-bootstrap/lib/Container';

const Jumbo = () => {
  return (
    <div>
      <Jumbotron fluid className={styles.Jumbo}>
        <Container>
          <h1>Welcome to GigStarter</h1>
          <p>A brighter future is just 1 click away</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Jumbo;
