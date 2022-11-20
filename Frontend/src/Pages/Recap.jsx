import React, { useState } from 'react';
import { useEffect } from 'react';
import Nav from '../Components/Nav';


export default function Recap(){
  const [events, setEvents] = useState();
  useEffect (() => {
    console.log("Fetching...");
    const requestOptions = {
    };

    fetch('http://127.0.0.1:8000/events/', requestOptions)  
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setEvents(data);
    });

  }, []);

  return (
    <body>
    <html>
      < Nav />
     <div className='text-white text-6xl text-center mt-[4%] font-bold font-sans'>Meeting</div>
        <article className='justify-center mx-10 mt-10'>       
           <div className='justify-between mx-[10%] flex border-b-2 border-white text-white text-2xl py-2 px-5 mt-5'>
              <a className='hover:text-blue-500' href="/Meeting1"><div>Meeting 1</div></a>
              <div>11/20/2022</div>
           </div>
           <div className='justify-between mx-[10%] flex border-b-2 border-white text-white text-2xl py-2 px-5 mt-5'>
              <div>Placeholder 2</div>
              <div>Date 2</div>
           </div>
           <div className='justify-between mx-[10%] flex border-b-2 border-white text-white text-2xl py-2 px-5 mt-5'>
              <div>Placeholder 3</div>
              <div>Date 3</div>
           </div>
           <div className='justify-between mx-[10%] flex border-b-2 border-white text-white text-2xl py-2 px-5 mt-5'>
              <div>Placeholder 4</div>
              <div>Date 4</div>
           </div>
        </article>
        <img className='w-[100%] h-[800px] -z-50 absolute top-0' src={require("../recap.jpg")} alt="" />
    </html>
   </body>
  )

}



// function Recap() {

//   const hello = () => {
//     alert('hello');
// }
//   return (
//     <body>
//       <html className='bg-slate-800 pb-[50%]'>
//       <a href="/"><button className='ml-[10%] mt-5 py-5 px-8 text-xl font-bold hover:text-blue-500 hover:border-blue-500 text-white border-2 rounded-full'>Return Home</button></a>
//       <div className='text-3xl font-bold text-center text-white py-20'>Recap</div>
//       <div onClick = {hello}  className='rounded-full bg-white py-3 justify-between px-10 flex ml-[25%] w-2/4'>
//         <div>File Name 1</div>
//         <div>Date 1</div>
//       </div>
//       <div className='rounded-full bg-white py-3 justify-between px-10 flex mt-5 ml-[25%] w-2/4'>
//         <div>File Name 2</div>
//         <div>Date 2</div>
//       </div>
//       <div className='rounded-full bg-white py-3 justify-between px-10 flex mt-5 ml-[25%] w-2/4'>
//         <div>File Name 3</div>
//         <div>Date 3</div>
//       </div>
//       </html>
//     </body>
//   );
// }

// export default Recap