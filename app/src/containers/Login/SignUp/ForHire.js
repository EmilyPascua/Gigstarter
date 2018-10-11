import React, { Component } from 'react'
import styles from './ForHire.css'
import Navbar from '../../../components/Navbar/Navbar'
import Card from 'react-bootstrap/lib/Card'
import Button from 'react-bootstrap/lib/Button'
import LoginOne from './../Forms/Login1'
import SignOne from './../Forms/Signup1'
import SignOneTwo from './../Forms/Signup1-2'

class Login extends Component {
  state = {
    signup1: false,
    page: 1,
    form: {
      fname: null,
      lname: null,
      email: null,
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
    console.log(obj)
    this.setState({
      form: {
        fname: obj.firstName,
        lname: obj.lastName,
        email: obj.email,
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
    console.log(obj)
    this.setState({
      form2: {
        industry: obj.industry,
        major: obj.major,
        school: obj.school,
        year: obj.year
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
                <LoginOne />
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
