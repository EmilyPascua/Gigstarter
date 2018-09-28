import React, { Component } from 'react';
import styles from './AboutUs.css';
import Navbar from "../../components/Navbar/Navbar";

class About extends Component {
  render() {
    return (
      <div className={styles.About}>
        <Navbar />
        About
      </div>
    );
  }
}

export default About;
