import React from 'react';
import Form from "react-bootstrap/lib/Form";
import Button from "react-bootstrap/lib/Button";
import Card from "react-bootstrap/lib/Card";
import styles from "./Login1.css"

const LoginOne = props => {
  return (<div>
    <Card.Title>Login</Card.Title>
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(value)=> props.email(value.target.value)}/>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(value)=> props.pass(value.target.value)}/>
        {props.error ? <div className={styles.Error}>Invalid email / password combination</div> : ''}
      </Form.Group>

      <Form.Group id="formBasicChecbox">
        <Form.Check type="checkbox" label="Remember Me" />
      </Form.Group>
      <Button variant="primary" type="button" onClick={()=> props.login()}>
      Login
      </Button>
    </Form>
  </div>);
}
export default LoginOne;