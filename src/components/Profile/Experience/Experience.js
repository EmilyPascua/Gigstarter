import React from 'react'
import styles from './Experience.css'
import Check from '../../../assets/check.svg'

const data = [
  {
    name: 'Introduction to Computer Security',
    location: 'UCLA',
    date: 'Jan 1, 2018 - March 3, 2018',
    link: 'https://www.google.com',
    prof: 'Michael B. Jordan',
    des:
      'Introduction to basic concepts of information security necessary for students to understand risks and mitigations associated with protection of systems and data. Topics include security models and architectures, security threats and risk analysis, access control and authentication/authorization, cryptography, network security, secure application design, and ethics and law.'
  },
  {
    name: 'Introduction to Computer Security',
    location: 'UCLA',
    date: 'Jan 1, 2018 - March 3, 2018',
    link: 'https://www.google.com',
    prof: 'Martin Tejeda',
    des:
      'Introduction to basic concepts of information security necessary for students to understand risks and mitigations associated with protection of systems and data. Topics include security models and architectures, security threats and risk analysis, access control and authentication/authorization, cryptography, network security, secure application design, and ethics and law.'
  }
]

const Experience = () => {
  return (
    <div className={styles.Card}>
      <div className={styles.Title}>Courses and Relavent Experience</div>
      <div className={styles.JobContainer}>
        {data.map(item => (
          <div className={styles.JobContainer2}>
            <div className={styles.Left}>
              <div className={styles.Name}>{item.name}</div>
              <div className={styles.Location}>{item.location}</div>
              <div className={styles.Date}>{item.date}</div>
            </div>
            <div className={styles.Des}>
              {item.des}
              <br />
              <br />
              <div className={styles.Letter}>
              <img src={Check} className={styles.Check} alt="pin" width="15px" /><a href={item.link} className={styles.Hyper}>Letter of Recommendation</a> from{' '}
                {item.prof}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience
