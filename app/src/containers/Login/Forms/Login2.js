import React from 'react';
import Form from "react-bootstrap/lib/Form";
import Button from "react-bootstrap/lib/Button";
import Card from "react-bootstrap/lib/Card";

const LoginTwo = props => {
  return (<div>
    <Card.Title>Login</Card.Title>
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group id="formBasicChecbox">
        <Form.Check type="checkbox" label="Remember Me" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  </div>);
}
export default LoginTwo;