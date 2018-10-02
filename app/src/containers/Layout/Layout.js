import React, { Component } from 'react';
import styles from './Layout.css';
import Homepage from '../Homepage/Homepage';
import About from "../AboutUs/AboutUs";
import Gigs from "../Gigs/Gigs";
import Login from "../Login/Login";
import Hire from "../Login/SignUp/Hiring";
import ForHire from "../Login/SignUp/ForHire";
import {Switch,Route}from "react-router-dom";


class Layout extends Component {
  render() {
    return (
      <div className={styles.Layout}>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/home" component={Homepage} />
        <Route path="/about" component={About} />
        <Route path="/gigs" component={Gigs} />
        <Route path="/hiring" component={Hire} />
        <Route path="/forhire" component={ForHire} />
        {/* <Route path="/login" component={Login} /> */}
        </Switch>
      </div>
    );
  }
}

export default Layout;
