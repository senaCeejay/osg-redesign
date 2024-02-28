import React from 'react'
import Jobhunt from '../assets/jobhuntamico.png'
const BestPlaceToWork = () => {
    return (
        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[300px] md:w-[400px] mx-auto my-4' src={Jobhunt} alt="/" />
                <div className='flex flex-col justify-center'>
                    <p className='text-sky-400 font-bold'>Join Our Team</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl py-2 font-bold'>Best Place to Work</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, aut libero? Sapiente quos enim consectetur incidunt laboriosam? Est dignissimos suscipit at ab et odio natus porro, aspernatur veritatis exercitationem vero!</p>
                    <button className='bg-sky-400 w-[200px] rounded-md font-medium my-4 py-3 text-white'>See Openings</button>
                </div>
            </div>
        </div>
    )
}

export default BestPlaceToWork