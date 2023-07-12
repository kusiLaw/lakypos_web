'use client'
import { createContext, useState, useEffect } from 'react'


// All shared data use by dashboard only should be here ..
export const NotifyMeContext = createContext()




 const AppProvider = ({ children }) => {
  const [displayNotifyMe, setDisplayNotifyMe] = useState(false)

   return (
     <NotifyMeContext.Provider value={{displayNotifyMe, setDisplayNotifyMe}}>
         {children}
     </NotifyMeContext.Provider>
   )
  }

export default AppProvider 