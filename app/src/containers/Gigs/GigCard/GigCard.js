import React, { Component } from 'react'
import styles from './GigCard.css'
import Card from 'react-bootstrap/lib/Card'

class GigCard extends Component {
  render() {
    return (
      <div className={styles.GigCard}>
        <Card className={styles.Item}>
          <div className={styles.GigTitleSm}>{this.props.data.jobTitle}</div>
          <div className={styles.Employer}>{this.props.data.jobCompany}</div>
          <div className={styles.GigContent}>
            <span>
              <i className="fa fa-dollar" /> {this.props.data.jobPay} &nbsp;&nbsp;
              <i className="fa fa-suitcase" /> {this.props.data.jobPayType} &nbsp;&nbsp;
              <i className="fa fa-map-marker" /> {this.props.data.jobAddr1}
            </span>
          </div>
        </Card>
      </div>
    )
  }
}

export default GigCard;
