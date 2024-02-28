import React from 'react'
import { brands } from '../data/brands'
const Brands = () => {
    return (
        <>
            <div className='w-full py-[10rem] px-4'>
                <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-8'>
                    {brands.map((val, index) => (
                        <>
                            <div key={index} className='w-full mx-auto rounded-lg hover:scale-105 duration-300 border p-4 bg-white flex flex-col justify-between'>
                                <div className=''>
                                    <img src={val.image} alt="/" className='w-full md:h-72 lg:h-56 rounded-lg mx-autoduration-300 h-56' />
                                    <h1 className='font-bold text-xl my-4'>{val.name}</h1>
                                    <p>{val.description}</p>
                                </div>
                                <div className='flex gap-2 justify-between'>
                                    <button className=' w-[100px] rounded-md font-medium mt-4 py-3 text-sky-400'>Learn More</button>
                                    <button className='bg-sky-400 hover:bg-sky-500 duration-300 w-[150px] rounded-md font-medium mt-4 py-3 text-white'>Order Now</button>
                                </div>

                            </div>
                        </>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Brands