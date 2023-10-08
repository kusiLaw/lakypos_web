import { useState, useContext } from "react";
import PopUpWindow from "../popwindow/popwindow";
import { NotifyMeContext } from '@/pages/provider';


const UnderDev = () => {
 const [display, setDisplay] = useState(true)
 const {displayNotifyMe, setDisplayNotifyMe} =  useContext(NotifyMeContext)

  return (
    <PopUpWindow display={display} closeFn={setDisplay}>
      <div className="px-2 md:px-8">
        <h2 className="text-xl font-medium text-center text-context_color">Welcome to LakyPOS</h2>
        <p className="py-8 text-lg font-light">This page is under development. Some component may not
           work as expected. <br/> We are working very hard to make it become fully functional<br/>
           Thank you.
        </p>

        <div className="flex justify-end gap-6">
          <button onClick={()=>{setDisplay(false)}} className="text-end md:font-semibold border-1 rounded-xl
          hover:text-context_color cursor-pointer text-lg">
            Take a tour
          </button>
          <button onClick={()=>{setDisplay(false); setDisplayNotifyMe(true)}} className="text-end md:font-semibold
          hover:text-context_color cursor-pointer text-lg">Notify-Me
            </button>
        </div>
      </div>
    </PopUpWindow>
  )
}

export default UnderDev
