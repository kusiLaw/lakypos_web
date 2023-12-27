import Head from "next/head";
import Header from "../header/header";
// import styles from './layout.module.css'
import Footer from "../footer/footer";


export default function Layout({ children }) {
 return (
   <div className='w-full h-auto relative flex justify-center'>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <title>LakyPOS</title>
        <meta name="description"  content="LakyPos, free and preferred point of sales software"/>
      </Head>
      <div className="max-w-[2560px] w-[100%] relative">
          <Header/>     
          <main className="">
              {children}
          </main>
        
          <Footer/>
      </div>
 
   </div>
 );
}