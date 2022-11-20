import React from 'react';
import Slides from '../Components/Slides';
import { useState } from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, useParams } from 'react-router-dom';




const Present = () => {
  
    let check = 0;

    function state() {
        const parts = [];
        let mediaRecorder;
        if (check == 0) {
            navigator.mediaDevices.getUserMedia ({ audio: true, video: false}).then(stream => {
                document.getElementById("counter").innerHTML = "Currently Recording";
                document.getElementById("btn").style.backgroundColor = "red";
                document.getElementById("btn").innerHTML = "Stop Recording";
                mediaRecorder = new MediaRecorder(stream);
                mediaRecorder.start(1000);

                mediaRecorder.ondataavailable = function (e) {
                    parts.push(e.data);
                }
                document.getElementById("btn").onclick = function () {
                    document.getElementById("counter").innerHTML = "Recording Stopped";
                    mediaRecorder.stop();
                    const blob = new Blob(parts, {
                        type: "audio/wav"
                    });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement("a");
                    document.body.appendChild(a);
                    a.style = "display : none";
                    a.href = url;
                    a.download = "test.wav";
                    a.click();
                }
            })
            check = 1;
        }
    }
        
    
  return (
    <body>
    <html className='bg-slate-800'>
    <Slides />
    <article className='ml-[5%] mt-[5%] flex'>
    <div>
        <div id = "counter" className='pb-5 px-4 text-white'></div>
        <div><button onClick = {state} className='active:bg-green-500/50 bg-green-500 rounded-xl py-3 px-5 font-bold' id ="btn">Start Recording</button></div>
        {/* <div><button className='active:bg-red-500/50 bg-red-500 rounded-xl py-3 px-5 font-bold mt-5 mb-20' id ="stop_btn">Stop Recording</button></div> */}
        </div>
        <div className='bg-white ml-10 w-full mr-10 h-40 rounded-3xl px-5 text-xl'>ff</div>
    </article>
    </html>
   </body>
  );
  
}


export default Present