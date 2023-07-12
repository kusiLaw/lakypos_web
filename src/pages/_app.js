import '@/styles/globals.css'
import AppProvider from './provider'

//for  global css
export default function App({ Component, pageProps }) {
  return (
   <AppProvider>
       <Component {...pageProps} />
   </AppProvider>
  )
}
