import './App.css'
import { useState,useEffect } from 'react';
import img01 from './img/img01.jpg';
import img02 from './img/img02.jpg';
import img03 from './img/img03.jpg';
import img04 from './img/img04.jpg';
import img05 from './img/img05.jpg';
import img06 from './img/img06.jpg';
import img07 from './img/img07.jpg';
import img08 from './img/img08.jpg';
import img09 from './img/img09.jpg';
import {FaBars} from "react-icons/fa";


function App() {
  const initialImages = [img01, img02, img03, img04, img05, img06, img07, img08, img09]; // Replace with your image imports
  const [images, setImages] = useState(initialImages);
    useEffect(() => {
    const intervalId = setInterval(() => {
      const shuffledImages = [...images];
      for (let i = shuffledImages.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledImages[i], shuffledImages[j]] = [shuffledImages[j], shuffledImages[i]];
      }
      setImages(shuffledImages);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [images]);
  return (
    <>
       <div className='bg-[#000000] py-10 px-14 flex flex-col h-screen w-screen relative'>
          <div className='flex text-white flex-row justify-between items-center'>
            <p>dfdgd</p>
            <div className=' flex flex-row gap-8 max-md:hidden'>
              <a>Services</a>
              <a>Project</a>
              <a>About</a>
              <a>Contact Us</a>
            </div>
            <div className='flex flex-row gap-5 max-md:hidden'>
              <button className="">
                Login
              </button>
              <button className="bg-sky-500 hover:bg-sky-700 py-2 px-4 rounded-lg">
                Sign Up
              </button>

              <FaBars className="text-white mt-1 text-3xl lg:hidden max-lg v:block"/>
            </div>
          </div>

          <div className='grid grid-cols-2 max-md:grid-cols-1 pt-10 w-full mt-6'>

            <div className='flex flex-col  text-white gap-3'>
              <div className='flex flex-col gap-8'>

                <div className='text-[60px]'>We build digital experiences</div>

                <div className='text-[22px]  leading-8'>
                  We build platforms, produts and services that help  create a simple,
                  joined-up and personalized experience for everyone.
                </div>

                <div className="max-w-sm flex items-center  rounded-md p-1 gap-3">
                            <input 
                                type="email"
                                placeholder="Enter your email "
                                className="w-full p-2.5 outline-none rounded-md bg-white-400 text-black"
                            />
                            <button className="p-2.5 rounded-md text-white bg-indigo-600 outline-none shadow-md focus:shadow-none sm:px-5">Subscribe</button>
                </div>
                
                <div className="flex gap-6">
                  <div className="flex gap-4">
                    <div className='flex gap-4'>
                         <scan className="text-indigo-600 text-6xl">3k+</scan><p>Projects<br/>Completed</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className='flex gap-4'>
                         <scan className="text-indigo-600 text-6xl">2k+</scan><p>Customer<br/>Reviews</p>
                    </div>
                  </div>

                </div>

              </div>
            </div>

            <section className="grid grid-cols-3 gap-2 max-md:hidden">
              {images.map((imgSrc, index) => (
                <img
                  key={index}
                  src={imgSrc}
                  alt={`Image ${index + 1}`}
                  className="object-cover m-0 p-0 border-2 border-white rounded-full"
                  style={{ height: '150px', width: '150px' }}
                />
              ))}
            </section>

          </div>

        </div>  
    </>
  )
}

export default App
