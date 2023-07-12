import { FaTimes } from 'react-icons/fa';


const PopUpWindow = ({children , closeFn, display = false}) => {
 
  if (!display){
   return <></>
  }

  return (
     <div className='fixed flex gap-5 justify-center px-3 items-center w-full top-0 right-0 left-0 bottom-0 bg-black/50 z-50   '>
      
      <div className='bg-context_color h-fit py-2 px-2 md:py-5 md:px-5 text-white drop-shadow-2xl '>
         <div className='flex justify-end  text-2xl text-white font-light mb-5 '
         onClick={()=> closeFn(false)}>
               <FaTimes/>
         </div>

           {children}

         </div>
    </div>
    
  )
}

export default PopUpWindow
