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
        <iframe id = 'iframe' name = 'good' className='mr-20 block overflow-hidden' title="uniquetitle" src="https://docs.google.com/presentation/d/e/2PACX-1vTZjshq8U7DgSVtivg4Rri-hdMfB64ARkF4RaAYIaZCjDvMCqd31yEOvmexOcA95b-BzEqtb8a8lslE/embed?start=false&loop=false&delayms=3000&slide=id.g1033c357ab2_0_93" frameborder="0" width="100%" height="500" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
        <div id="message">6uuu</div>
      
        </div>
    );
  }
  
  export default Slides