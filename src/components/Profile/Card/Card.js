import React from 'react'
import styles from './Card.css'
import ProfileImg from '../../../assets/user.svg'
import Pin from '../../../assets/mappin.svg'
import Badge from 'react-bootstrap/lib/Badge'
import Star from '../../../assets/star.svg'

const Card = () => {
  return (
    <div className={styles.Card}>
      <div className={styles.Left}>
        <div className={styles.UserInfo}>
          <div className={styles.ProfHead}>
            <img className={styles.UserImg} src={ProfileImg} alt="prof" />
            <div className={styles.NameText}>Calvin Huang</div>
            <div className={styles.RoleText}>Web Developer</div>
            <div className={styles.CityText}>
              <img src={Pin} className={styles.Pin} alt="pin" width="13px" />
              Los Angeles
            </div>
          </div>
          <div className={styles.StarCount}>43 <img src={Star} className={styles.Star} alt="pin" width="15px" /></div>
        </div>
      </div>
      <div className={styles.Right}>
        <p className={styles.UserDes}>Driven guidance counselor with 10+ years’ experience teaching and
        advising high school students. Fluent in Spanish; skilled at
        communicating and developing relationships with ESL students and their
        families. Developing knowledge of American Sign Language. Excellent
        written and oral communication skills.
        </p>
        <div className={styles.PillContainer}>
        <h3>Featured Skills: </h3>
          <Badge pill variant="primary" className={styles.Pill}>Python</Badge>
          <Badge pill variant="primary" className={styles.Pill}>Javascript</Badge>
          <Badge pill variant="primary" className={styles.Pill}>HTML</Badge>
          <Badge pill variant="primary" className={styles.Pill}>HTML</Badge>
          <Badge pill variant="primary" className={styles.Pill}>HTML</Badge>
          <Badge pill variant="primary" className={styles.Pill}>HTML</Badge>
          <Badge pill variant="primary" className={styles.Pill}>HTML</Badge>
          <Badge pill variant="primary" className={styles.Pill}>HTML</Badge>
          <Badge pill variant="primary" className={styles.Pill}>HTML</Badge>
          <Badge pill variant="primary" className={styles.Pill}>HTML</Badge>
          </div>
      </div>
    </div>
  )
}

export default Card
