import React from 'react'
import Link from 'next/link'

const Logo = ({fontSize = null}) => {
 let font = fontSize ? fontSize : `text-lg md:text-2xl`
 return (
   <Link href='/'><h1 className={`font-medium ${font}`}>
   <span className={`text-context_color`}>Laky</span>POS.</h1>
   </Link> 
  )
}

export default Logo
