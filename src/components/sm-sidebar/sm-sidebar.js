import React from 'react'
import styles from './sm-sidebar.module.css'

const SmSidebar = (props) => {

  let smSidebarClasses;

  if (props.showSmSidebar) {
    smSidebarClasses = `${styles['sm-container-sidebar']} ${styles['slip']}`
  } else {
    smSidebarClasses = `${styles['sm-container-sidebar']}`
  }

return (
 
  <div className={smSidebarClasses}> 
    <div className={styles['sm-sidebar']}>
      { props.children }
    </div>
  </div>
)
}

export default SmSidebar;
