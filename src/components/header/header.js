import Link from "next/link";
import { useState } from "react";
import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub";
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail";
import { AiFillLinkedin } from "@react-icons/all-files/ai/AiFillLinkedin";
import LinkButton from "../link_button/button";
import style from  './header.module.css'
import {clsx} from 'clsx'
import { Turn as Hamburger } from 'hamburger-react'
import MobileList from "./mobile";


export default function Header () {
   const [isOpen , setOpen] = useState(false)

  return (
    <header className={style.header}>

        <div className={style.header_1_wrapper}>
          <div className={style.header_1_wrapper_inner}>
             <div className={style.description}>
                {/* <p>Your free POS software</p> */}
             </div>
             <div className={style.social_links}>
                 <div className={`${style.social_links_item}`}>
                   <Link href="https://github.com/kusiLaw/laky-phone-POS" legacyBehavior > 
                    <AiFillGithub />
                   </Link>
                 </div>
               
                 <div className={`${style.social_links_item}`}>
                   <Link href="https://www.linkedin.com/in/lawrence-addai-kusi/" legacyBehavior > 
                      <AiFillLinkedin />
                   </Link>
                 </div>

                 <div className={`${style.social_links_item}`}>
                   <Link href="mailto:lawrence.kusi.addai@gmail.com" legacyBehavior > 
                      <AiOutlineMail />
                   </Link>
                </div>
             </div>
          </div>
        </div>

        <div className={style.header_2_wrapper}>
          <div className={style.header_2_inner_wrapper}>
             <Link href='/'><h1><span className={style.laky}>Laky</span>POS.</h1></Link> 
             <nav className={style.nav}>
                <div className={style.nav_mobile}>
                    <MobileList open = {isOpen} />
                    <div className={style.toggle_btn}>
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

                <div className={style.nav_desktop}>
                   {/* {nav_list('desk_nav_list')} */}
                   <ul className={style.desk_nav_list}>
                      <li>Home</li>
                      <li>About</li>
                      <li>FAQ</li>
                  </ul>
                </div>
             </nav>
             <div className={style.nav_link_btn}>
               <LinkButton text='Feedback' url='#'/>
              
             </div>
             
          </div>
       </div>

    </header>
  )
}

