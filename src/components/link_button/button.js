import Link from "next/link"
import styles from './button.module.css'

const LinkButton = (props) => {
 const {url, text, color, bg, px, py, border, hover, font, round} = props
  return (
   <Link href={`${url}`} >
    <div className={` 
     ${ color ? `${color}` : 'text-[#ff6e40]'} ${ bg ? `${bg}` : 'bg-inherit'} 
     ${ px ? `${px}`: 'px-[12px]'} ${ py ? `${py}`: 'py-[8px]'}
     ${ border ? `${border}`: 'border-2 border-[#ff6e40]'} ;
     ${ hover ? `${hover}` : 'hover:bg-[#fc5c2c] hover:text-white' }
     ${ font ? `${font}`: 'text-md font-medium '} 
     ${round ? `${round}` : 'rounded-full'}
     shadow-lg
    `} >
         {text}
    </div> 
    <style jsx>{`

       
       
        ;
        py
        font-size : 1.2rem;
        border-radius: 99px;
        border: ${ border ? `${border}px solid ${color}`: ''} ;
       }

       .link-button:hover{
        
        
         }
       }

 `}</style>

    </Link>

  )
}

export default LinkButton
