import React, {useState, useContext} from 'react'
import InputText from '../input/input'
import { FaTimes } from 'react-icons/fa';
import { NotifyMeContext } from '@/pages/provider';


const NotifyMe = () => {
 const [email, setEmail] = useState('');
 const {displayNotifyMe, setDisplayNotifyMe} =  useContext(NotifyMeContext)

  if (!displayNotifyMe){
   return <></>
  }

  return (
     <div className='fixed flex gap-5 justify-center items-center w-full top-0 right-0 left-0 bottom-0 bg-black/50 z-50   '>
      
      <div className='bg-context_color h-fit py-2 px-2 md:py-5 md:px-5 text-white drop-shadow-2xl '>
         <div className='flex justify-end  text-2xl text-white font-light mb-5 '
         onClick={()=> setDisplayNotifyMe(false)}
         >
         <FaTimes/>
         </div>
         <h2 className='text-2xl font-medium text-center '>Get Update Notification</h2>
         <div className='form_email md:w-full '>
            <div className='relative '>
                       <label htmlFor='email' className=' py-4  pointer-events-none'>Email *</label>
                       <input type='email'  required name='email' id='email' minLength='5' maxLength='65'  placeholder='Email Address'
                          pattern='\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$' title='Invalid Email format'
                              value={email} onChange={e => setEmail(e.target.value.replace(/\s+/g, '')) }
                       className='w-full py-2 px-1 rounded-sm text-inherit border-collapse valid:border-2  valid:border-green-500 invalid:border-2  invalid:border-context_color
                        dark:bg-dark_text_header dark:text-dark_bg bg-light_accent_divider 
                        focus:outline focus:outline-light_accent dark:focus:outline-dark_accent text-black' />
              </div>
          </div>
         </div>
    </div>
    
  )
}

export default NotifyMe
