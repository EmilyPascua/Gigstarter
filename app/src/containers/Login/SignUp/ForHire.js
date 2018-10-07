import React, { Component } from 'react';
import styles from './ForHire.css';
import Navbar from "../../../components/Navbar/Navbar";
import Card from "react-bootstrap/lib/Card";
import Button from "react-bootstrap/lib/Button";
import LoginOne from "./../Forms/Login1";
import SignOne from "./../Forms/Signup1";

class Login extends Component {
  state = {
    signup1: false,
    page: 1
  }

  back = (e) => {
    this.setState({
      signup1: false
    });
  }

  pageSelector = (pg) => {
    switch(pg){
      case 1:
        return <SignOne param={this.back} pg={this.setPage}/>
      default:
      return <SignOne param={this.back} pg={this.setPage}/>
    }
  }

  setPage = () => {
    let tempPg = this.state.page
    tempPg++;
    console.log(tempPg)
    this.setState({
      page: tempPg
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
              {this.state.signup1 ? this.pageSelector(this.state.page):<LoginOne/>}
              {this.state.signup1 ? null : <Button className={styles.SignButton} variant="success" onClick={ () =>this.setState({signup1:true})}>Sign up as a Freelancer</Button>}
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

export default Login;
