import React, { useState } from 'react';
import { useEffect } from 'react';
import Nav from '../Components/Nav';
import Slides from '../Components/Slides';

const AdminMeeting1 = () => {

let check = 0;

    function state() {
     
        if (check == 0) {
                document.getElementById("click").style.backgroundColor = "red";
                document.getElementById("click").innerHTML = "Stop Recording";
            
                }
                document.getElementById("click").onclick = function () {
                  document.getElementById("click").innerHTML = "Done";
                  document.getElementById("click").style.backgroundColor = "#22c55e";
  
                }
            
            check = 1;
            }  

    return (
        <body>
        <html>
            <div className='flex justify-between mx-[5%]'>
         <div className='text-white text-3xl  text-left mt-10 mb-10 font-bold font-sans'>Meeting 1</div>
       <a href='/'> <div className='text-white text-xl text-right mt-10 mb-10 font-bold font-sans hover:text-blue-900'>Home</div></a>
         </div>
         <div className=' mr-[5%] ml-[5%] bg-purple-900 rounded-2xl border-2 border-white'>
         <div className='ml-[5%] w-[90%] mb-5 border-white'><Slides /></div>
         <button id = 'click' onClick = {state} className='text-white text-xl ml-[5%] py-3 px-5 bg-green-500 text-center border-2 border-black mt-5 mb-10 rounded-2xl'>Start Recording</button>
         </div>
            <img className='w-[100%] h-[800px] -z-50 absolute top-0' src={require("../recap.jpg")} alt="" />
        </html>
       </body>
      )
}
export default AdminMeeting1;