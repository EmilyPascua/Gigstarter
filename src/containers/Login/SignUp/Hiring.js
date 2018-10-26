import React, { Component } from 'react'
import styles from './Hiring.css'
import Navbar from '../../../components/Navbar/Navbar'
import Card from 'react-bootstrap/lib/Card'
import Button from 'react-bootstrap/lib/Button'
import LoginTwo from './../Forms/Login2'
import SignUpOne from '../Forms/EmployerSignup/SignUpPg1'
import axios from 'axios'
import { DB_URL } from '../../../utils/utils'

class Login extends Component {
  state = {
    signup2: false,
    page: 1,
    login: {
      email: null,
      password: null,
      error: false
    },
    signUp: {
      company: null,
      phone: null,
      email: null,
      password: null,
      address1: null,
      address2: null,
      city: null,
      state: null,
      zip: null,
      agree: null
    }
  }

  back = e => {
    this.setState({
      signup2: false
    })
  }

  setPages = pg => {
    switch (pg) {
      case 1:
        return (
          <SignUpOne
            param={this.back}
            page={this.changePages}
            handle={this.handleSubmit}
          />
        )
      default:
        return 1
    }
  }

  handleSubmit = e => {
    this.setState(
      {
        signUp: {
          company: document.getElementById('formGridCompany').value,
          phone: document.getElementById('formGridPhone').value,
          email: document.getElementById('formGridEmail').value,
          password: document.getElementById('formGridPassword').value,
          address1: document.getElementById('formGridAddress1').value,
          address2: document.getElementById('formGridAddress2').value,
          city: document.getElementById('formGridCity').value,
          state: document.getElementById('formGridState').value,
          zip: document.getElementById('formGridZip').value,
          agree: document.getElementById('formGridCheckbox').children[0]
            .children[0].checked
        }
      },
      () => this.postToDB()
    )
    e.preventDefault()
    e.stopPropagation()
  }

  postToDB = () => {
    if (this.state.signUp.agree === true) {
      axios
        .post(DB_URL + 'users/sign-up/employer', {
          email: this.state.signUp.email,
          password: this.state.signUp.password,
          firstName: 'WIP',
          lastName: 'WIP',
          businessName: this.state.signUp.company,
          businessLocation:
            this.state.signUp.address1 +
            ', ' +
            this.state.signUp.address2 +
            ', ' +
            this.state.signUp.city +
            ' ' +
            this.state.signUp.state +
            ', ' +
            this.state.signUp.zip,
          industry: this.state.signUp.phone,
          numberOfEmployees: 999
        })
        .then(response => {
          console.log(response)
          this.back()
        })
        .catch(error => {
          console.log(error)
          this.back()
        })
    }
  }

  sendLogin = () => {
    axios.post(DB_URL+'login', {
      email: this.state.login.email,
      password: this.state.login.password
    })
    .then((response) => {
      sessionStorage.setItem('sessionAuth', response.headers.authorization);
      this.props.history.push('/gigs')
    })
    .catch((error) => {
      console.log(error);
      console.log("Invalid user/pass")
      this.setState({
        login: {
          ...this.state.login,
          error: true
        }
      })
    });
  }

  changePages = e => {
    this.setState({
      page: e
    })
  }

  setLoginEmail = (e) => {
    this.setState({
      login: {
        ...this.state.login,
        email: e
      }
    })
  }

  setLoginPass = (p) => {
    this.setState({
      login: {
        ...this.state.login,
        password: p
      }
    })
  }

  render() {
    return (
      <div className={styles.Login}>
        <Navbar />
        <div className={styles.Container}>
          <Card className={styles.Card2}>
            <Card.Header as="h2">Gig Starters</Card.Header>
            <Card.Body>
              {this.state.signup2 ? (
                this.setPages(this.state.page)
              ) : (
                <LoginTwo login={this.sendLogin} email={this.setLoginEmail} pass={this.setLoginPass} error={this.state.login.error}/>
              )}
              {this.state.signup2 ? null : (
                <Button
                  className={styles.SignButton}
                  variant="success"
                  onClick={() => this.setState({ signup2: true })}
                >
                  Sign up as an Employer
                </Button>
              )}
            </Card.Body>
          </Card>
        </div>
      </div>
    )
  }
}

export default Login
