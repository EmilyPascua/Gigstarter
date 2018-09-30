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
            <Col lg={6} md={1}>
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
            <Col lg={6} md={1}>
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
         <div className={styles.Item}>
            <Row>
              <Card className={styles.Test}>
                <div className={styles.GigTitle}>Event Cook</div>
                <div className={styles.Employer}>Posted by Eric Brady</div>
                <div className={styles.GigContent}>
                <i class="fa fa-dollar"></i> 300<br></br>
                <i class="fa fa-suitcase"></i> One-Day Gig <br></br>
                <i class="fa fa-map-marker"></i> 2199 Angeles Avenue <br></br>
                </div>
              </Card>
            </Row>
          </div>
          <div className={styles.Item}>
            <Row>
              <Card className={styles.Test}>
                <div className={styles.GigTitle}>Web Design</div>
                <div className={styles.Employer}>Posted by Roger Zhao</div>
                <div className={styles.GigContent}>
                <i class="fa fa-dollar"></i> 200<br></br>
                <i class="fa fa-suitcase"></i> One-Week Gig <br></br>
                <i class="fa fa-map-marker"></i> 1022 Alhambra Road <br></br>
                </div>
              </Card>
            </Row>
          </div>
          <div className={styles.Item}>
            <Row>
              <Card className={styles.Test}>
                <div className={styles.GigTitle}>Community Fundraiser</div>
                <div className={styles.Employer}>Posted by GetStarted.com</div>
                <div className={styles.GigContent}>
                <i class="fa fa-dollar"></i> 50<br></br>
                <i class="fa fa-suitcase"></i> One-Day Gig <br></br>
                <i class="fa fa-map-marker"></i> 5022 Random Avenue <br></br>
                </div>
              </Card>
            </Row>
          </div>
          <div className={styles.Item}>
            <Row>
              <Card className={styles.Test}>
                <div className={styles.GigTitle}>Event Cook</div>
                <div className={styles.Employer}>Posted by Eric Brady</div>
                <div className={styles.GigContent}>
                <i class="fa fa-dollar"></i> 300<br></br>
                <i class="fa fa-suitcase"></i> One-Day Gig <br></br>
                <i class="fa fa-map-marker"></i> 2199 Angeles Avenue <br></br>
                </div>
              </Card>
            </Row>
          </div>
          <div className={styles.Item}>

          {/*Test Pagnitation that doesn't work.*/}
          <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item"><a class="page-link" href="#">Previous</a></li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item"><a class="page-link" href="#">Next</a></li>
          </ul>
        </nav></div>
          </div>
    );
  }
}

export default Gigs;
