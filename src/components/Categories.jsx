import React, { useEffect, useRef, useState } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
const TRANSLATE_AMOUNT = 200;

const Categories = ({ categories }) => {
    const navigate = useNavigate()
    const [translate, setTranslate] = useState(0);
    const [isLeftVisible, setIsLeftVisible] = useState(false);
    const [isRightVisible, setIsRightVisible] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        if (containerRef.current == null) return;

        const observer = new ResizeObserver((entries) => {
            const container = entries[0]?.target;
            if (container == null) return;

            setIsLeftVisible(translate > 0);
            setIsRightVisible(translate + container.clientWidth < container.scrollWidth);
        });

        observer.observe(containerRef.current);

        return () => {
            observer.disconnect();
        };
    }, [categories, translate]);
    return (
        <>
            <div>
                <div className='w-full bg-white py-20 px-4 text-black'>
                    <div className='max-w-[1240px] mx-auto'>
                        <div className='flex items-center gap-2 cursor-pointer hover:underline underline-offset-2' onClick={() => {
                            navigate("/category")
                        }}>
                            <h1 className='font-semibold text-xl'>Categoies</h1>
                            <FaArrowRight size={20} />
                        </div>
                        <div ref={containerRef} className="relative overflow-x-hidden">
                            <div
                                className="flex whitespace-nowrap gap-3 transition-transform w-[max-content] h-72 items-center"
                                style={{ transform: `translateX(-${translate}px)` }}
                            >
                                {categories.map((val, index) => (
                                    <>
                                        <div key={index} className='h-64 w-48 bg-white flex justify-center text-black rounded-xl items-center overflow-hidden hover:scale-105 duration-300 relative cursor-pointer' onClick={() => {
                                            navigate('/category', { state: { name: val.name } })
                                        }}>
                                            <img src={val.image} alt="/" className='w-40 mt-[-2rem]' />
                                            <div className='absolute bottom-0 text-black p-2 text-center w-full'>
                                                <h1>{val.name}</h1>
                                            </div>
                                        </div>
                                    </>
                                ))}
                            </div>
                            {isLeftVisible && (
                                <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-white from=10% md:from-50% to-transparent w-12 md:w-20 h-full">
                                    <button
                                        className="h-full aspect-square w-10 p-1.5 flex justify-center items-center"
                                        onClick={() => {
                                            setTranslate((translate) => {
                                                const newTranslate = translate - TRANSLATE_AMOUNT;
                                                if (newTranslate <= 0) return 0;
                                                return newTranslate;
                                            });
                                        }}
                                    >
                                        <MdKeyboardArrowLeft size={30} />
                                    </button>
                                </div>
                            )}
                            {isRightVisible && (
                                <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-l from-white from-10% md:from-50% to-transparent w-12 md:w-20 h-full flex justify-end">
                                    <button
                                        className="h-full aspect-square w-10 flex justify-center items-center"
                                        onClick={() => {
                                            setTranslate((translate) => {
                                                if (containerRef.current == null) {
                                                    return translate;
                                                }
                                                const newTranslate = translate + TRANSLATE_AMOUNT;
                                                const edge = containerRef.current.scrollWidth;
                                                const width = containerRef.current.clientWidth;
                                                if (newTranslate + width >= edge) {
                                                    return edge - width;
                                                }
                                                return newTranslate;
                                            });
                                        }}
                                    >
                                        <MdKeyboardArrowRight size={30} />
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div >

        </>

    );
};

export default Categories;
