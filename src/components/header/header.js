import Link from "next/link";
import { useState ,useContext } from "react";
import LinkButton from "../link_button/button";
import { Turn as Hamburger } from 'hamburger-react'
import MobileList from "./mobile";
import Logo from "../logo/logo";
import { NotifyMeContext } from "@/pages/provider";


export default function Header () {
   const [isOpen , setOpen] = useState(false)
   const {setDisplayNotifyMe} =  useContext(NotifyMeContext)


  return (
    <header className='fixed top-0 right-0 left-0 flex justify-center bg-white w-full h-fit z-30'>
        <div className='w-full h-fit bg-transparent max-w-[2560px] shadow-lg '>
          <div className='flex justify-between items-center w-full py-2 px-2 md:px-8 md:my-3 '>
            <Logo />
             <nav className='w-[50%] flex justify-end md:justify-end items-center'>
                <div className='flex md:hidden  '>
                    <MobileList open = {isOpen} />
                    <div className={``}>
                      <Hamburger size={25}
                        onToggle={toggled => {
                          if (toggled) {
                           setOpen(true)
                          } else {
                           setOpen(false)
                          }

                        }}
                      />
                    </div>
                </div>

                <div className='hidden md:flex'>
                  <div className="flex items-center gap-6">
                      <Link href={'https://github.com/kusiLaw/laky-phone-POS'} target="_blank" className='md:text-lg 
                         bg-white  text-context_color shadow-sm  px-3 py-1 rounded-full border-context_color
                          hover:bg-[#fc5c2c] hover:text-white border'>
                               Source Code
                      </Link>
                      {/* <Link href={''}>Join Us</Link> */}

                    <ul className='flex text-lg font-medium gap-6 cursor-pointer '>
                        <li className="hover:text-context_color"><Link href={'#'}>Home</Link></li>
                        <li className="hover:text-context_color"><Link href={'#about'}>About</Link></li>
                        <li className="hover:text-context_color"><Link href={'#fag'}>FAQ</Link></li>
                    </ul>
                  </div>
               
                  
                </div>
             </nav>
             
            </div>
       </div>

    </header>
  )
}
