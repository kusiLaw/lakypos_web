


const Devices = ({laptop= true, img= ''}) => {

  return (

   
    <>
     { laptop ?



    <div className=''>
        <div className="relative mx-auto border-gray-800  bg-white-800 p-1 border-[8px] rounded-t-xl h-[172px] max-w-[331px] md:h-[294px] md:max-w-[512px]">
                <div className="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800">
                    <img src={img} className="hidden dark:block h-[156px] md:h-[278px] w-full rounded-lg" alt=""/>
                </div>
        </div>
        <div className="relative mx-auto bg-gray-700  rounded-b-xl rounded-t-sm h-[20px] max-w-[381px] md:h-[21px] md:max-w-[597px]">
              <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
        </div>
      </div>
  :

   <>
     <div className="relative mx-auto p-1 border-gray-800 dark:border-gray-800 bg-white-800 border-[16px] rounded-t-xl h-[172px] max-w-[331px] md:h-[294px] md:max-w-[512px]">
        <div className="rounded-xl overflow-hidden h-[140px] md:h-[262px]">
            <img src={img} className="hidden dark:block h-[140px] md:h-[262px] w-full rounded-xl" alt=""/>
        </div>
    </div>
    <div className="relative mx-auto bg-gray-900 dark:bg-gray-600 rounded-b-xl h-[24px] max-w-[331px] md:h-[42px] md:max-w-[512px]"></div>
    <div className="relative mx-auto bg-gray-800 rounded-b-xl h-[55px] max-w-[83px] md:h-[95px] md:max-w-[142px]"></div>
    </>
   
     }
  </>

  )
}

export default Devices