
const Card = ({text, title, children}) => {
  return (
   <div className=' w-full h-fit lg:min-h-[15rem]  lg:h-[18rem] px-2 py-2 text-default_blue
     shadow-d hover:shadow-none  '>
      <div className='flex flex-col items-center  lg:flex-row h-full w-full '>
        <div className='flex lg:items-center lg:justify-center lg:px-3  h-full w-[35%] min-w-[5rem]  py-3 font-black text-[2.8rem]
                         '>
          {children}
        </div>


        <div className='flex flex-col gap-4 mt-4 lg:w-[60%]'>
           <span className='self-center  text-xl font-black'>{title}</span>
           <p className='text-xl md:text-xl tracking-wide text-left '>{text}</p>
        </div>
      </div>
   </div>

  )
}

export default Card
