import React from 'react'

const MobileList = ({open}) => {
  return (
    <div id ='nav_mob' className='mobile_nav_wrapper'>
      <ul  className='mobile_nav_list'>
        <li>Home</li>
        <li>About</li>
        <li>FAQ</li>
      </ul>


      <style jsx>{`
      .mobile_nav_wrapper{
         position: absolute;
          top: 7rem;
          left: 0;
          right: 0;
          bottom: 0;
         z-index: 100;
         width: 100vw;
         height: 100vh;
         opacity: 1;
         color: #132f4c;
         font-size: 1.8rem;
         letter-spacing: 0.2rem;
         font-weight: 600;
         height: 100vh;
       }

       .mobile_nav_wrapper :global(.mobile_nav_list){
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: center;
        width: 100%;
        height: 100%;
        padding: 2rem;
        background-color: rgba(232, 238, 245, 0.98);
       }

     `}</style>



      <style jsx>{`
      #nav_mob {
        display: ${ open ? 'block' : 'none'};
      }
    `}</style>

    </div>
  )
}

export default MobileList

