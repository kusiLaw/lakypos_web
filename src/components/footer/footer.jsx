import styles from './footer.module.css'
import Link from 'next/link'
import{MdEmail} from 'react-icons/md'
import{FaGithub, FaLinkedin} from 'react-icons/fa'



const Footer = () => {
  return (
    <footer className={styles.footer}>
       <div className={styles.footer_wrapper}>
          <div className={styles.footer_top}>
            Thank you for choosing  
             <Link href='/'><h1><span className={styles.laky}> Laky</span>POS.</h1></Link> 
          </div>
          <div className={styles.footer_down}>
             <Link href={''} className={styles.icons}>
                <FaGithub  />
             </Link>
             <Link href={''} className={styles.icons}>
                <FaLinkedin  />
             </Link>
             <Link href={''} className={styles.icons}>
                <MdEmail  />
             </Link>
            
             
          </div>
       </div>
    </footer>
  )
}

export default Footer