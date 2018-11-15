import React from 'react'
import styles from './Feedback.css'
import ProfileImg from '../../../assets/user.svg'
import Pin from '../../../assets/mappin.svg'
import Badge from 'react-bootstrap/lib/Badge'

const Feedback = () => {
  return (
    <div className={styles.Card}>
      <div className={styles.Title}>Feedback</div>
      <div className={styles.JobContainer}>
        <div className={styles.Left}>
          <div className={styles.CompanyContainer}>
            <div>
              <img
                className={styles.CompanyImg}
                src={ProfileImg}
                alt="prof pic"
              />
            </div>
            <div className={styles.CompanyInfo}>
              <div className={styles.CompName}>Dragon Industries</div>
              <div className={styles.CompLoc}>Los Angeles</div>
            </div>
          </div>
        </div>
        <div className={styles.Comment}>
          "Calvin was great. He exceeded in the roles given to him."
          <div className={styles.Subtitle}>
            - for being a <span className={styles.SubtitleTime}>Web Developer</span>{' '} for {' '}
            <span className={styles.SubtitleTime}>2 weeks</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feedback
