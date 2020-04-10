import React from 'react'
import styles from './CircleAnimation.module.css'

const CirclesAnimation = (props) => {

const FIRST_CIRCLE_ARR = ['W','E','L','C','O','M','E','T','O','W','E','B','N','O','T','E','S','!']
const SECOND_CIRCLE_ARR = ['P','L','A','C','E','F','O','R','M','Y','C','R','E','A','T','I','O','N']
const THIRD_CIRCLE_ARR = ['W','E','L','C','O','M','E','T','O','W','E','B','N','O','T','E','S','!']

const FIRST_CIRCLE_SPAN_ARR = FIRST_CIRCLE_ARR.map((element, index) => {
  return (
    <span key={index} className={styles['animate-span-first-circle']}>{element}</span>
  )
})

const SECOND_CIRCLE_SPAN_ARR =  SECOND_CIRCLE_ARR.map((element, index) => { 
  return (
    <span key={index} className={styles['animate-span-second-circle']}>{element}</span>
  )
})

const THIRD_CIRCLE_SPAN_ARR = THIRD_CIRCLE_ARR.map((element, index) => {
  return (
    <span key={index} className={styles['animate-span-third-circle']}>{element}</span>
  )
})

return (
  <>
    <div className={styles['First_layout']}>
      <h1 className={styles['First_HContainer']}>
      { FIRST_CIRCLE_SPAN_ARR }
      </h1>
    </div>

    <div className={styles['Second_layout']}>
      <h1 className={styles['Second_HContainer']}>
      { SECOND_CIRCLE_SPAN_ARR }
      </h1>
    </div>

    <div className={styles['Third_layout']}>
      <h1 className={styles['Third_HContainer']}>
      { THIRD_CIRCLE_SPAN_ARR }
      </h1>
    </div>
  </>
)
}

export default CirclesAnimation;
