import React, {useState, useContext} from 'react'
import { NotifyMeContext } from '@/pages/provider';
import PopUpWindow from '../popwindow/popwindow';


const NotifyMe = () => {
 const {displayNotifyMe, setDisplayNotifyMe} =  useContext(NotifyMeContext)
 const [email, setEmail] = useState('');

  if (!displayNotifyMe){
   return <></>
  }

  return (
     <PopUpWindow display={displayNotifyMe} closeFn={setDisplayNotifyMe}>
         <div className='mx-8'>
            <h2 className='text-xl font-medium text-center '>Get Update Notification</h2>
            <div className='flex flex-col gap-6 my-4 mx-5'>
              <div className='form_email md:w-full '>
                <div className='relative '>
                  <label htmlFor='email' className=' py-4  pointer-events-none'>Email *</label>
                    <input type='email'  required name='email' id='email' minLength='5' maxLength='65'  placeholder='Email Address'
                        pattern='\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$' title='Invalid Email format'
                        value={email} onChange={e => setEmail(e.target.value.replace(/\s+/g, '')) }
                        className='w-full py-2 px-1 rounded-sm border-collapse valid:border-2  valid:border-green-500 invalid:border-2  invalid:border-context_color
                        dark:bg-dark_text_header dark:text-dark_bg bg-light_accent_divider
                        focus:outline focus:outline-light_accent dark:focus:outline-dark_accent text-black ' />
                </div>
               </div>
              <button onClick={() => {}} className='md:text-lg  bg-default_blue
                      shadow-md  px-3 py-2  rounded-full drop-shadow-md
                      text-white self-end '>
                                  Notify Me
              </button>
            </div>
         </div>


     </PopUpWindow>
  )
}

export default NotifyMe
