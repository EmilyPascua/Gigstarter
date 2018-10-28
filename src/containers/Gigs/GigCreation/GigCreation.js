import React, { Component } from 'react'
import Navbar from '../../../components/Navbar/Navbar'

import Container from 'react-bootstrap/lib/Container'

import {
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText
} from 'reactstrap'
import Form from 'react-bootstrap/lib/Form'
import Col from 'react-bootstrap/lib/Col'
import Row from 'react-bootstrap/lib/Row'

import styles from './GigCreation.css'
import InputGroup from 'react-bootstrap/lib/InputGroup'
import FormControl from 'react-bootstrap/lib/FormControl'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import 'react-datepicker/dist/react-datepicker.css'
import { DB_URL } from '../../../utils/utils'
import axios from 'axios'
class Gigs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: moment(),
      endDate: moment(),
      isBusiness: false
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount = () => {
    axios
      .get(DB_URL + 'users/user', {
        headers: {
          Authorization: sessionStorage.getItem('sessionAuth')
        }
      })
      .then(response => {
        if (response.data.businessName) {
          this.setState({
            isBusiness: true
          })
        } else {
          window.location.replace(window.location.origin + '/home')
        }
      })
      .catch(function(error) {
        console.log(error)
        window.location.replace(window.location.origin + '/home')
      })
  }

  handleChange = date => {
    this.setState({
      startDate: date
    })
  }

  handleChange2 = date => {
    this.setState({
      endDate: date
    })
  }

  submit = () => {
    const data = {
      title: document.getElementById('gigName').value,
      major: document.getElementById('prefMajors').value,
      industry: 'N/A',
      payout: parseInt(document.getElementById('gigPayout').value, 10),
      description: document.getElementById('gigDescription').value,
      location: document.getElementById('gigLocation').value,
      startDate: document.getElementById('startDate').value,
      endDate: document.getElementById('endDate').value,
      expectedHours: parseInt(
        document.getElementById('expectedHours').value,
        10
      ),
      desiredSkills: document.getElementById('gigSkills').value,
      address1: '123 Fake St',
      address2: 'Apt #203',
      city: 'Los Angeles',
      state: 'CA',
      zip: '90001',
      locationType: document.getElementById('locationSite').value,
      educationLevel: document.getElementById('educationLevel').value,
      payType: 'one-time'
    }
    axios
      .post(DB_URL + 'jobs/create', data, {
        headers: {
          Authorization: sessionStorage.getItem('sessionAuth')
        }
      })
      .then(response => {
        window.location.replace(window.location.origin + '/gigs')
      })
      .catch(error => {
        console.log(error)
        alert(error.response.data.message)
      })
  }

  render() {
    return this.state.isBusiness ? (
      <div>
        <Navbar />
        <Container className={styles.Content}>
          <h3>Create a Gig</h3>
          <hr />
          <Card className={styles.FormContent}>
            <CardHeader>
              <Form>
                <br />
                <h4>Basic Information</h4>
                <hr />
                <br />
                Let's have an insight of your gig.
                <br />
                <br />
                <b>Gig Name</b>
                <Form.Control
                  id="gigName"
                  type="gigName"
                  placeholder="Gig Name"
                />
                <br />
                <br />
                <b>Description</b>
                <Form.Control
                  id="gigDescription"
                  type="gigDescription"
                  placeholder="Gig Description"
                />
                <br />
                <br />
                <Row>
                  <Col>
                    <b>Start Date</b>
                    <DatePicker
                      id="startDate"
                      selected={this.state.startDate}
                      onChange={this.handleChange}
                    />
                  </Col>
                  <Col>
                    <b>End Date</b>
                    <DatePicker
                      id="endDate"
                      selected={this.state.endDate}
                      onChange={this.handleChange2}
                    />
                  </Col>
                  <Col>
                    <b>Expected Hours</b>
                    <input
                      class="form-control form-control-sm"
                      type="number"
                      id="expectedHours"
                    />
                  </Col>
                </Row>
                <br />
                <br />
                <b>Certification/Desired Skills</b>
                <Form.Control
                  id="gigSkills"
                  type="gigSkills"
                  placeholder="Hardworker, Adaptable, Tech-savy..."
                />
                <br />
                <br />
                <b>Payout</b>
                <br />
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text>$</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    aria-label="Amount (to the nearest dollar)"
                    className={styles.PayoutInput}
                    id="gigPayout"
                  />
                  <InputGroup.Append>
                    <InputGroup.Text>.00</InputGroup.Text>
                  </InputGroup.Append>
                </InputGroup>
                <br />
                <br />
                <b>Location</b>
                <Form.Control
                  as="select"
                  type="text"
                  placeholder="locationSatate"
                  name="locationSatate"
                  id="gigLocation"
                >
                  <option>Choose...</option>
                  <option value="AL">Alabama</option>
                  <option value="AK">Alaska</option>
                  <option value="AZ">Arizona</option>
                  <option value="AR">Arkansas</option>
                  <option value="CA">California</option>
                  <option value="CO">Colorado</option>
                  <option value="CT">Connecticut</option>
                  <option value="DE">Delaware</option>
                  <option value="DC">District Of Columbia</option>
                  <option value="FL">Florida</option>
                  <option value="GA">Georgia</option>
                  <option value="HI">Hawaii</option>
                  <option value="ID">Idaho</option>
                  <option value="IL">Illinois</option>
                  <option value="IN">Indiana</option>
                  <option value="IA">Iowa</option>
                  <option value="KS">Kansas</option>
                  <option value="KY">Kentucky</option>
                  <option value="LA">Louisiana</option>
                  <option value="ME">Maine</option>
                  <option value="MD">Maryland</option>
                  <option value="MA">Massachusetts</option>
                  <option value="MI">Michigan</option>
                  <option value="MN">Minnesota</option>
                  <option value="MS">Mississippi</option>
                  <option value="MO">Missouri</option>
                  <option value="MT">Montana</option>
                  <option value="NE">Nebraska</option>
                  <option value="NV">Nevada</option>
                  <option value="NH">New Hampshire</option>
                  <option value="NJ">New Jersey</option>
                  <option value="NM">New Mexico</option>
                  <option value="NY">New York</option>
                  <option value="NC">North Carolina</option>
                  <option value="ND">North Dakota</option>
                  <option value="OH">Ohio</option>
                  <option value="OK">Oklahoma</option>
                  <option value="OR">Oregon</option>
                  <option value="PA">Pennsylvania</option>
                  <option value="RI">Rhode Island</option>
                  <option value="SC">South Carolina</option>
                  <option value="SD">South Dakota</option>
                  <option value="TN">Tennessee</option>
                  <option value="TX">Texas</option>
                  <option value="UT">Utah</option>
                  <option value="VT">Vermont</option>
                  <option value="VA">Virginia</option>
                  <option value="WA">Washington</option>
                  <option value="WV">West Virginia</option>
                  <option value="WI">Wisconsin</option>
                  <option value="WY">Wyoming</option>
                </Form.Control>
                <br />
                <br />
                <b>Will your project be handled on-site or remote?</b>
                <Form.Control
                  as="select"
                  type="text"
                  placeholder="locationSite"
                  name="locationSite"
                  id="locationSite"
                >
                  <option value="On-Site">On-Site</option>
                  <option value="Remote">Remote</option>
                </Form.Control>
                <br />
                <br />
                <h4>Freelancer Information</h4>
                <hr />
                <br />
                Who are you looking to hire?
                <br />
                <br />
                <br />
                <b>Education Level</b>
                <Form.Control
                  as="select"
                  type="text"
                  placeholder="educationlevel"
                  name="educationlevel"
                  id="educationLevel"
                >
                  <option>Choose...</option>
                  <option value="Bachelor's">Bachelor's</option>
                  <option value="Masters's">Masters's</option>
                  <option value="Other">Other</option>
                  <option value="None">None</option>
                </Form.Control>
                <br />
                <br />
                <b>Prefered Majors</b>
                <Form.Control
                  id="prefMajors"
                  type="prefMajors"
                  placeholder="Computer Science, Computer Engineering, Electrical Engineering..."
                />
                <br />
                <br />
                <Button
                  variant="success"
                  type="button"
                  onClick={() => this.submit()}
                >
                  Submit
                </Button>
              </Form>
            </CardHeader>
          </Card>
        </Container>
      </div>
    ) : null
  }
}

export default Gigs
