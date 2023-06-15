import Link from "next/link";
import { useState } from "react";
import LinkButton from "../link_button/button";
import { Turn as Hamburger } from 'hamburger-react'
import MobileList from "./mobile";
import Logo from "../logo/logo";

export default function Header () {
   const [isOpen , setOpen] = useState(false)

  return (
    <header className='fixed top-0 right-0 left-0  bg-white w-full h-fit drop-shadow-lg z-30'>
        <div className='w-full h-fit bg-transparent  '>
          <div className='flex justify-between items-center w-full py-2 px-2 md:px-8 '>
            <Logo />
             <nav className='w-[50%]  flex justify-end md:justify-center items-center'>
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

                <div className='hidden md:block'>
                   
                   <ul className='flex text-2xl font-medium gap-6 cursor-pointer'>
                      <li>Home</li>
                      <li>About</li>
                      <li>FAQ</li>
                  </ul>
                </div>
             </nav>
             <div className='hidden md:flex'>
               <LinkButton text='Feedback' url='#' bg={''} />
              
             </div> 
             
          </div>
       </div>

    </header>
  )
}

