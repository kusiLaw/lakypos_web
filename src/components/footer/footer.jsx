import styles from './footer.module.css'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className={styles.footer}>
       <div className={styles.footer_wrapper}>
          <div className={styles.footer_right}>
             <Link href='/'><h1><span className={styles.laky}>Laky</span>POS.</h1></Link> 
          </div>
          <div className={styles.footer_right}>
          </div>
       </div>
    </footer>
  )
}

export default Footer