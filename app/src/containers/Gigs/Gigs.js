import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './Gigs.css'
import Navbar from '../../components/Navbar/Navbar'
import Card from 'react-bootstrap/lib/Card'
import Button from 'react-bootstrap/lib/Button'
import Form from 'react-bootstrap/lib/Form'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import GigCard from './GigCard/GigCard'
import Fuse from 'fuse.js'
import GigModal from './GigModal/GigModal'
import Badge from 'react-bootstrap/lib/Badge'
import axios from 'axios'
import { DB_URL } from '../../utils/utils'

class Gigs extends Component {
  state = {
    gigObjsOriginal: [
      {
        jobID: '0',
        jobTitle: 'None',
        jobCompany: 'None',
        jobDes: 'Please login to view our available gig listings',
        jobPay: 0,
        jobPayType: 'x',
        jobAddr1: 'Adress',
        jobTime: '0 day',
        jobSkills: ['0']
      },
      {
        jobID: '1',
        jobTitle: 'Housekeeper',
        jobCompany: 'John Smith',
        jobDes:
          'I am looking for a house keeper to maintain cleanliness in my home.  This will be a once a week job.  Duties will include: cleaning the sofa, floors, etc...',
        jobPay: 20,
        jobPayType: 'hourly',
        jobAddr1: '837 Aiso St',
        jobTime: '1 day',
        jobSkills: ['Cleaning', 'Washing', 'Drying']
      },
      {
        jobID: '2',
        jobTitle: 'DJ',
        jobCompany: 'Numb Media',
        jobDes:
          "We are looking for a DJ for our daughter's 14th birthday.  Must know current hit songs and be willing to play song requests.",
        jobPay: 25,
        jobPayType: 'hourly',
        jobAddr1: '4432 June Ct',
        jobTime: '1 day',
        jobSkills: ['Music', 'Dependable', 'Electronics']
      }
    ],
    gigObjs: [],
    currentGig: {},
    modalShow: false,
    showAdd: false
  }

  componentDidMount = () => {
    const firstGig =
      this.state.gigObjsOriginal.length > 0
        ? this.state.gigObjsOriginal[0]
        : null
    this.setState({
      currentGig: firstGig
    })

    let initObjs = []

    axios
      .get(DB_URL + 'jobs')
      .then(response => {
        response.data.content.map(job => {
          initObjs.push({
            jobID: job.id.toString(),
            jobTitle: job.title,
            jobCompany: job.posterId,
            jobDes: job.description,
            jobPay: job.payout,
            jobPayType: 'onetime',
            jobAddr1: job.location,
            jobTime: '1 day',
            jobSkills: ['Cooking', 'Organization', 'Walking']
          })
          return 0
        })
        this.setState({
          gigObjsOriginal: initObjs,
          gigObjs: initObjs,
          currentGig: initObjs[0]
        })
      })
      .catch(function(error) {
        console.log(error)
      })

      this.checkUser()
  }

  setCurrentGig = id => {
    const clickedGig = this.state.gigObjs.map(job => {
      if (job.jobID === id) {
        this.setState({
          currentGig: job
        })
      }
      return null
    })
  }

  updateList = e => {
    const options = {
      tokenize: true,
      threshold: 0.1,
      keys: ['jobTitle', 'jobCompany', 'jobSkills', 'jobDes']
    }
    const fs = new Fuse(this.state.gigObjsOriginal, options)
    const orig = this.state.gigObjsOriginal
    if (e.target.value === '') {
      this.setState({
        gigObjs: orig
      })
    } else {
      this.setState({
        gigObjs: fs.search(e.target.value)
      })
    }
  }

  addBadges = () => {
    if (this.state.currentGig.jobSkills) {
      return this.state.currentGig.jobSkills.map((skill, id) => (
        <p className={styles.BadgePill} key={id}>
          <Badge pill variant="primary" className={styles.Pill}>
            {skill}
          </Badge>
        </p>
      ))
    }
    return null
  }

  checkUser = () => {
    axios
      .get(DB_URL + 'users/user', {
        headers: {
          Authorization: sessionStorage.getItem('sessionAuth')
        }
      })
      .then((response) => {
        if (response.data.businessName) {
          this.setState({ showAdd: true })
        } else {
          this.setState({ showAdd: false })
        }
      })
      .catch(function(error) {
        console.log(error)
      })
  }

  goToCreate = () => {
    this.props.history.push('/createGig')
  }

  apply = (jobID, name) => {
    alert("Job: "+name+" Applied")
    axios
    .post(DB_URL + 'jobs/apply/'+jobID, {} ,{
      headers: {
        Authorization: sessionStorage.getItem('sessionAuth')
      }
    })
    .then((response) => {
    })
    .catch(function(error) {
      console.log(error)
      alert("Employers cannot apply!")
    })
  }

  render() {
    let modalClose = () => this.setState({ modalShow: false })
    const mq = window.matchMedia('(min-width: 768px)')
    return (
      <div className={styles.Gigs}>
        <Navbar />
        <div className={styles.Container}>
          <GigModal
            show={this.state.modalShow}
            onHide={modalClose}
            job={this.state.currentGig}
          />
          <div className={styles.TopBanner}>
            <Form>
              <Row className="show-grid">
                <Col lg={6} md={6}>
                  <Form.Group
                    controlId="formKeyword"
                    className={styles.InputSearch}
                  >
                    <div align="left">
                      <h3>
                        <b>Find Gig</b>
                      </h3>
                      <Form.Text className="text-muted">
                        gig name, keywords, or company name
                      </Form.Text>
                    </div>
                    <Form.Control
                      type="text"
                      onChange={e => this.updateList(e)}
                    />
                  </Form.Group>
                </Col>
                <Col lg={6} md={6}>
                  <Form.Group
                    controlId="formLocation"
                    className={styles.InputLocation}
                  >
                    <div align="left">
                      <h3>
                        <b>Location</b>
                      </h3>
                      <Form.Text className="text-muted">
                        city, state, or zip code
                      </Form.Text>
                    </div>
                    <Form.Control
                      type="location"
                      placeholder="Los Angeles, CA"
                    />
                  </Form.Group>
                  <div align={mq.matches ? 'right' : 'center'}>
                    {this.state.showAdd ? (
                      <Button
                        variant="success"
                        type="button"
                        className={styles.FindButton}
                        onClick={()=>this.goToCreate()}
                      >
                        Add a gig
                      </Button>
                    ) : null}
                  </div>
                </Col>
              </Row>
            </Form>
          </div>
        </div>

        <div className={styles.ContainerBottom}>
          <div className={styles.BottomContent}>
            <Row className="show-grid">
              <Col lg={6} md={6}>
                <hr />
                Search Results: {this.state.gigObjs.length}
                <hr />
                <div className={styles.GigList}>
                  {this.state.gigObjs.map(job => (
                    <div
                      className={styles.jobCard}
                      onClick={() => {
                        if (mq.matches) {
                          this.setCurrentGig(job.jobID)
                        } else {
                          this.setCurrentGig(job.jobID)
                          this.setState({ modalShow: true })
                        }
                      }}
                      key={job.jobID}
                    >
                      <GigCard data={job} />
                    </div>
                  ))}
                </div>
              </Col>
              <Col lg={6} md={6} className={styles.BigCard}>
                <hr />
                <div className={styles.GigTitleLg}>
                  {this.state.currentGig.jobTitle}
                </div>
                <div className={styles.Employer}>
                  Posted by {this.state.currentGig.jobCompany}
                </div>
                <hr />
                <p className={styles.GigDescription}>
                  {this.state.currentGig.jobDes}
                </p>
                <div className={styles.BadgePillContainer}>
                  {this.addBadges()}
                </div>
                <Button className={styles.ApplyButton} variant="outline-success" onClick={()=>this.apply(this.state.currentGig.jobID,this.state.currentGig.jobTitle)}>Apply</Button>
                <div className={styles.GigMap} />
              </Col>
            </Row>
          </div>
        </div>
      </div>
    )
  }
}

export default Gigs
