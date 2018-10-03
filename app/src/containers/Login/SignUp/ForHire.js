import React, { Component } from 'react';
import styles from './ForHire.css';
import Navbar from "../../../components/Navbar/Navbar";
import Card from "react-bootstrap/lib/Card";
import Button from "react-bootstrap/lib/Button";
import LoginOne from "./../Forms/Login1";
import SignOne from "./../Forms/Signup1";

class Login extends Component {
  state = {
    signup1: false
  }

  back = (e) => {
    this.setState({
      signup1: false
    });
  }


  render() {
    return (
      <div className={styles.Login}>
        <Navbar />
        <div className={styles.Container}>
          <Card className={styles.Card1}>
            <Card.Header as="h2">Gig Finders</Card.Header>
            <Card.Body>
              {this.state.signup1 ? <SignOne param={this.back}/>:<LoginOne/>}
              <Button className={styles.SignButton} variant="success" onClick={ () =>this.setState({signup1:true})}>Sign up as a Freelancer</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

export default Login;
