import React from 'react';
function AdminPresent() {
  return (
    <body>
    <html className='bg-slate-800 pb-[50%]'>
    <a href="/"><button className='ml-[10%] mt-5 py-5 px-8 text-xl font-bold hover:text-blue-500 hover:border-blue-500 text-white border-2 rounded-full'>Return Home</button></a>
        <div className='text-3xl font-bold text-center text-white py-20'>Create an Event</div>
        <article className='rounded-xl pb-2 bg-red-500 w-3/4 ml-[12.5%]'>
            <div className='ml-[15%] font-bold py-5'>Event ID:</div>
            <input className='rounded-full w-[90%] mx-[5%] py-3' type="text" />
            <div className='ml-[15%] font-bold py-3'>Google Slides Link:</div>
            <input className='rounded-full w-[90%] mx-[5%] py-3 mb-14' type="text" />
            <a href = "/Present"><div className='rounded-full bg-blue-500 py-3 px-10 ml-[25%] w-2/4 text-center font-bold mb-12'>Create</div></a>
        </article>
    </html>
   </body>
  );
}

export default AdminPresent