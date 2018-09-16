import React, { Component } from 'react';
import styles from './Layout.css';
import Homepage from '../Homepage/Homepage';

class Layout extends Component {
  render() {
    return (
      <div className={styles.Layout}>
        <Homepage />
      </div>
    );
  }
}

export default Layout;
