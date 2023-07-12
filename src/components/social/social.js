import {useState} from 'react'
import { FaFacebookMessenger, FaWhatsapp } from 'react-icons/fa'
import { HiOutlineChat} from 'react-icons/hi'

import { RiWhatsappFill} from 'react-icons/ri'


const Social = () => {
  const [displayChat, setDisplayChat] = useState(false)
  return (
   <div className='fixed bottom-4  right-3 md:bottom-10 md:right-10 z-20 w-fit h-fit'>
      <div className='relative flex flex-col items-center gap-4'>
          {displayChat && 
          <>
            <div className=' font-black text-[3.4rem] text-[#128C7E] drop-shadow-md'>
                <img className='w-[35px] md:w-[50px]'
                  src={'/facebook.jpg'} 
                  alt="Your Name" 
                  />
            </div>
            <div className=' font-black text-[3.4rem] text-[#128C7E] drop-shadow-md '>
                <img className='w-[35px] md:w-[50px]'
                  src={'/whatsap.svg'} 
                  alt="Your Name" 
                  />

            </div>
          </>
          }
         <div onClick={()=>setDisplayChat(!displayChat)} className='bg-gray-30 hover:bg-default_blu   shadow-2x  
         rounded-full px-2 py-2 md:px-4 md:py-4  rounded-ful text-white font-black text-[2.5rem] md:text-[5rem]'>
              {/* <HiOutlineChat/> */}
              <img className='w-[45px] md:w-[65px] text-context_color'
                  src={'/chat.svg'} 
                  alt="Your Name" 
                  />
         </div>
         
      </div>
     
      
   </div>
  
  )
}

export default Social
