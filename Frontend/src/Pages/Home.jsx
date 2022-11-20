import React from 'react';
import Nav from '../Components/Nav';

function Home() {


  return (
    <body>
      <html>
      <Nav />
      <div className='justify-center'>
            <div className='text-white text-center mt-[10%] text-2xl'>Meeting minutes made easier</div>
            <div className='flex justify-center space-x-10'>
            <a href ="AdminPresent"><div><button className=' active:opacity-70 px-10 border-2 border-purple-500 rounded-full text-3xl font-sans text-white font-bold bg-blue-900 py-5 text-center mt-10'>Create Event</button></div></a>
            <a href ="ClientPresent"><div><button className='active:opacity-70 px-10 border-2 border-purple-500 rounded-full text-3xl font-bold font-sans text-white  bg-blue-900  py-5 text-center mt-10'>Join Event</button></div></a>
            </div>
          <img className='w-[100%] h-[800px] -z-50 absolute top-0' src={require("../home.jpg")} alt="" />
          </div>
      </html>
     </body>
  );
}

export default Home