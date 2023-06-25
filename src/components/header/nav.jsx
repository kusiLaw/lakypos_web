import Link from 'next/link';
// import SocialIcons from '../social/social_icons';
// import Resume from '../resume/resume';

const Nav = ({navList, isOpen, setOpen}) =>{
 return (
     <nav className={isOpen ? "absolute border-[3rem]   z-50 top-0 h-screen w-full right-0 left-0 bottom-0 flex flex-col \
      items-center justify-center   px-5 pt-5 divide-y divide-default_blue": 
     "hidden space-x-2 md:block  transition-all duration-500 animate-delay-500 animate-duration-[5000] animate-fade-left"}>


      {navList.map(([title, url], index) => (
        <Link key={index} href={url}  className={isOpen ? " w-full py-4 flex items-center hover:bg-light_accent_divider \
          hover:dark:bg-dark_bg_secondary   transition-all duration-500 " :
        "px-3 py-2 font-medium hover:animate-shake hover:animate-once" } onClick={()=>{ isOpen && setOpen(false)}}>
                <span className='md:hidden xl:inline-block mr-3  text-light_accent_dark dark:text-dark_accent italic animate-Skew '> 0{index + 1}.</span> 
                <span className='dark:text-dark_text_header text-xl  
                                  hover:border-b-light_accent transition-all duration-500  hover:md:text-light_accent hover:md:dark:text-dark_accent'>{title}</span>
        </Link>
      ))}

      {isOpen && <div className='flex pt-5 pb-5 items-center w-full justify-end gap-4 text-2xl '>
                 {/* <SocialIcons /> */}
       </div>}


      
     </nav>
 )
}


export default Nav


