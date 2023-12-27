import Head from 'next/head'
import Link from "next/link";
import Layout from '@/components/layout/layout'
import Card from '@/components/cards/card'
import InputText from '@/components/input/input'
import TextArea from '@/components/input/textarea'
import Fag from '@/components/fag/fag';
import LinkButton from '@/components/link_button/button';
import Social from '@/components/social/social';
import NotifyMe from '@/components/forms/notifyMe';
import { FaQuoteLeft } from 'react-icons/fa';
import UnderDev from '@/components/underdev/underdev';
import Devices from '@/components/device';
import Carousal from '@/components/carousal/carousal';


export default function Home() {

 const handleSubmit = () =>{

  }

  return (
    <Layout>
      <Head>
         <meta name="description" content="POS ||Laky POS" />

      </Head>
     <Social />
     <NotifyMe />
     <UnderDev />
     <section className='flex relative  items-center h-[90vh] md:h-[85vh] min-h-fit max-h-[1080px]
                 bg-fixed bg-no-repeat bg-cover bg-top bg-[url("../../public/sales_sm.jpg")] md:bg-[url("../../public/unity2.jpg")] '>
          <div className='flex flex-col items-center justify-center h-full w-full      min-h-fit
                       backdrop-blur-sm bg-black/30 ' >
                <div className='flex justify-center flex-col  mt-[15%]  md:-mt-10 md:gap-5
                                text-white w-full h-full px-3 md:px-8 lg:px-16 overflow-hidden  '>
                    <h2 className='text-2xl  md:text-[2rem] lg:text-[2.5rem]/[55px] select-text   min-h-fit
                    md:text-left font-semibold md:font-extrabold '>
                    LAKY POS FOR SMALL AND LARGE SCALE<span className='lg:block'>  BUSINESSES</span></h2>
                    <p className='text-lg md:text-xl lg:text-2xl my-5 font-lt md:font-medium '>
                       Welcome to lakyPOS.
                       Users{"'"} Choice Point of Sales Software.
                     <span className='block my-5 font-light  tracking-widest'>  Free | Fast | User Friendly | Live Update. </span>
                    </p>
                    <div className='md:mt-2 flex gap-4 '>
                            <LinkButton
                              url = '#'
                              text= 'Support Us'
                              font = 'md:text-xl md:font-semibold'
                              px = 'px-6 md:px-8'
                              py = 'py-3 md:py-3'
                              bg='bg-[#ff6e40]'
                              color='text-white'
                            />
                    </div>
                </div>

        </div>

     </section>

    <section className='py-20  px-3 md:px-8 lg:px-16 gap-16 bg-white flex flex-col'>

         <h2 className='self-center  text-default_blue font-black text-2xl mdd:text-[1.8rem]'>
          BENEFITS </h2>
         <div className='grid grid-cols-1  md:grid-cols-2 gap-6 md:gap-6 '>
            <Card title = "Business Growth"
                   text = {` LakyPOS software is aimed to help you grow your company.
                       You do not require to pay any money before using this project.
                        Thanks to Lakypos team `}>


                     <img src="/Meeting.svg" alt='' className='w-[80%] drop-shadow-md h-auto'/>




            </Card>
            <Card
              title = "Free To Use"
              text = {`Using this software does not require any special training.
                     The interface follows modern and proper design guidelines,
                     making it easy to use.  `}>
                    <img src="/Jump.svg" alt='' className='w-[80%] h-auto'/>

            </Card>

            <Card
               title = {"Live Update"}
               text = {`It provides Live update from Sales
                        enable users to gain better insight into their data to
                        make a better decision. Besides the software is updated
                         every 3 months `}>
                <img src="/Cloud.svg" alt='' className='w-[80%] h-auto'/>

            </Card>
            <Card
               title = {"Customers Choice"}
               text = {`It provides Live update from Sales
                        enable users to gain better insight into their data to
                        make a better decision. Besides the software is updated
                         every 3 months `}>
                <img src="/Rating.svg" alt='' className='w-[80%] h-auto'/>

            </Card>
         </div>


     </section>


     <section className='max-w-[100%] flex flex-col justify-between text-default_blue'>
    <div className="flex mb-[5rem] justify-center">
        <h2 className='self-center uppercase   font-black text-2xl mdd:text-[1.8rem]'>
              About
           </h2>
    </div>

    <div className='max-w-[100%] px-3 md:px-8 lg:px-16 lg:mb-[3rem] flex flex-col-reverse gap-6 justify-between  lg:flex-row  '>
        <div className='lg:max-w-[50%] text-xl md:text-xl tracking-wide text-center  p-2 md:p-4  flex flex-col lg:gap-4  '>
            

          <p className='lg:pt-4'>
            <span className='capitalize font-black text-context_color '>Lakypos</span> was created by Lawrence Kusi in 2020 as a result of solving the daily repetitive tasks at 
            the mobile phone shop. It is a <strong>Post of Sale</strong> application, purposely made to be used in mobile phone shops 
            as at the time of creation. The app was created with Python, PySide, and MySql and compiled for window distributions. Popular phone shops in Ghana still use the first version of this app.
          </p>
          <p>
            The developer has the mind to make it open-source and more generic
            to serve various needs and support cloud storage. To join the team kindly email me to lawrence.kusi.addai@gmail.com 
          </p>

        </div>
        <div className='lg:max-w-[50%] flex justify-cente'>
        <Carousal />
        </div>
    </div>
      
    </section>



    <section className='py-14 md:py-16 relative px-3 md:px-8 lg:px-12  c-flex  '>
       <div className='absolute top-0 left-3 md:left-12 lg:left-20 text-[3rem] md:text-[5rem] text-default_hover -rotate-[25deg] -z-10 opacity-50'>
         <FaQuoteLeft />
       </div>

       <div className='flex  flex-col md:px-8 lg:px-16  gap-16'>
          <h2 className='self-center  text-default_blue font-black text-2xl mdd:text-[1.8rem]'>
             FAQ </h2>

          <div className='grid lg:grid-cols-2 gap-4 gap-x-4'>
             <Fag
             question='Why lakyPOS  and what do we use it for ?'
             num = '01'
             >
                 <p>LakyPOS is a point of sale software for
                 managing, tracking sales data and sales
                 transaction of a retails shop.
                 The LakyPOS team is working greatly to
                 release a new version for Windows,
                 Linux, Mac, and Android devices</p>

             </Fag>

             <Fag
             question='What is the difference between lakyPOS and lakyPhonePOS ?'
             num = '02'
             >
                <p>LakyPOS is a newer version of <Link href=''><span className='inline text-blue-600 '>LakyPhonePOS</span> </Link> .
                 After 8years of working experience in mobile phone services and sales,
                 the developer <Link href=''><span className='inline text-blue-600 '>(Lawrence Addai Kusi ) </span> </Link>
                 came out with the first version of this software named “LakyPhonePOS”
                 to manage sales transactions and automate other repetitive tasks at
                 the mobile phone shop.  The new version is a general-purpose POS software
                 to manage sales and transactions hence the name lakyPOS.
                 The new version also comes with other new features and it will be launched in
                 August 2023. <Link href=''><span className='inline text-blue-600 '>Notified Me</span></Link>  when released</p>
             </Fag>

             <Fag
             question='Is lakyPOS free to use?'
             num = '03'
             >
              <p>
                  LakyPOS is a free software under the <Link href=''><span className='inline text-blue-600 '> MIT Licence. </span></Link>
                   It aimed to help you grow your company.
                  You do not require to pay any money before using this software.
                   Thanks to the lakyPOS team. You can support
                   lakyPOS project to help us provide better solutions and seamless features.
                   <Link href=''><span className='inline text-blue-600 '> Support Us  </span></Link> Or
                   <Link href=''><span className='inline text-blue-600'> Join Our Team</span> </Link>
             </p>


             </Fag>

          </div>
       </div>
    </section>

     {/* <section className='contact_us flex'>
        <h2>Support</h2>
        <div className='contact_us_wrapper '>
          <div className='contact_note '>
             <h3>Contact US</h3>
             <p> Your feedback is important to Us. </p>
             <p>Our team is here to help you get support, answers to your questions,
              suggestions and make sure you get great user experience with our products.</p>
          </div>
          <div className='form_wrapper -c-flex'>
             <form onSubmit={handleSubmit} className='contact_form c-flex'>
                  <div className='form_divider c-flex'>
                     <div className='form_name'>
                        <InputText  label='Name' name='name'/>
                     </div>
                      <div className='form_email'>
                         <InputText  label='Email' name='email'/>
                      </div>
                  </div>

                <div className='form_text' >
                     <TextArea label="Message" name="message" maxLength='500'/>
                </div>
                <div className='contact_btn_wrapper flex' >
                     <LinkButton
                        text= 'Submit'
                        padding = '12px 40px'
                        border = '3'
                        color='#132f4c'
                      />
                </div>

             </form>
          </div>
        </div>
     </section> */}



    </Layout>
  )
}
