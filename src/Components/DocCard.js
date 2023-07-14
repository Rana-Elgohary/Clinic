import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { Link } from 'react-router-dom';

function DocCard() {
    const slides = [
        {
            url: 'https://mediclinic.wpengine.com/wp-content/uploads/2016/05/doctor-1.jpg',
        },
        {
            url: 'https://mediclinic.wpengine.com/wp-content/uploads/2017/05/doctor8.jpg',
        },
        {
            url: 'https://mediclinic.wpengine.com/wp-content/uploads/2016/05/doctor-3.jpg',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        // If the first element in the array ==> decrease the length by 1 to get the last element else decrease the index to get the pre ele
        setCurrentIndex(newIndex);
    };
    
    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };
    

    return(
        <>
        <div id='Doctors' className='max-w-[1400px] w-full m-auto py-16 px-4 relative group'>
            <div className='duration-500 flex flex-row justify-evenly items-center'>
                <img src={slides[currentIndex].url} alt='doctor' className='w-[200px] md:w-[500px]'></img>
                <div className='flex flex-col items-center'>
                    <p className='text-xs md:text-lg p-2 md:p-4 font-bold'> Dr. Rana Mohamed</p>
                    <p className='text-xs md:text-lg p-2 md:p-4'>M.D, PH.D</p>
                    <p className='text-xs md:text-lg p-2 md:p-4'>General Pediatrics, Pulmonary</p>
                    <Link to='/doctordetails'>
                        <button className="rounded-md font-bold md:text-base text-xs p-3 md:p-5 uppercase text-white bg-[#7cb2ec] transition-all my-3 md:my-5 md:w-44
                    hover:bg-[#3a434356] hover:border-transparent hover:text-[#3a4343]">View Details</button>  
                    </Link>
                </div>
            </div>

            {/* group ==> name of the parent class */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>

            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactRight onClick={nextSlide}  size={30} />
            </div>

            <div className='flex top-4 justify-center py-2'>
                {slides.map((slide, slideIndex) => (
                    <div
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className='text-2xl cursor-pointer'
                    >
                        <RxDotFilled />
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}

export default DocCard