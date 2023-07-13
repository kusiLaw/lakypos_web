
const Card = ({text, title, children}) => {
  return (
   <div className='relative w-full px-2 py-8 text-default_blue  overflow-clip
     shadow-md hover:shadow-none hover:bg-default_hover   '>
      <div className='flex flex-col'>
        <div className='self-center px-3  py-3 font-black text-[2.8rem] bg-default_hover  rounded-full
        '>{children}</div>
        <div className='flex flex-col gap-4 mt-4'>
           <span className='self-center  text-xl font-black  '>{title}</span>
           <p className='text-xl md:text-xl tracking-wide text-left px-3 '>{text}</p>
        </div>
      </div>
   </div>

  )
}

export default Card
