import React, { Component } from 'react';
import styles from './App.css';
import Layout from './containers/Layout/Layout';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Layout />
      </div>
    );
  }
}

export default App;
