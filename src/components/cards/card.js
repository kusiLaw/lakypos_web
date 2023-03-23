import React from 'react'
import styles from './card.module.css'

const Card = ({text, icon, title}) => {
  return (
   <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.image}>{icon}</div>
        <div className={styles.content}>
           <span className={styles.title}>{title}</span>
           <p className={styles.message}>{text}</p>
        </div>
      </div>
</div>

  )
}

export default Card