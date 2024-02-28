import React, { useState } from 'react'
import { navbar } from '../../data/navbar'
import { Link, useNavigate } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const Navlinks = (props) => {
    const navigate = useNavigate()
    const [heading, setHeading] = useState("")
    const [subHeading, setSubHeading] = useState("")
    return (
        <>
            {navbar.map((val, index) => (
                <div>
                    <div className='px-3 text-left group'>
                        <Link to={val.url} onClick={props.toggleSidebar}>
                            <h1 className='py-7 flex justify-between items-center md:pr-0 pr-5 group cursor-pointer' onClick={() => {
                                heading !== val.title ? setHeading(val.title) : setHeading(''); setSubHeading("");
                            }}>{val.title}
                            </h1>
                        </Link>
                    </div>
                    {/* MOBILE MENU */}
                    {/* <div className={`${heading === val.title ? 'md:hidden' : 'hidden'}`}>
                        {val.sublinks.map((slinks) => (
                            <div>
                                <div>
                                    <h1 onClick={() => subHeading !== slinks.Head ? setSubHeading(slinks.Head) : setSubHeading("")} className='py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center'>{slinks.Head}
                                        <span className='text-xl md:mt-1 md:ml-2 inline '>
                                            {subHeading === slinks.Head ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                        </span>
                                    </h1>
                                    <div>
                                        <div className={`${subHeading === slinks.Head ? "md:hidden" : "hidden"
                                            }`}>
                                            {slinks.sublink.map(slink => (
                                                <li className='py-3 pl-14'>
                                                    <Link to="/category" className='hover:text-gray-600 text-gray-200' onClick={props.togglePopup}>
                                                        {slink.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div> */}
                </div >
            ))}
        </>
    )
}

export default Navlinks