import React from 'react'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import pic2 from "/Coder.png"


const Home = () => {
  return (
    <>
    <div 
        name="Home"
        className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
        <div className='flex flex-col md:flex-row'>
            <div className='md:w-1/2 mt12 md:mt-24 space-y-2 order-2 md:order-1'>
                <span> Welcome To My Page</span>
                <div className='flex space-x-1 text-2xl md:text-4xl'>
                    <h1>Hello I'm a</h1>
                    {/* react typed for typing animation */}
                    <ReactTyped 
                        className='text-red-700 font-bold'
                        strings={["Developer","Coder","Programmer",]}
                        typeSpeed={40}
                        backSpeed={50}
                        loop={true}
                        >
                    </ReactTyped>
                </div>
                <br />
                <p className='text-sm md:text-md text-justify'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat adipisci cupiditate quia iusto nesciunt quae laboriosam reprehenderit repellendus nemo facere, culpa voluptates praesentium ex molestias optio veniam laborum possimus quo.
                </p>
                <br />
                {/* Social Media Icons */}
                <div className='flex flex-col items-center justify-between md:flex-row md: space-y-6'>
                    <div className='space-y-1'>
                        <h1 className='font-bold'>Availaible on </h1>
                        <ul className='flex space-x-4'>
                            <li>
                                <a href="https://www.facebook.com/nikhil.kumar.singh.193517">
                                <FaSquareFacebook className='text-xl md:text-2xl hover:scale-110 duration-150 cursor-pointer'/></a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/nikhil-kumar-singh-431799202/">
                                <FaLinkedin className='text-xl md:text-2xl hover:scale-110 duration-150 cursor-pointer'/></a>
                            </li>
                            <li>
                                <a href="#">
                                <FaTelegram className='text-xl md:text-2xl hover:scale-110 duration-150 cursor-pointer'/></a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/nikhil.kumar_6_5">
                                <FaInstagram className='text-xl md:text-2xl hover:scale-110 duration-150 cursor-pointer' /></a>
                            </li>
                            <li>
                                <a href="https://github.com/nikhilSbup">
                               <FaGithub className='text-xl md:text-2xl hover:scale-110 duration-150 cursor-pointer'/> </a>
                            </li>
                        </ul>
                    </div>
                    <div className='space-y-1'>
                        <h1 className='font-bold'>Currently working on</h1>
                        <div className='flex space-x-4'>
                            <SiMongodb  className='text-xl md:text-2xl hover:scale-110 duration-150'/>
                            <SiExpress className='text-xl md:text-2xl hover:scale-110 duration-150'/>
                            <FaReact className='text-xl md:text-2xl hover:scale-110 duration-15]'/>
                            <FaNodeJs className='text-xl md:text-2xl hover:scale-110 duration-150' />
                            <FaGithub className='text-xl md:text-2xl hover:scale-110 duration-150'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='md:w-1/2 md:ml-48 md:mt-20 order-1'>
                <img src={pic2} className='rounded-full md:w-[450px] md:h-[450px]' alt="coder" />
            </div>
        </div>
    </div>
    <hr />
    </>
  )
}

export default Home