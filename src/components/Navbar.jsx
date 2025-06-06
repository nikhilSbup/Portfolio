import React, { useState } from 'react'
import pic from "/main_photo.jpg"
import { MdMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { Link} from 'react-scroll';


const Navbar = () => {
    const [menu,setMenu]= useState(false)
    const navItems=[
        {
            id:1,
            Text:"Home"
        },
        {
            id:2,
            Text:"About"
        },
        {
            id:3,
            Text:"Portfolio"
        },
        {
            id:4,
            Text:"Experience"
        },
        {
            id:5,
            Text:"Contact"
        }
    ]
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 bottom-0 bg-white'>
        <div className='flex justify-between items-center h-16'>
            <div className='flex space-x-2 '> 
                <img src={pic} className='h-12 w12 rounded-full' alt="" />
                <h1>Nikhi<span className='text-green-600 text-2xl'>l</span>
                    <p className='text-sm'>Web devloper</p>
                </h1>
            </div>
    {/*Desktop Navbar  */}
            <div className='flex'>
                <ul className='hidden md:flex space-x-8'>
                   {
                    navItems.map(({id,Text}) =>(
                        <li className='hover:scale-105 duration-150 cursor-pointer'
                        key={id}>
                            <Link 
                            to={Text}
                            smooth={true}
                            duration={500}
                            offset={-70}
                            activeClass='active'>
                                {Text}
                            </Link>
                        </li>
                    ))
                   }
                </ul>
            </div>
    {/*menu icon  */}
            <div onClick={()=>setMenu(!menu)} className='md:hidden'>
                {menu? <MdClose size={24}/>:<MdMenu size={24}/>}</div>
        </div>
    {/*mobile Navbar */}
    {
        menu && (
            <div className='bg-white'>
                <ul className='md:hidden flex flex-col h-screen items-center justify-center space-y-3'>
                   {
                    navItems.map(({id,Text}) =>(
                        <li 
                        className='hover:scale-105 duration-150 cursor-pointer font-semibold'
                        key={id}
                        >
                        <Link onClick={()=>setMenu(!menu)}
                        to={Text}
                        smooth={true}
                        duration={500}
                        offset={-70}
                        activeClass='active'
                        >{Text}</Link>
                        </li>
                    ))
                   }
                </ul>
            </div>
        )
    }
            
    </div>
    </>
  )
}

export default Navbar