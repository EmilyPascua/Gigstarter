import React, { Component } from 'react';
import styles from './Gigs.css';
import Navbar from "../../components/Navbar/Navbar";

class Gigs extends Component {
  render() {
    return (
      <div className={styles.Gigs}>
        <Navbar />
        Gigs
      </div>
    );
  }
}

export default Gigs;
