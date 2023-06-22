import { useState, useContext } from "react";
import PopUpWindow from "../popwindow/popwindow";
import { NotifyMeContext } from '@/pages/provider';


const UnderDev = () => {
 const [display, setDisplay] = useState(true)
 const {displayNotifyMe, setDisplayNotifyMe} =  useContext(NotifyMeContext)

  return (
    <PopUpWindow display={display} closeFn={setDisplay}>
      <div className="px-2 md:px-8">
        <h2 className="text-xl font-medium text-center">Welcome to LakyPOS</h2>
        <p className="py-8 text-lg">This page is under development. Some component may not
           work as expected. <br/> We are working very hard to make it become fully functional before 31-07-2023

           <br/>
           Thank you.
        </p>

        <p onClick={()=>{setDisplay(false); setDisplayNotifyMe(true)}} className="text-end text-default_blue cursor-pointer text-lg">Notify Me </p>
      </div>
    </PopUpWindow>
  )
}

export default UnderDev
