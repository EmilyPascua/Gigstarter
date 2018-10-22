import React, { Component } from 'react';
import styles from './Hiring.css';
import Navbar from "../../../components/Navbar/Navbar";
import Card from "react-bootstrap/lib/Card";
import Button from "react-bootstrap/lib/Button";
import LoginTwo from "./../Forms/Login2";
import SignTwo from "./../Forms/Signup2";

class Login extends Component {
  state = {
    signup2: false
  }

  back = (e) => {
    this.setState({
      signup2: false
    });
  }

  render() {
    return (
      <div className={styles.Login}>
        <Navbar />
        <div className={styles.Container}>
          <Card className={styles.Card2}>
            <Card.Header as="h2">Gig Starters</Card.Header>
            <Card.Body>
            {this.state.signup2 ? <SignTwo param={this.back}/>:<LoginTwo/>}
            {this.state.signup2 ? null : <Button className={styles.SignButton} variant="success" onClick={ () =>this.setState({signup2:true})}>Sign up as an Employer</Button>}
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

export default Login;
