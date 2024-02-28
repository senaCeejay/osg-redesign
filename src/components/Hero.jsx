import React from 'react'
import { ReactTyped } from 'react-typed'

const Hero = () => {
    return (
        <div className='text-white bg-sky-400'>
            <div className='max-w-[800px] mt-[-10px] w-full h-screen mx-auto text-center flex flex-col justify-center '>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>All YOUR NEED IS HERE</h1>
                <div className='flex justify-center items-center'>
                    <ReactTyped
                        className='md:text-5xl sm:text-4xl text-xl font-bold'
                        strings={['THREADING',
                            'DRILLING',
                            'MILLING',
                            'INDEXABLE',
                            'COLD FORMING PRODUCTS',
                            'THREAD MILLING',
                            'GAGES',
                            'HOLDERS',
                            'DENTAL',
                        ]}
                        typeSpeed={120}
                        backSpeed={60}
                        loop />
                </div>
                <p className=' font-bold text-gray-200 mt-4'>We bring innovation and excellence to our customers through collaborative partnerships by providing the highest quality cutting tools and cold forming products.</p>
                <button className='bg-white w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-sky-400'>Shop Now</button>
            </div>
        </div>
    )
}

export default Hero