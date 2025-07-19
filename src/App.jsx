import React, { useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import 'remixicon/fonts/remixicon.css';

function App() {
  let [showContent, setShowContent] = useState(false);
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    })
      .to(".vi-mask-group", {
        scale: 10,
        duration: 2,
        delay: -1.8,
        ease: "Expo.easeInOut",
        transformOrigin: "50% 50%",
        opacity: 0,
        onUpdate: function () {
          if (this.progress() >= .9) {
            document.querySelector(".svg").remove();
            setShowContent(true);
            this.kill();
          }
        }
      })
  }
  )

 

  useGSAP(() => {
    if (!showContent) return;
    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-1",
      ease: "Expo.easeInOut"
    });

    gsap.to(".sky", {
      scale: 1.3,
      rotate: 0,
      duration: 2,
      delay: "-0.8",
      ease: "Expo.easeInOut"
    });

    gsap.to(".bg", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-0.8",
      ease: "Expo.easeInOut"
    });

    gsap.to(".doom", {
      scale: 1,
      x: "-50%",
      bottom: "-70%",
      rotate: 0,
      duration: 1.8,
      delay: "-.7",
      ease: "Expo.easeInOut",
    });

    gsap.to(".text", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".main .text", {
        x: `${xMove * 0.3}%`,
      });
      gsap.to(".sky", {
        x: xMove,
      });
      gsap.to(".bg", {
        x: xMove * 1.7,
      });
    });
  }, [showContent]);


  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="110"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  Dr.DOOM
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./full.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && (
        <div className='main w-full bg-#000 rotate-[-10deg] scale-[1.7]' >
          <div className="landing  overflow-hidden relative w-full h-screen bg-black">
            <div className="navbar absolute z-[10] ">
              <div className="logo flex ">
                <img className=" top-1/2 left-1/4 -translate-x-1/6 -translate-y-1/4 h-[160px] scale-[80%] " src="./marvel.png" alt="" />
              </div>
            </div>
            <div className="imagesdiv w-full h-full relative overflow-hidden">
              <img className='w-full h-full object-cover sky  scale-[1.5] rotate-[-20deg] absolute top-0 left-0' src="./sky.png" alt="" />
              <img className='w-full h-full object-cover bg scale-[1.8] rotate-[-3deg] absolute top-0 left-0' src="./bg.png" alt="" />
              <div className="text w-full scale-[1.4] rotate-[-10deg] h-full">
                <div className="l absolute flex flex-col gap-4  top-1/3 left-1/2 -translate-x-1/2 ">
                  <h1 className='text-1xl leading-none mr-10'>Starring</h1>
                  <h1 className='text-7xl leading-none mr-190'>Robert</h1>
                  <h1 className='text-7xl leading-none mr-190'>downey</h1>
                  <h1 className='text-7xl leading-none mr-190'>jr</h1>
                </div>
                <div className="r absolute flex flex-col gap-4 top-1/3 left-1/2 -translate-x-1/2 ">
                  <h1 className='text-1xl leading-none ml-190'>as</h1>
                  <h1 className='text-7xl leading-none ml-190'>Dr.Victor</h1>
                  <h1 className='text-7xl leading-none ml-190'>von</h1>
                  <h1 className='text-7xl leading-none ml-190'>doom</h1>
                </div>
              </div>
              <img className='doom absolute -bottom-[300%]  character left-1/2 -translate-x-1/2 scale-[1.2] rotate-[-10deg] ' src="./doom.png" alt="" />
            </div>
            <div className="btmbar w-full py-10 px-10 absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent ">
              <div className="flex gap-4 items-center">
                <i className=" text-4xl ri-arrow-down-line"></i>
                <h3 className='text-2xl mt-[10px]'  >Scroll Down</h3>
              </div>
              <img className='absolute top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2 h-[120px]' src="./doomsday.png" alt="" />
            </div>
          </div>
          <div className="w-full h-screen flex items-center justify-center px-10 bg-black ">
            <div className="cntnr w-full  flex h-s[80%] ">
              <div className='limg relative w-1/2 h-full '>
                <img className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-3/10 scale-[0.5] border-radius rounded-4xl" src="./doommask.png" alt="" />
              </div>
              <div className="rg w-[40%]">
                <h1 className='text-5xl'>About this movie</h1>
                <p className='mt-10 font-serif text-xl'>Avengers: Doomsday (scheduled for December 18, 2026) brings together a massive ensemble of heroes — the Avengers, Fantastic Four, Wakandans, New Avengers, and original X‑Men — to confront one of Marvel’s most formidable villains: Doctor Doom, portrayed by Robert Downey Jr. After the events of Thunderbolts (2025), this multiverse-spanning epic plunges these heroes into a battle across timelines, with Doom’s genius, sorcery, and iron will threatening to rewrite the fate of every universe .</p>
                <button className='font-sans mt-7 bg-emerald-900 px-6 py-6 rounded-4xl'>Book Tickets!!!</button>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  )
}

export default App