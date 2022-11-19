import React from 'react';
function Recap() {

  const hello = () => {
    alert('hello');
}
  return (
    <body>
      <html className='bg-slate-800 pb-[50%]'>
      <a href="/"><button className='ml-[10%] mt-5 py-5 px-8 text-xl font-bold hover:text-blue-500 hover:border-blue-500 text-white border-2 rounded-full'>Return Home</button></a>
      <div className='text-3xl font-bold text-center text-white py-20'>Recap</div>
      <div onClick = {hello}  className='rounded-full bg-white py-3 justify-between px-10 flex ml-[25%] w-2/4'>
        <div>File Name 1</div>
        <div>Date 1</div>
      </div>
      <div className='rounded-full bg-white py-3 justify-between px-10 flex mt-5 ml-[25%] w-2/4'>
        <div>File Name 2</div>
        <div>Date 2</div>
      </div>
      <div className='rounded-full bg-white py-3 justify-between px-10 flex mt-5 ml-[25%] w-2/4'>
        <div>File Name 3</div>
        <div>Date 3</div>
      </div>
      </html>
    </body>
  );
}

export default Recap