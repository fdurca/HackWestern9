import React from 'react';

function Nav() {


  return (
    <body>
      <html>
      <div className='flex mr-5 mt-5 justify-end'>
      <a href ="/"><div><button className='active:opacity-70 hover:text-blue-900 font-sans text-white py-2 px-5'>Home</button></div></a> 
         <a href ="Recap"><div><button className='active:opacity-70 hover:text-blue-900 font-sans text-white py-2 pr-7 pl-5'>Meeting</button></div></a> 
        <div><button className='active:opacity-70 hover:text-blue-900  hover:border-blue-900 text-white border-2 border-white rounded-full py-2 px-5'>Sign in</button></div>
      </div>
      <div className='text-white text-9xl ml-20 font-bold'>Scr;blr</div>
      </html>
     </body>
      

  );
}

export default  Nav