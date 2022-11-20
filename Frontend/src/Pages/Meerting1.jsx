import React, { useState } from 'react';
import { useEffect } from 'react';
import Nav from '../Components/Nav';
import Slides from '../Components/Slides';

const Meeting1 = () => {

    return (
        <body>
        <html>
        <div className='flex justify-between mx-[5%]'>
         <div className='text-white text-3xl  text-left mt-10 mb-10 font-bold font-sans'>Meeting 1</div>
       <a href='/'> <div className='text-white text-xl text-right mt-10 mb-10 font-bold font-sans hover:text-blue-900'>Home</div></a>
         </div>
         <div className='flex justify-center mr-[5%] ml-[5%] space-x-5 bg-purple-900 rounded-2xl border-2 border-white'>
         <div className='w-[60%] mb-10 border-white'><Slides /></div>
         <div className='px-5 my-5 w-[35%] rounded-2xl border-black border-2 text-black bg-white text-lg py-5 scroll-m-10 overflow-y-scroll h-[550px]'>We are going to present today about our project Scribbler. It is a website that can host meetings and much more. We will show you in this presentation. <br /><br />

The problem that we have noticed is that it is hard to keep your focus. It is hard to make good meeting minutes because they are not always shared and there is a loss of information <br /><br />

The solution to the problem that was said is Smart Meeting Minutes. We will use smart meeting minutes to solve the problem. Smart meeting minutes are the <br /> <br />

To build our application we used cohere google slides cockroach and python. Python was used for the backend work and integration. Cohere summarized the text. Google slides can be used for hosting the slides. Cockroach holds the information <br /> <br />

Audio recordings are created when a presenter decides. The voice is turned into summaries and then stored in a cockroach. Presentations are able to watch later.

This project was made by Phillip Ryan Ben Jay. There is a demonstration happening.</div>
         </div>
            <img className='w-[100%] h-[800px] -z-50 absolute top-0' src={require("../recap.jpg")} alt="" />
        </html>
       </body>
      )
}
export default Meeting1;