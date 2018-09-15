import React, { Component } from 'react';
import styles from './Homepage.css';

class Homepage extends Component {
  render() {
    return (
      <div className={styles.Homepage}>
        <h1>Gigstarter</h1>
        <ul>
          <li>Home</li>
          <li>Gigs</li>
          <li>Login</li>
        </ul>
      </div>
    );
  }
}

export default Homepage;
