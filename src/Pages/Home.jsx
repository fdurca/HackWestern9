import React from 'react';

function Home() {
  return (
    <body className='bg-red-500'>
      <html className='bg-slate-800 h-[100%]'>
      <a href ="AdminPresent"><div><button className='ml-[25%] rounded-full text-xl font-bold bg-red-500 w-2/4 py-5 text-center mt-[25%]'>Create Event</button></div></a>
      <a href ="ClientPresent"><div><button className='ml-[25%] rounded-full text-xl font-bold bg-green-500 w-2/4 py-5 text-center mt-10'>Join Event</button></div></a>
      <a href ="Recap"><div><button className='ml-[25%] rounded-full text-xl font-bold bg-white w-2/4 py-5 text-center mt-10 mb-[40%]'>Event Page</button></div></a> 
      </html>
     </body>
      

  );
}

export default Home