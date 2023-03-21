import Link from "next/link";
import { useState } from "react";
import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub";
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail";
import { AiFillLinkedin } from "@react-icons/all-files/ai/AiFillLinkedin";
import LinkButton from "../link_button/button";
import style from  './header.module.css'
import {clsx} from 'clsx'
import { Turn as Hamburger } from 'hamburger-react'

export default function Header () {
   const [isOpen , setOpen] = useState(true)

  const nav_list = (type, id ='nav_mob')=>{
   return (
    <>
      <ul id = {id} className={clsx({
        [style.desk_nav_list]: type === 'desk_nav_list',
        [style.mobile_nav_list]: type === 'mobile_nav_list',
      })}>
        <li>Home</li>
        <li>About</li>
        <li>FAQ</li>
      </ul>
    </>
   )
  }

  const mobile_nav = () =>{
   console.log( document.getElementById('nav_mob'))
    document.getElementById('nav_mob').classList.toggle('hide')
    setOpen(!isOpen)
  }

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
                    <div className={`${style.mobile_nav_wrapper} hide`}>
                      {nav_list('mobile_nav_list')}
                    </div>


                    <div className={style.toggle_btn}>
                      <Hamburger size={25} 
                        onToggle={toggled => {
                          // if (toggled) {
                          //  setOpen(true)
                          // } else {
                          //  setOpen(false)

                          // }
                          mobile_nav()
                        }}
                      />
                    </div>

    
                </div>

                <div className={style.nav_desktop}>
                   {nav_list('desk_nav_list')}
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

