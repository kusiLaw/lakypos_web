import React, { useState } from 'react'
import styles from './fag.module.css'

const Fag = ({question, children, num}) => {
  const [display, setDisplay] = useState(true)

  const handleDisplay = () => {
     setDisplay(!display)
  }

  return (
    <div className={styles.fag}>
       <div className={styles.fag_wrapper}>
          <div className={styles.fag_question}>
           <p className={styles.question}>
           <span className={styles.fag_number}>{num}</span>
           <span className={styles.fag_question_text}>{question}</span>
           </p>
           {/* { display ? <span>y</span> : <span>n</span> } */}
          </div>
          
          { display && <div className={styles.ans_wrapper}>{children}</div>} 
        
       </div>
    </div>
  )
}

export default Fag