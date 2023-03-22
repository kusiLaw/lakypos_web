import Link from "next/link"
import styles from './button.module.css'

const LinkButton = ({url, 
 text, 
 color

}) => {
  return (
    <div className="link-wrapper">
       <Link href={`${url}`} >
          {text}
       </Link>


       <style jsx>{`
        .link-wrapper {
          margin: 50px;
        }
        p {
          color: blue;
        }
        `}</style>
    </div> 


  )
}

export default LinkButton


// const LinkButton = ({url, text}) => {
//  return (
//    // <div className={styles.link_btn}>
//      <Link href={`${url}`} >
//      <button className={styles.link_btn}>{text}
//      {/* <span></span> */}
//      </button>
//      </Link>
//    /* </div> */
//  )
// }

// export default LinkButton