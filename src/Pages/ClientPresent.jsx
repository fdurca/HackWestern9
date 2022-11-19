import React from 'react';
function ClientPresent() {
  return (
   <body>
    <html className='bg-slate-800 pb-[50%]'>
    <a href="/"><button className='ml-[10%] mt-5 py-5 px-8 text-xl font-bold hover:text-blue-500 hover:border-blue-500 text-white border-2 rounded-full'>Return Home</button></a>
        <div className='text-3xl font-bold text-center text-white py-20'>Joing an Event</div>
        <article className='rounded-3xl pb-2 bg-green-500 w-3/4 ml-[12.5%]'>
            <div className='ml-[15%] font-bold py-5'>Event ID:</div>
            <input className='rounded-full w-[90%] mx-[5%] py-3' type="text" />
            <div className='ml-[15%] font-bold py-3'>User ID:</div>
            <input className='rounded-full w-[90%] mx-[5%] py-3 mb-14' type="text" />
            <a href='/viewing'><div className='rounded-full bg-blue-500 py-3 px-10 ml-[25%] w-2/4 text-center font-bold mb-12'>Join</div></a>
        </article>
    </html>
   </body>
  );
}

export default ClientPresent