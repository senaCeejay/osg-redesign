import React from 'react'
import { FaArrowLeft } from "react-icons/fa6";

const ProductDetails = (props) => {
    return (
        <>
            <div className='flex gap-2 p-[.85rem] border-y border-gray-300 mx-1 '>
                <button className='flex items-center gap-3 font-semibold' onClick={props.onClick}>
                    <FaArrowLeft />
                    Product List
                </button>

            </div>
            <div className='p-4'>
                <div className='p-4 flex justify-center'>
                    <img src={props.image} alt="" className='my-[100px]' />
                </div>
                <span>{props.name}</span>
                <h1 className='font-bold text-2xl'>{props.brand}</h1>
                <p>{props.productDescription}</p>
            </div>
        </>
    )
}

export default ProductDetails