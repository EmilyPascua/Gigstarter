import React from 'react';
import Form from "react-bootstrap/lib/Form";
import Button from "react-bootstrap/lib/Button";
import Col from "react-bootstrap/lib/Col";
import Card from "react-bootstrap/lib/Card";
import styles from './css/Signup2.css';


const SignTwo = props => {
  return (<div>
      <h3>Project Duration</h3>
      <p>How long will your project last?</p>
      <div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="projectDuration" id="projectDuration" value="option1" checked></input>
        <label class="form-check-label" for="projectDuration">
          More than 6 months.
        </label>
        <hr></hr>
        <input class="form-check-input" type="radio" name="projectDuration" id="projectDuration" value="option2" checked></input>
        <label class="form-check-label" for="projectDuration">
          3 to 6 months.
        </label>
        <hr></hr>
        <input class="form-check-input" type="radio" name="projectDuration" id="projectDuration" value="option3" checked></input>
        <label class="form-check-label" for="projectDuration">
          1 to 3 months.
        </label>
        <hr></hr>
        <input class="form-check-input" type="radio" name="projectDuration" id="projectDuration" value="option4" checked></input>
        <label class="form-check-label" for="projectDuration">
          Less than 1 month.
        </label>
        <hr></hr>
        <input class="form-check-input" type="radio" name="projectDuration" id="projectDuration" value="option5" checked></input>
        <label class="form-check-label" for="projectDuration">
          Less than 1 week.
        </label>
        <hr></hr>
        <input class="form-check-input" type="radio" name="projectDuration" id="projectDuration" value="option6" checked></input>
        <label class="form-check-label" for="projectDuration">
          I'll decide later.
        </label>
        <hr></hr>
      </div>
      <div class="navigation">
        <Button id="back" variant="danger"> Back </Button>
        <Button id="next" variant="success" onClick={()=>props.page(2)}> Next</Button>
      </div>
      </div>
  </div>);
}
export default SignTwo;