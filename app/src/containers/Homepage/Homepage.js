import React, { Component } from 'react';
import styles from './Homepage.css';
import Navbar from '../../components/Navbar/Navbar';
import Jumbo from '../../components/Jumbotron/Jumbotron';

class Homepage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbo />
      </div>
    );
  }
}

export default Homepage;
