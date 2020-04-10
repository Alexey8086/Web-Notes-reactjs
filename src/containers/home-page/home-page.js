import React, {Component} from 'react'
import styles from './home-page.module.css'
// import CirclesAnimation from '../../components/CirclesAnimation/CirclesAnimation'
import SmSidebar from '../../components/sm-sidebar/sm-sidebar'
import Sidebar from '../../components/sidebar/sidebar'
import ItemNote from '../../components/item-note/item-note'

class HomePage extends Component {

  state = {
    itemText: [
      'On the other hand, we denounce ',
      'with righteous indignation and dislike men',
      'fail in their duty through weakness',
      'belongs to those who fail in their duty',
      'But in certain circumstances and owing to the claims',
      'On the other hand, we denounce ',
      'with righteous indignation and dislike men',
      'fail in their duty through weakness',
      'belongs to those who fail in their duty',
      'But in certain circumstances and owing to the claims',
      'On the other hand, we denounce ',
      'with righteous indignation and dislike men',
      'fail in their duty through weakness',
      'belongs to those who fail in their duty',
      'But in certain circumstances and owing to the claims',
      'On the other hand, we denounce ',
      'with righteous indignation and dislike men',
      'fail in their duty through weakness',
      'belongs to those who fail in their duty',
      'But in certain circumstances and owing to the claims',
      'On the other hand, we denounce ',
      'with righteous indignation and dislike men',
      'fail in their duty through weakness',
      'belongs to those who fail in their duty',
      'But in certain circumstances and owing to the claims',
      'On the other hand, we denounce ',
      'with righteous indignation and dislike men',
      'fail in their duty through weakness',
      'belongs to those who fail in their duty',
      'But in certain circumstances and owing to the claims',
      'On the other hand, we denounce ',
      'with righteous indignation and dislike men',
      'fail in their duty through weakness',
      'belongs to those who fail in their duty',
      'But in certain circumstances and owing to the claims',
      'On the other hand, we denounce ',
      'with righteous indignation and dislike men',
      'fail in their duty through weakness',
      'belongs to those who fail in their duty',
      'But in certain circumstances and owing to the claims',
      'On the other hand, we denounce ',
      'with righteous indignation and dislike men',
      'fail in their duty through weakness',
      'belongs to those who fail in their duty',
      'But in certain circumstances and owing to the claims',
      'On the other hand, we denounce ',
      'with righteous indignation and dislike men',
      'fail in their duty through weakness',
      'belongs to those who fail in their duty',
      'But in certain circumstances and owing to the claims',
      'On the other hand, we denounce ',
      'with righteous indignation and dislike men',
      'fail in their duty through weakness',
      'belongs to those who fail in their duty',
      'But in certain circumstances and owing to the claims',
      'On the other hand, we denounce ',
      'with righteous indignation and dislike men',
      'fail in their duty through weakness',
      'belongs to those who fail in their duty',
      'But in certain circumstances and owing to the claims',
    ],
    showSmSidebar: false
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
    
  }

  render () {
    
    const noteItems = this.state.itemText.map((item, index) => {
      return (
        <ItemNote
          key={index}
          text={item}
        />
      )
    })

    return (
      <div className = { styles['home-page'] }>
        
        <SmSidebar showSmSidebar={this.state.showSmSidebar} >
          <button className={styles['menu-icon']} onClick={ () => this.setState( {showSmSidebar: !this.state.showSmSidebar} ) } >
          </button>
          <p>1 Create new note</p>
          <p>2 Search for note</p>
          <p>3 Switch background</p>
          <p>4 Donations </p>
        </SmSidebar>
        

        <div className = { styles['main-grid-container'] }>
          <Sidebar />

          <div className = { styles['blocks-grid-container'] }>
            { noteItems }
          </div>
        </div>

      </div>
    )
  }
}

export default HomePage;