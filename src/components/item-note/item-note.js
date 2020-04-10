import React from 'react'
import styles from './item-note.module.css'

const ItemNote = (props) => {

return (
  <div className={styles['item-note']}>
    {props.text}
  </div>
)
}

export default ItemNote;
