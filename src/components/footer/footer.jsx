import { useState } from 'react'
import Logo from '../logo/logo'
import SocialIcons from '../social/social_icons'
import FooterList from './footer_list'



const Footer = () => {
  const [email, setEmail] = useState('');
  return (
    <footer className='bg-default_blue pt-12 md:pt-16 pb-4 px-4 md:px-20 mt-12 text-white w-full'>
       <div className='flex flex-col md:flex-row justify-between  w-full '>
          <Logo fontSize={`text-md md:text-lg`} />
          <div className='flex flex-c justify-end flex-wrap gap-[10%] md:gap-20 '>
              <FooterList header='support'
               list={[ ['Pricing' , '/support'],
                ['patron' , '/patrons'],
                ['Guide', '/guide']

                ] }  />

              <FooterList header='company' list={[
                ['Mission' , '/#'],
                ['About' , '/about'],
                ['Vision' , '/vision'],
                ['Docs', '/doc'],
                ['versions', '/version']
                ]}   />

                <FooterList header='legal' list={[
                ['Privacy' , '/privacy'],
                ['Claims' , '/claims'],
                ['Terms', '/terms']
                ]}   />
          </div>
       </div>
       <div className='flex flex-col md:flex-row md:justify-between gap-4  py-4 md:py-6 border-y-[0.1px] mt-6'>
            <div className='w-full'>
               <h3 className='font-semibold'>Subscribe for Updates</h3>
               <p className='font-light'>The latest news, version, and resources, sent to your inbox mnothly.</p>
            </div>
            <div className='flex items-center justify-end gap-4 w-full flex-wrap   '>
                <input type='email'  required name='email' id='email' minLength='5' maxLength='65'  placeholder='Email Address'
                            pattern='\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$' title='Invalid Email format'
                                value={email} onChange={e => setEmail(e.target.value.replace(/\s+/g, '')) }
                        className='w- py-1 px-1 rounded-sm  border-collapse valid:border-2  valid:border-green-500 invalid:border-2 text-default_blue
                            bg-light_accent_divider  ' />
                <button onClick={() => {}} className='  bg-default_blue
                              px-3 py-1  rounded-full drop-shadow-md
                            text-white border'>
                                        Subscribe
                    </button>
            </div>
       </div>
       <div className=' flex flex-col-reverse gap-6
            md:flex-row md:justify-between
            mt-8 font-thin md:font-light text-sm text-[#a9a9a9] '>
        <p className='flex flex-wrap'> © 2020 LakyPos, Inc. All rights reserved.</p>
        <div className='flex text-lg lg:text-xl gap-4 font-thin justify-end ' >
          <SocialIcons />
        </div>
       </div>
    </footer>
  )
}

export default Footer
