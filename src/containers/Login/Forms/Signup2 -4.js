import React from 'react';
import Form from "react-bootstrap/lib/Form";
import Button from "react-bootstrap/lib/Button";
import Col from "react-bootstrap/lib/Col";
import Card from "react-bootstrap/lib/Card";
import styles from './css/Signup2.css';


const SignTwoFour = props => {
  return (<div>
      <h3>Time Commitment</h3>
      <p>What is the expected time commitment for your project?</p>
      <div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="timeCommitment" id="timeCommitment" value="option1" checked></input>
        <label class="form-check-label" for="projectDuration">
          More than 30hrs/week.
        </label>
        <hr></hr>
        <input class="form-check-input" type="radio" name="timeCommitment" id="timeCommitment" value="option2" checked></input>
        <label class="form-check-label" for="timeCommitment">
          Less than 30hrs/week.
        </label>
        <hr></hr>
        <input class="form-check-input" type="radio" name="timeCommitment" id="timeCommitment" value="option3" checked></input>
        <label class="form-check-label" for="timeCommitment">
          I'll decide later.
        </label>
        <hr></hr>
      </div>
      <div class="navigation">
        <Button id="back" variant="danger" onClick={()=>props.page(3)}> Back </Button>
        <Button id="next" variant="success" onClick={()=>props.page(5)}> Next</Button>
      </div>
      </div>
  </div>);
}
export default SignTwoFour;