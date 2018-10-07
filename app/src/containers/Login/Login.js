import React, { Component } from 'react';
import styles from './Login.css';
import Navbar from "../../components/Navbar/Navbar";
import Card from "react-bootstrap/lib/Card";
import Button from "react-bootstrap/lib/Button";
import LoginOne from "./Forms/Login1";
import LoginTwo from "./Forms/Login2";
import SignOne from "./Forms/Signup1";
import SignTwo from "./Forms/Signup2";

class Login extends Component {
  state = {
    signup1: false,
    signup2: false
  }


  render() {
    return (
      <div className={styles.Login}>
        <Navbar />
        <div className={styles.Container}>
          <Card className={styles.Card1}>
            <Card.Header as="h2">Gig Finders</Card.Header>
            <Card.Body>
              {this.state.signup1 ? <SignOne/>:<LoginOne/>}
              {this.state.signup1 ? null  : <Button className={styles.SignUpButton} variant="success" onClick={ () =>this.setState({signup1:true})}>Sign up as a Freelancer</Button>}
            </Card.Body>
          </Card>
          <Card className={styles.Card2}>
            <Card.Header as="h2">Gig Starters</Card.Header>
            <Card.Body>
            {this.state.signup2 ? <SignTwo/>:<LoginTwo/>}
              <Button variant="success" onClick={ () =>this.setState({signup2:true})}>Sign up as an Employer</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

export default Login;
