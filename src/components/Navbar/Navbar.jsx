import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Navlinks from './Navlinks'
import { IoIosArrowDown } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
const Navbar = () => {
    const location = useLocation();
    console.log(location.state?.display)
    const [sidenav, setSidenav] = useState(false)
    const toggleSidebar = () => {
        setSidenav(false);
    }
    const togglePopup = () => {
        setSidenav(!sidenav);
        document.body.style.overflow = sidenav ? 'auto' : 'hidden';
    };
    return (

        <>
            <nav className='bg-sky-400 text-white z-50 mx-auto max-w-[1240px]'>
                <div className='flex items-center font-medium justify-between'>
                    <div className='z-50 bg-sky-400 p-5 md:w-auto w-full flex items-center justify-between'>
                        <Link to="/">
                            <h1 className='md:cursor-pointer text-2xl' >OSG</h1>
                        </Link>
                        <div className='text-3xl md:hidden' onClick={() => togglePopup()}>
                            {sidenav ? <IoMdClose size={30} /> : <IoMenu size={30} />}
                        </div>
                    </div>
                    {/* DESKTOP NAV */}
                    <div className='flex items-center'>
                        <ul className='md:flex hidden uppercase items-centr'>
                            <li>
                                <Link to='/' className='py-7 px-3 inline-block'>
                                    Home
                                </Link>
                            </li>
                            <Navlinks togglePopup={togglePopup} />
                        </ul>
                        <div className='md:block hidden ml-2'>
                            <button className='bg-white text-sky-400 px-6 py-2 rounded-full uppercase w-[130px]'>Sign In</button>
                        </div>
                    </div>
                    {/* MOBILE NAV */}
                    <ul className={`md:hidden overflow-scroll bg-sky-400 absolute w-full h-full bottom-0 z-10 pt-24 duration-500 ${sidenav ? 'left-0' : 'left-[-100%]'}`}>
                        <>
                            <Link to='/' className='py-7 px-3 inline-block' onClick={() => { setSidenav(false) }}>
                                Home
                            </Link>
                        </>
                        <Navlinks togglePopup={togglePopup} toggleSidebar={toggleSidebar} />
                        <div className='py-5 flex justify-center w-full'>
                            <button className='bg-white text-sky-400 px-6 py-2 rounded-full w-[200px]'>Sign In</button>
                        </div>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar