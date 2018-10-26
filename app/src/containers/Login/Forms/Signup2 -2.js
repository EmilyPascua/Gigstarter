import React from 'react';
import Form from "react-bootstrap/lib/Form";
import Button from "react-bootstrap/lib/Button";
import Col from "react-bootstrap/lib/Col";
import Card from "react-bootstrap/lib/Card";
import styles from './css/Signup2.css';


const SignTwoTwo = props => {
  return (<div>
      <h3>Skills</h3>
      <p>What skills are needed for this gig?</p>
      <div>
      <table class="table table-hover">
        <tr>
          <td>Sk1</td>
          <td>Sk2</td>
          <td>Sk3</td>
        </tr>
        <tr>
          <td>Sk1</td>
          <td>Sk2</td>
          <td>Sk3</td>
        </tr>
        <tr>
          <td>Sk1</td>
          <td>Sk2</td>
          <td>Sk3</td>
        </tr>
        <tr>
        </tr>
      </table>
      <input type="skill" class="form-control" id="skillset"  placeholder="Don't see the skill set?"></input>
      <div class="navigation">
        <Button id="back" variant="danger" onClick={()=>props.page(1)}> Back </Button>
        <Button id="next" variant="success" onClick={()=>props.page(3)}> Next</Button>
      </div>
      </div>
  </div>);
}
export default SignTwoTwo;