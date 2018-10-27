import React, { Component } from 'react'
import styles from './ForHire.css'
import Navbar from '../../../components/Navbar/Navbar'
import Card from 'react-bootstrap/lib/Card'
import Button from 'react-bootstrap/lib/Button'
import LoginOne from './../Forms/Login1'
import SignOne from './../Forms/Signup1'
import SignOneTwo from './../Forms/Signup1-2'
import axios from 'axios'
import { DB_URL } from '../../../utils/utils'

class Login extends Component {
  state = {
    signup1: false,
    page: 1,
    form: {
      fname: null,
      lname: null,
      email: null,
      password: null,
      dob: null,
      addr1: null,
      addr2: null,
      city: null,
      state: null,
      zip: null
    },
    form2: {
      industry: null,
      major: null,
      school: null,
      year: null
    },
    login: {
      email: null,
      password: null,
      error: false
    }
  }

  back = e => {
    this.setState({
      signup1: false
    })
  }

  pageSelector = pg => {
    switch (pg) {
      case 1:
        return (
          <SignOne
            param={this.back}
            pg={this.setPage}
            save={this.savePg1}
            form={this.state.form}
          />
        )
      case 2:
        return (
          <SignOneTwo
            param={this.backPage}
            pg={this.setPage}
            save={this.savePg2}
            form={this.state.form2}
            submitToDB={this.sendToDB}
          />
        )
      default:
        return <SignOne param={this.back} pg={this.setPage} />
    }
  }

  setPage = () => {
    let tempPg = this.state.page
    tempPg++
    console.log(tempPg)
    this.setState({
      page: tempPg
    })
  }

  backPage = () => {
    let tempPg = this.state.page
    tempPg--
    console.log(tempPg)
    this.setState({
      page: tempPg
    })
  }

  savePg1 = obj => {
    this.setState({
      form: {
        fname: obj.firstName,
        lname: obj.lastName,
        email: obj.email,
        password: obj.password,
        dob: obj.dob,
        addr1: obj.address1,
        addr2: obj.address2,
        city: obj.city,
        state: obj.state,
        zip: obj.zip
      }
    })
  }

  savePg2 = obj => {
    this.setState({
      form2: {
        industry: obj.industry,
        major: obj.major,
        school: obj.school,
        year: obj.year
      }
    })
  }

  sendToDB = () => {
    const finishedForm = {
      email: this.state.form.email,
      password: this.state.form.password,
      firstName: this.state.form.fname,
      lastName: this.state.form.lname,
      major: this.state.form2.major,
      year: 1,
      industry: this.state.form2.industry,
      school: this.state.form2.school
    }
    console.log('SUBMIT TO DB,', finishedForm)
    axios
      .post(DB_URL + 'users/sign-up/student', {
        email: this.state.form.email,
        password: this.state.form.password,
        firstName: this.state.form.fname,
        lastName: this.state.form.lname,
        major: this.state.form2.major,
        year: 1,
        industry: this.state.form2.industry,
        school: this.state.form2.school
      })
      .then(response => {
        console.log(response)
        window.location.replace(window.location.origin + '/verify')
      })
      .catch(error => {
        console.log(error)
        if (
          error.response.data.status === 500 &&
          error.response.data.message ===
            'could not execute statement; SQL [n/a]; constraint [application_user_pkey]; nested exception is org.hibernate.exception.ConstraintViolationException: could not execute statement'
        ) {
          window.location.replace(window.location.origin + '/verify')
        } else {
          alert(error.response.data.message)
        }
      })
  }

  sendLogin = () => {
    axios
      .post(DB_URL + 'login', {
        email: this.state.login.email,
        password: this.state.login.password
      })
      .then(response => {
        sessionStorage.setItem('sessionAuth', response.headers.authorization)
        this.props.history.push('/gigs')
      })
      .catch(error => {
        console.log(error)
        console.log('Invalid user/pass')
        this.setState({
          login: {
            email: this.state.login.email,
            password: this.state.login.password,
            error: true
          }
        })
      })
  }

  setLoginEmail = e => {
    this.setState({
      login: {
        email: e,
        password: this.state.login.password,
        error: this.state.login.error
      }
    })
  }

  setLoginPass = p => {
    this.setState({
      login: {
        email: this.state.login.email,
        password: p,
        error: this.state.login.error
      }
    })
  }

  render() {
    return (
      <div className={styles.Login}>
        <Navbar />
        <div className={styles.Container}>
          <Card className={styles.Card1}>
            <Card.Header as="h2">Gig Finders</Card.Header>
            <Card.Body>
              {this.state.signup1 ? (
                this.pageSelector(this.state.page)
              ) : (
                <LoginOne
                  login={this.sendLogin}
                  email={this.setLoginEmail}
                  pass={this.setLoginPass}
                  error={this.state.login.error}
                />
              )}
              {this.state.signup1 ? null : (
                <Button
                  className={styles.SignButton}
                  variant="success"
                  onClick={() => this.setState({ signup1: true })}
                >
                  Sign up as a Freelancer
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
