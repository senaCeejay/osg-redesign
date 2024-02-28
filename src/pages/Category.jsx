import React, { useEffect, useState } from 'react'
import { navbar } from '../data/navbar'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { BsFilterLeft } from "react-icons/bs";
import ProductDetails from './ProductDetails';

const Category = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [mobileCategory, setMobileCategory] = useState(false)

    useEffect(() => {
        console.log(screenWidth)
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };
        if (screenWidth <= 767) {
            setMobileCategory(true)
        }
        else {
            setMobileCategory(false)
        }
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [screenWidth]);

    const [headCategory, setHeadCategory] = useState("")
    const [subHeading, setSubHeading] = useState("")
    const [productBrand, setProductBrand] = useState("")
    const [productName, setProductName] = useState("")
    const [productImage, setProductImage] = useState("")
    const [productDescription, setProductDescription] = useState("")
    const [showDetails, setShowDetails] = useState(false)

    const handleShowDetails = (brand, name, image, description) => {
        setShowDetails(!showDetails)
        setProductBrand(brand)
        setProductName(name)
        setProductImage(image)
        setProductDescription(description)

    }

    return (
        <>
            <div className='w-full bg-white'>
                <div className='max-w-[1240px] w-full mx-auto grid md:grid-cols-3 lg:grid-cols-5 '>
                    {/* LEFT */}
                    <div className=' md:pl-4 xl:pl-0 hidden md:block border-r border-gray-200 h-[700px] overflow-scroll'>
                        <h1 className='font-semibold text-lg py-3 px-2 border-b border-gray-300 sticky top-0 bg-white'>All Category</h1>
                        {/* DESKTOP CATEGORY */}
                        {navbar.map((val, index) => (
                            <div>
                                <div>
                                    {val.sublinks.map((slinks) => (
                                        <div>
                                            <div className='flex items-center'>
                                                <img src={slinks.image} alt="/" className='w-[35px]' />
                                                <h1 onClick={() => subHeading !== slinks.Head ? setSubHeading(slinks.Head) : setSubHeading("")} className='py-4 pl-4 font-semibold md:pr-0 w-full pr-5 flex justify-between items-center cursor-pointer'>{slinks.Head}
                                                    <span className='text-xl md:mt-1 md:ml-2 inline mr-4'>
                                                        {subHeading === slinks.Head ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                                    </span>
                                                </h1>
                                            </div>
                                            <div>
                                                <div className={`${subHeading === slinks.Head ? "" : "hidden"
                                                    }`}>
                                                    {slinks.sublink.map(slink => (
                                                        <li className='py-3 pl-16 list-none'>
                                                            <Link className='hover:text-gray-600 hover:underline text-black' onClick={() => {
                                                                setHeadCategory(slink.name)
                                                                setShowDetails(false)
                                                            }}>
                                                                {slink.name}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* RIGHT */}
                    {showDetails ?
                        <>
                            <div className='col-span-2 lg:col-span-4 relative'>
                                <ProductDetails brand={productBrand} name={productName} image={productImage} onClick={handleShowDetails} productDescription={productDescription} />
                            </div>
                        </>
                        :
                        <>
                            <div className='col-span-2 lg:col-span-4 relative'>
                                {!mobileCategory &&
                                    <div className='md:hidden flex items-center p-4 border-b gap-3 border-gray-300'>
                                        <button onClick={() =>
                                            setMobileCategory(true)}>
                                            <BsFilterLeft size={30} />
                                        </button>
                                        <p>Category</p>
                                    </div>
                                }
                                <div className={`${headCategory && "border-b border-gray-300"} hidden md:block mx-1 `}>
                                    <h1 className='font-semibold p-[.74rem] text-lg hidden md:block'>{headCategory}</h1>
                                </div>
                                {showDetails === false ?
                                    // PRODUCTCARD
                                    <div className={`grid md:grid-cols-2 lg:grid-cols-4 px-4 gap-3 col-span-2 z-0 ${(showDetails === true || mobileCategory === true) && 'hidden'} pb-[120px] mt-3 `}>
                                        {
                                            products.map((val, index) => (
                                                <>
                                                    {headCategory === val.name &&
                                                        <>
                                                            {val.list.map((i, index) => (
                                                                <>
                                                                    <div key={index} className=' border border-gray-200 hover:shadow-lg flex flex-col justify-around text-black rounded-xl items-center overflow-hidden hover:scale-105 duration-300 relative cursor-pointer' onClick={() => {
                                                                    }}>
                                                                        <img src={i.image} alt="/" className='p-4' />
                                                                        <div className=' w-full p-3 border-t relative'>
                                                                            <span className='text-sm'>{i.name}</span>
                                                                            <h1 className='font-semibold truncate'>{i.brand}</h1>
                                                                        </div>
                                                                        <div className='flex w-full items-center justify-between px-3 pb-3'>
                                                                            <button className='bg-sky-400 hover:bg-sky-500 duration-300 text-white p-2 rounded' onClick={() => {
                                                                                handleShowDetails(i.brand, i.name, i.image, i.description)
                                                                            }}>Details</button>
                                                                        </div>

                                                                    </div >
                                                                </>
                                                            ))}
                                                        </>}
                                                </>
                                            ))
                                        }
                                    </div>
                                    :
                                    ""
                                }
                            </div>
                        </>
                    }
                    {/* MOBILE CATEGORY */}
                    {mobileCategory &&
                        <div >
                            {navbar.map((val, index) => (
                                <div key={index}>
                                    <div >
                                        {val.sublinks.map((slinks) => (
                                            <div className='pl-[70px]'>
                                                <div className='flex items-center w-full'>
                                                    <img src={slinks.image} alt="/" className='w-[35px]' />
                                                    <h1 onClick={() => subHeading !== slinks.Head ? setSubHeading(slinks.Head) : setSubHeading("")} className='py-4 pl-4 font-semibold md:pr-0 w-full pr-5 flex justify-between items-center cursor-pointer'>{slinks.Head}
                                                        <span className='text-xl md:mt-1 md:ml-2 inline'>
                                                            {subHeading === slinks.Head ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                                        </span>
                                                    </h1>
                                                </div>
                                                <div>
                                                    <div className={`${subHeading === slinks.Head ? "" : "hidden"
                                                        }`}>
                                                        {slinks.sublink.map(slink => (
                                                            <li className='py-3 pl-16 list-none'>
                                                                <Link className='hover:text-gray-600 hover:underline text-black' onClick={() => {
                                                                    setHeadCategory(slink.name)
                                                                    setMobileCategory(false)
                                                                }}>
                                                                    {slink.name}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    }
                </div>
            </div >
        </>
    )
}

export default Category