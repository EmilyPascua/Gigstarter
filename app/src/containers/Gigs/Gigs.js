import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styles from './Gigs.css';
import Navbar from "../../components/Navbar/Navbar";
import Card from "react-bootstrap/lib/Card";
import Button from "react-bootstrap/lib/Button";

import Form from "react-bootstrap/lib/Form";
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';


class Gigs extends Component {
  render() {
    return (
      <div className={styles.Gigs}>
        <Navbar />
       <div className={styles.Container}>
          <div className={styles.TopBanner}>
            <Form>
            <Row className="show-grid">
            <Col lg={6} md={6}>
                <Form.Group controlId="formKeyword">
                  <div align="left">
                    <h3><b>Find Gig</b></h3>
                    <Form.Text className="text-muted">
                      gig name, keywords, or company name
                    </Form.Text>
                  </div>
                  <Form.Control />
                  </Form.Group>
            </Col>
            <Col lg={6} md={6}>
                <Form.Group controlId="formLocation">
                <div align="left">
                  <h3><b>Location</b></h3>
                  <Form.Text className="text-muted">
                    city, state, or zip code
                  </Form.Text>
                </div>                  
                <Form.Control type="location" placeholder="Los Angeles, CA" />
                </Form.Group>
                <div align="right">
                  <Button variant="success" type="submit">
                    Find Gigs
                  </Button>
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
            <hr/>
            Search Results: 50
            <hr/><div className={styles.GigList}>
                <Card className={styles.Item}>
                  <div className={styles.GigTitleSm}>Event Cook</div>
                  <div className={styles.Employer}>Posted by Eric Brady</div>
                  <div className={styles.GigContent}>
                  <span><i class="fa fa-dollar"></i> 300 &nbsp;&nbsp;
                  <i class="fa fa-suitcase"></i> One-Day Gig &nbsp;&nbsp;
                  <i class="fa fa-map-marker"></i> 2199 Angeles Avenue</span>
                  </div>
                </Card>
                <Card className={styles.Item}>
                  <div className={styles.GigTitleSm}>Event Cook</div>
                  <div className={styles.Employer}>Posted by Eric Brady</div>
                  <div className={styles.GigContent}>
                  <span><i class="fa fa-dollar"></i> 300 &nbsp;&nbsp;
                  <i class="fa fa-suitcase"></i> One-Day Gig &nbsp;&nbsp;
                  <i class="fa fa-map-marker"></i> 2199 Angeles Avenue</span>
                  </div>
                </Card>
                <Card className={styles.Item}>
                  <div className={styles.GigTitleSm}>Event Cook</div>
                  <div className={styles.Employer}>Posted by Eric Brady</div>
                  <div className={styles.GigContent}>
                  <span><i class="fa fa-dollar"></i> 300 &nbsp;&nbsp;
                  <i class="fa fa-suitcase"></i> One-Day Gig &nbsp;&nbsp;
                  <i class="fa fa-map-marker"></i> 2199 Angeles Avenue</span>
                  </div>
                </Card>
                <Card className={styles.Item}>
                  <div className={styles.GigTitleSm}>Event Cook</div>
                  <div className={styles.Employer}>Posted by Eric Brady</div>
                  <div className={styles.GigContent}>
                  <span><i class="fa fa-dollar"></i> 300 &nbsp;&nbsp;
                  <i class="fa fa-suitcase"></i> One-Day Gig &nbsp;&nbsp;
                  <i class="fa fa-map-marker"></i> 2199 Angeles Avenue</span>
                  </div>
                </Card>
                </div>
            </Col>
            <Col lg={6} md={6}>
                 <hr/>
                  <div className={styles.GigTitleLg}>Event Cook</div>
                  <div className={styles.Employer}>Posted by Eric Brady</div>
                  <hr/>
                  <p className={styles.GigDescription}>Our local organization is conducting a week-long fundraiser to raise as much money as possible to prepare for the music festival happening this weekend. We require a minimum of 2 hours per day for the week. The gig pays $300 in total.</p>
                  <div className={styles.GigMap}></div>
            
            </Col>
            </Row>
          </div>
        </div>
        </div>
     );
  }
}

export default Gigs;