import React, {Component} from 'react'
import styles from './main-page.module.css'
import CirclesAnimation from '../../components/CirclesAnimation/CirclesAnimation'

class MainPage extends Component {

  state = {
    
  }

  render () {
    return (
      <div className = { styles['main-page'] }>

      <CirclesAnimation />

      </div>
    )
  }
}

export default MainPage;