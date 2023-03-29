import Head from "next/head";
import Header from "../header/header";
import styles from './layout.module.css'
import Footer from "../footer/footer";


export default function Layout({ children }) {
 return (
   <div className={styles.container}>
     <Head>
       <meta name="viewport" content="width=device-width, initial-scale=1" />
       <link rel="icon" href="/favicon.ico" />
       <title>LakyPOS</title>
       <meta name="description"  content="LakyPos, free and preferred point of sales software"/>
     </Head>

      <Header/>     

     <main>{children}</main>
     
      <Footer/>
   </div>
 );
}