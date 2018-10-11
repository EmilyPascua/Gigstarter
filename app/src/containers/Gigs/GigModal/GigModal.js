import React, { Component } from 'react';
import styles from './GigModal.css'
import Modal from 'react-bootstrap/lib/Modal'
import Button from 'react-bootstrap/lib/Button'

class GigModal extends Component {
  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton >
          <Modal.Title id="contained-modal-title-vcenter">
            {this.props.job.jobTitle}
            <div className={styles.subTitle}>Posted by {this.props.job.jobCompany}</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{this.props.job.jobDes}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Apply</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default GigModal