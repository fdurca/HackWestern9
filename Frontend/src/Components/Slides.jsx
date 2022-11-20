import React from 'react';

// var message = document.getElementById('message');
// //message.innerHTML((document.getElementById('iframe').src));
// message.innerHTML("t0");
const Slides = () => {

    // var monitor = setInterval(function(){
    //     var message = document.getElementById('message');
    //     var num = 0;
    //     var elem = document.activeElement;
    //     if(elem && elem.tagName == 'IFRAME'){
    //         message.innerHTML = num;
    //         num = num++;
    //         clearInterval(monitor);
    //     }
    // }, 100);


// var message = document.getElementById('message');
// console.log(5);
// console.log(document.getElementById("iframe_id").contentWindow.location.href);

    
    return (
        <div>
            <iframe id = 'iframe' name = 'good' className='w-full h-[500px] border-2 border-white mt-10  block overflow-hidden' title="uniquetitle" src="https://docs.google.com/presentation/d/e/2PACX-1vTwkykQQXTvJt3fouHe5LRUbML34_2maH_381QHUazc4T3avkN9x826cHlz25XQKbhh4DsiZ3DaosWX/embed?start=false&loop=false&delayms=3000" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
        </div>
    );
  }
  
  export default Slides