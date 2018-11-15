import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Jumbo from '../../components/Jumbotron/Jumbotron';
import Sections from '../../components/Sections/Sections';

class Homepage extends Component {
  componentDidMount() {
    if (window.location.protocol !== "https:") window.location.protocol = "https:"
  }
  render() {
    return (
      <div>
        <Navbar />
        <Jumbo />
        <Sections />
      </div>
    );
  }
}

export default Homepage;