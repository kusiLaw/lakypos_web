import React, { useState } from 'react'
import styles from './fag.module.css'
import { FaMinus, FaPlus } from 'react-icons/fa'


const Fag = ({question, children, num, open = false}) => {
  const [display, setDisplay] = useState(open)


  return (
    <div className='text-default_blue  py-2'>
       <div className='flex flex-col gap-4'>
          <div className='flex flex-wra justify-between items-center font-[500]
           text-default_blue shadow-md px-2 py-2'>
           <p className='flex items-center '>
               <span className='inline-block mr-2 font-bold italic text-[#ccddee] text-xl
               md:tracking-loose	'>{num}</span>
               <span className='inline-block  md:text-lg'>{question}</span>
           </p>
           <div className='flex justify-end text-end w-[10%]' onClick={()=>{setDisplay(!display)}}>
            {display ? <div className='text-context_color'><FaMinus /> </div> :
              <FaPlus />
            }

           </div>

          </div>

          { display && <div className='self-center indent-16 text-lg  px-2  py-4 mb-2'>{children}</div>}

       </div>
    </div>
  )
}

export default Fag
