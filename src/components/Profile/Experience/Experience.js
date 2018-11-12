import React from 'react'
import styles from './Experience.css'
import ProfileImg from '../../../assets/user.svg'
import Pin from '../../../assets/mappin.svg'
import Badge from 'react-bootstrap/lib/Badge'

const data = [
  {
    name: 'Introduction to Computer Security',
    location: 'UCLA',
    date: 'Jan 1, 2018 - March 3, 2018',
    des:
      'Introduction to basic concepts of information security necessary for students to understand risks and mitigations associated with protection of systems and data. Topics include security models and architectures, security threats and risk analysis, access control and authentication/authorization, cryptography, network security, secure application design, and ethics and law.'
  },
  {
    name: 'Introduction to Computer Security',
    location: 'UCLA',
    date: 'Jan 1, 2018 - March 3, 2018',
    des:
      'Introduction to basic concepts of information security necessary for students to understand risks and mitigations associated with protection of systems and data. Topics include security models and architectures, security threats and risk analysis, access control and authentication/authorization, cryptography, network security, secure application design, and ethics and law.'
  }
]

const Experience = () => {
  return (
    <div className={styles.Card}>
      <div className={styles.Title}>Courses and Relavent Experience</div>
      <div className={styles.JobContainer}>
      { data.map( (item) =>
        <div>
        <div className={styles.Left}>
          <div className={styles.Name}>{item.name}</div>
          <div className={styles.Location}>{item.location}</div>
          <div className={styles.Date}>{item.date}</div>
        </div>
        <div className={styles.Des}>{item.des}</div>
        </div>)
      }
      </div>
    </div>
  )
}

export default Experience
