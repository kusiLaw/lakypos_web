import Link from "next/link"
// import styles from './link-wrapper.module.css'

const LinkButton = ({url, 
 text, 
 color,
 font_size,
 padding,
 border
}) => {
  return (
   <Link href={`${url}`} >
    <div className="link-button">
         {text}
    </div> 
    <style jsx>{`

      .link-button{
        {/* display: flex; */}
        color: ${ color ? `${color}` : '#dd2c00'};
        {/* justify-content: center; */}
        background-color : inherit;
        padding: ${ padding ? `${padding} `: '12px 30px'};
        font-size : 1.2rem;
        border-radius: 99px;
        border: ${ border ? `${border}px solid ${color}`: '2px solid #dd2c00'} ;
       }

       .link-button:hover{
        color: white;
        background-color: ${ color ? `${color}` : '#dd2c00'};
}
       }


 `}</style>

    </Link>

  )
}

export default LinkButton
