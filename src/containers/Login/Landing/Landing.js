import React, { Component } from 'react';
import styles from "./Landing.css"
import Navbar from "../../../components/Navbar/Navbar";
import Button from 'react-bootstrap/lib/Button'
import Plane from "../../../assets/verify.svg"

class Landing extends Component {
  render() {
    return (
      <div className={styles.Main}>
        <Navbar />
        <div className={styles.MainContainer}>
          <h1>Thank you for signing up!</h1>
          <img src={Plane} alt="plane" className={styles.Plane}/>
          <br/>
          Please check your email inbox for a verification link.
          <br/>
          You will not be able to apply or post any jobs if you are not verified.
        </div>
        <Button className={styles.RedirectButton} onClick={()=> window.location.replace(window.location.origin + '/home')}>Back to the main page</Button>
      </div>
    );
  }
}

export default Landing;
