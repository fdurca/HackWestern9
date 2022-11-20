import React, { useState } from 'react';
import { useEffect } from 'react';
import Nav from '../Components/Nav';
import Slides from '../Components/Slides';

const ClientMeeting1 = () => {

    return (
        <body>
        <html>
        <div className='flex justify-between mx-[5%]'>
         <div className='text-white text-3xl  text-left mt-10 mb-10 font-bold font-sans'>Meeting 1</div>
       <a href='/'> <div className='text-white text-xl text-right mt-10 mb-10 font-bold font-sans hover:text-blue-900'>Home</div></a>
         </div>
         <div className='flex justify-center mr-[5%] ml-[5%] space-x-5 bg-purple-900 rounded-2xl border-2 border-white'>
         <div className='w-[90%] mb-10 border-white'><Slides /></div>
         </div>
            <img className='w-[100%] h-[800px] -z-50 absolute top-0' src={require("../recap.jpg")} alt="" />
        </html>
       </body>
      )
}
export default ClientMeeting1;