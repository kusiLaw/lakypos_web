import Link from "next/link";
import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub";
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail";
import { AiFillLinkedin } from "@react-icons/all-files/ai/AiFillLinkedin";


import style from  './header.module.css'

export default function Header () {
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
                   <Link href="https://www.linkedin.com/in/lawrence-addai-kusi/" legacyBehavior className={style.social_links_item}> 
                      <AiFillLinkedin />
                   </Link>
                 </div>

                 <div className={`${style.social_links_item}`}>
                   <Link href="mailto:lawrence.kusi.addai@gmail.com" legacyBehavior className={style.social_links_item}> 
                      <AiOutlineMail />
                   </Link>
                </div>
             </div>
          </div>
        </div>

        <div className={style.header_2_wrapper}>
          <div className={style.header_2_inner_wrapper}>
             <h1><span className={style.laky}>Laky</span>POS.</h1>
             <nav>
                <div className="mobile">
                 </div>

                 <div className="desktop">
              </div>
             </nav>
          </div>
       </div>
    </header>
  )
}

