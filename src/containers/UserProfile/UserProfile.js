import React, { Component } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import background from '../../assets/userback.png'
import styles from './UserProfile.css'
import CardOne from '../../components/Profile/Card/Card'
import CardTwo from '../../components/Profile/Experience/Experience'
import CardThree from '../../components/Profile/Feedback/Feedback'

class Profile extends Component {
  state = {
    
  }

  componentDidMount = () => {

  }

  render() {
    
    return (
      <div className={styles.Container}>
        <Navbar/>
        <div className={styles.CardContainer}>
          <CardOne/>
          <CardTwo/>
          <CardThree/>
        </div>
      </div>
    )
  }
}

export default Profile
