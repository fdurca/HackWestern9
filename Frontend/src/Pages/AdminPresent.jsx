import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import axios from 'axios';
import Nav from '../Components/Nav';

export var num ;


function AdminPresent() {

 
  // function handleSubmit(e){
  //    axios({
  //       method: "POST",
  //       url: "http://localhost:3000/createEvent",
  //       data: {
  //           // meetingName: meetingName,
  //           // slide: slideLink
  //       }
  //    })
  //    .then((response) => {
  //       num = response.get()
  //    })
  // }

  // let check = 0;

  // function state() {
     
  //     if (check == 0) {
  //             document.getElementById("click").style.backgroundColor = "red";
  //             document.getElementById("click").innerHTML = "Stop Recording";
          
  //             }
  //             document.getElementById("click").onclick = function () {
  //               document.getElementById("click").innerHTML = "Done";

  //             }
          
  //         check = 1;
      
  

  
  return (
    <body>
    <html>
      < Nav />
     <div className='text-white text-2xl ml-[10%] mt-[10%]'>Smarter meeting minutes</div>
        <article>
            <input className='mt-10 placeholder-black placeholder-xl border-2 border-black rounded-full w-[80%] mx-[10%] py-2 mb-14 px-5' type="text" placeholder='Place Google Slide Link Here:' />
           
            <a className='ml-[78%] px-10 active:opacity-70 border-2 border-purple-500 rounded-full text-3xl font-bold font-sans text-white  bg-blue-900  py-5 text-center mt-10 mr-[10%]' id = 'click'  href ={"/AdminMeeting1"}>Create</a>
            
        </article>
        <img className='w-[100%] h-[800px] -z-50 absolute top-0' src={require("../create.jpg")} alt="" />
    </html>
   </body>
  );
}

export default AdminPresent