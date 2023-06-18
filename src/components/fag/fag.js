import React, { useState } from 'react'
import styles from './fag.module.css'

const Fag = ({question, children, num}) => {
  const [display, setDisplay] = useState(true)

  const handleDisplay = () => {
     setDisplay(!display)
  }

  return (
    <div className='text-default_blue border-b-2 py-8'>
       <div className='flex flex-col gap-4'>
          <div className='flex flex-wrap font-[500] text-default_blue'>
           <p className='flex items-center'>
           <span className={styles.fag_number}>{num}</span>
           <span className='inline-block text-xl  md:2xl'>{question}</span>
           </p>
          </div>
          
          { display && <div className='self-center indent-16 text-xl  md:2xl'>{children}</div>} 
        
       </div>
    </div>
  )
}

export default Fag