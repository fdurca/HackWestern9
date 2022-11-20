import React from 'react';
import Nav from '../Components/Nav';

function ClientPresent() {
  return (
    <body>
    <html>
      < Nav />
     <div className='text-white text-6xl text-center mt-[4%] font-bold font-sans'>Join Meeting</div>
        <article>
            <input className='text-center mt-12 placeholder-black placeholder-xl border-2 border-black rounded-full w-[80%] mx-[10%] py-2 mb-14 px-5' type="text" placeholder='Paste Invite Link Here' />
           
            <a className='ml-[78%] px-10 active:opacity-70 border-2 border-purple-500 rounded-full text-3xl font-bold font-sans text-white  bg-blue-900  py-5 text-center mt-10 mr-[10%]' href ={"/ClientMeeting1"}>Join</a>
            
        </article>
        <img className='w-[100%] h-[800px] -z-50 absolute top-0' src={require("../join.jpg")} alt="" />
    </html>
   </body>
  );
}

export default ClientPresent