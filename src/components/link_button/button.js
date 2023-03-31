import Link from "next/link"
// import styles from './link-wrapper.module.css'

const LinkButton = ({url, 
 text, 
 color,
 hover_color,
 hover_text,
 margin,
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
        display: flex;
        color: ${ color ? `${color}` : '#004de4'};
        justify-content: center;
        background-color : inherit;
        padding: ${ padding ? `${padding[0]}px ${padding[1]}px `: '12px 25px'};
        font-size : 1rem;
        border-radius: 5px;
        border: ${ border ? `${border}px solid #004de4`: '2px solid #004de4'} ;
       }

 `}</style>

    </Link>

  )
}

export default LinkButton
