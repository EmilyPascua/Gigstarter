import React, { Component } from 'react';
import styles from './AboutUs.css';
import Navbar from "../../components/Navbar/Navbar";
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import Alex from '../../assets/teamPictures/alex.jpg';
import Marco from '../../assets/teamPictures/marco.png';
import Martin from '../../assets/teamPictures/martin.png';
import Oscar from '../../assets/teamPictures/oscar.png';

import Team from '../../assets/team.jpg'


class About extends Component {
  render() {
    return (
      <div className={styles.About}>
        <Navbar />
        <div className={styles.Header}>
        <Row >
          <Col>
            <h1>Our Mission is to<br></br>Jumpstart Student Careers</h1>
          </Col>
        </Row>
        </div>

        <div className={styles.Container}>
        <Row>
          <Col>
            Gigstarter provides an opportunity for students to gain the practical experience<br></br> needed to excel in their field. Our one-of-a-kind search engine allows students <br></br>to filter through hundreds of gig opportunities to find the perfect ones for you.          </Col>
        </Row>
        </div>
        <br></br>
        <h1>Get Your Gigstarted</h1>

         <div className={styles.Container}>
          <Row className="show-grid">
            <Col><h1><i class="fa fa-book"></i></h1>
            <h3>Step 1</h3>
            Scroll through hundreds of gig postings offered on Gigstarter</Col>
            <Col><h1><i class="fa fa-envelope"></i></h1>
            <h3>Step 2</h3>
            If you show interest in a gig, contact the employer to discover the details of the job.</Col>
            <Col><h1><i class="fa fa-dollar"></i></h1>
            <h3>Step 3</h3>
            Get paid for the work you have done! Aside from the extra money, you have now expanded your resume in a positive and professional direction.</Col>
          </Row>
        </div>
        <div className={styles.Container}>
         <Row><Col><h1>Creative Team</h1>
        We are a group of dedicated, passionate, and driven individuals working<br></br>towards the common goal of providing professional work experience for students
         </Col></Row>
         </div>
        <div className={styles.Container}>
          <Row>
            <Col><img src={Martin} alt="martinPotrait" width="200px" />
            <h3>Martin Tejeda</h3>
            </Col>
            <Col><img src={Marco} alt="marcoPotrait" width="200px" />
            <h3>Marco Garza</h3>
            </Col>
            <Col><img src={Alex} alt="alexPotrait" width="200px" />
            <h3>Alex Lam</h3>
            </Col>
            <Col><img src={Oscar} alt="oscarPotrait" width="200px" />
            <h3>Oscar Aguayo</h3>
            </Col>
          </Row>
        </div>
        <br/>
        <h1>Engineering Team</h1>
        <p>From developing new features to designing the layouts, the engineering team is always working hard to provide you with the best experience.</p>
        <Row><Col><img src={Team} alt="team" width="50%"/></Col></Row>
        <p>From left to right: Emily, Alex, Lisa, Oscar, Calvin, Martin, Marco</p>
      </div>
    );
  }
}

export default About;