import React from 'react';
import styles from './Sections.css';
import Container from 'react-bootstrap/lib/Container';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import Form from 'react-bootstrap/lib/Form';

const Sections = () => {
  return (
    <div>
      <Container className={styles.Sec1}>
        <Row>
          <Col>The Best Career Building Platform</Col>
          <Col>
            GigStarter is aimed to provide professional experiences within the
            field these students are studying. Our team has an extensive
            customer-interview record and 87% have claimed they feel unprepared
            for the workforce due to their lack of experience outside of the
            classroom.
          </Col>
        </Row>
        <Row>
          <Col>
            Step 1 Scroll through hundreds of gig opportunities offered on
            Gigstarter
          </Col>
          <Col>
            Step 2 If you show interest in a gig, contact the employer to
            discover the details of the job
          </Col>
          <Col>
            Step 3 Get paid for the work you have done! Aside from the extra
            money, you have now expanded your resume in a positive &
            professional direction
          </Col>
        </Row>
      </Container>
      <Container className={styles.Sec2}>
        <Row>
          <Col>
            <h1>The Big Picture</h1>
            <p>
              Providing students with practical experience would not be possible
              without the large scope of work provided by business owners across
              Los Angeles. Every transaction on Gigstarter does all of 3 things
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            Step 1 Scroll through hundreds of gig opportunities offered on
            Gigstarter
          </Col>
          <Col>
            Step 2 If you show interest in a gig, contact the employer to
            discover the details of the job
          </Col>
          <Col>
            Step 3 Get paid for the work you have done! Aside from the extra
            money, you have now expanded your resume in a positive &
            professional direction
          </Col>
        </Row>
      </Container>
      <Container className={styles.Sec3}>
        <Row>
          <Col>
            <h1>Be Part of the Gig Economy</h1>
            <ListGroup variant="flush">
              <ListGroup.Item>Work at your own pace</ListGroup.Item>
              <ListGroup.Item>Gain real-world experience</ListGroup.Item>
              <ListGroup.Item>Make primary/secondary income</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col>
            <img src="https://via.placeholder.com/720x480" alt="placeholder" />
          </Col>
        </Row>
      </Container>
      <Container className={styles.Sec4}>
        <Row>
          <Col>
            <h1>Testimonials</h1>
            <p>
              Gigstarter has helped over 150 students get gigs within their
              field of study! Here are some of their experiences
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <img src="https://via.placeholder.com/300x300" alt="placeholder" />
          </Col>
          <Col>
            <img src="https://via.placeholder.com/300x300" alt="placeholder" />
          </Col>
          <Col>
            <img src="https://via.placeholder.com/300x300" alt="placeholder" />
          </Col>
        </Row>
      </Container>
      <Container className={styles.Sec5}>
        <Row>
          <Col>
            <h1>Reach Us</h1>
            <p>
              Call us or email to find out more information about Gigstarter
            </p>
            <p>5151 State University Dr, Los Angeles, CA 90032</p>
            <p>1.800.555.555</p>
            <p>contact@email.com</p>
          </Col>
          <Col>
            <h1>Leave A Message</h1>
            <Form>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Name" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput2">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows="3" />
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Sections;
