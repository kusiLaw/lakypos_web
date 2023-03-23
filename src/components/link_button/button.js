import Link from "next/link"
// import styles from './link-wrapper.module.css'

const LinkButton = ({url, 
 text, 
 color,
 width,
 height,
 hover_color,
 hover_text,
 margin,
 padding
}) => {
  return (
   <Link href={`${url}`} >
    <div className="link-button">
         {text}
       <style jsx>{`

       .link-button{
         display: flex;

         justify-content: center;
         background-color : inherit;
         height: 3rem;
         padding: 1rem 1.5rem;
         
         border: 2px solid #004de4;
        }

        `}</style>

    </div> 
    </Link>

  )
}

export default LinkButton
