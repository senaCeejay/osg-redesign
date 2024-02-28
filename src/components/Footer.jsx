import React from 'react'
import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaTwitterSquare,
} from 'react-icons/fa'
import { footer } from '../data/footer'

const Footer = () => {

    return (
        <div className='max-w-[1240px] mx-auto p-16 px-4 lg:px-4 grid lg:grid-cols-3 grid-cols-1 gap-8 text-white bg-sky-400'>
            <div className='lg:col-span-2'>
                <div className='grid grid-cols-2 md:grid-cols-5'>
                    {footer.map((val) => (
                        <>
                            <div key={val.title} className='md:w-[130px] lg:w-[130px] xl:w-[150px]'>
                                <h6 className='font-bold my-2'>{val.title}</h6>
                                <ul>
                                    {Object.entries(val.link).map(([key, link], linkIndex) => (
                                        <li key={linkIndex} className=''>
                                            <a href="/" className='py-2 text-sm hover:underline'>{link}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </>
                    ))}
                </div>
            </div>
            <div>
                <h1 className='w-full text-xl font-bold'>Subcribe to our newsletter</h1>
                <p>Get the latest updates on new products and upcoming sales</p>
                <div className='flex items-center mt-2'>
                    <input type="text" className=' p-2 w-full outline-none text-gray-500 rounded-l' placeholder='Email Address' />
                    <button className='bg-sky-600 w-[200px] h-[40px] font-medium rounded-r'>Subscribe</button>
                </div>
                <div className='flex items-center gap-5 mt-3'>
                    <p className='font-bold'>Follow Us</p>
                    <div className='flex gap-2'>
                        <a href="https://www.facebook.com/" target='_blank' rel="noopener noreferrer">
                            <FaFacebookSquare size={30} className='rounded-lg' />
                        </a>
                        <a href="https://www.instagram.com/" target='_blank' rel="noopener noreferrer">
                            <FaInstagramSquare size={30} className='rounded-lg' />
                        </a>
                        <a href="https://twitter.com/?lang=en" target='_blank' rel="noopener noreferrer">
                            <FaTwitterSquare size={30} className='rounded-lg' />
                        </a>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Footer