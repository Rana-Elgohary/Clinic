import React from 'react'
import Footer from "../Components/Footer"
import NavBar from "../Components/NavBar"

function DoctorDetails() {
    return (
        <>
        <NavBar></NavBar>
        <div className='flex items-center justify-around md:flex-row flex-col my-5'>
            <img src='https://mediclinic.wpengine.com/wp-content/uploads/2016/05/doctor-1.jpg' alt='doctor' 
            className='w-[110px] md:w-[500px]'></img>
            <div className='flex flex-col justify-center'>
                <div className='flex'>
                    <p className='text-xs md:text-2xl p-2 md:p-4 font-bold'> Dr. Rana Mohamed</p>
                    <p className='text-xs md:text-2xl p-2 md:p-4'>M.D, PH.D</p>
                    <p className='text-xs md:text-2xl p-2 md:p-4'>General Pediatrics, Pulmonary</p>
                </div>
                <div className='flex md:flex-row flex-col items-center'>
                    <div className='bg-[#7cb2ec] text-white w-[250px] md:w-[300px] p-2 md:p-5'>
                        <h1 className='py-3 md:py-5 text-center text-md md:text-3xl font-bold tracking-wider'>Saturday</h1>
                        <p className='py-2 ml-3 text-sm md:text-md'>8:00 - 8:30</p>
                        <hr className='m-auto'></hr>
                        <p className='py-2 ml-3  text-sm md:text-md'>8:30 - 9:00</p>
                        <hr className='m-auto'></hr>
                        <p className='py-2 ml-3  text-sm md:text-md'>9:00 - 9:30</p>
                        <hr className='m-auto'></hr>
                        <p className='py-2 ml-3  text-sm md:text-md'>9:30 - 10:00</p>
                        <hr className='m-auto'></hr>
                        <p className='py-2 ml-3  text-sm md:text-md'>10:00 - 10:30</p>
                        <hr className='m-auto'></hr>
                    </div>
                    <div className='bg-[#579be3] text-white w-[250px] md:w-[300px] p-2 md:p-5'>
                        <h1 className='py-3 md:py-5 text-center text-md md:text-3xl font-bold tracking-wider'>Saturday</h1>
                        <p className='py-2 ml-3 text-sm md:text-md'>8:00 - 8:30</p>
                        <hr className='m-auto'></hr>
                        <p className='py-2 ml-3  text-sm md:text-md'>8:30 - 9:00</p>
                        <hr className='m-auto'></hr>
                        <p className='py-2 ml-3  text-sm md:text-md'>9:00 - 9:30</p>
                        <hr className='m-auto'></hr>
                        <p className='py-2 ml-3  text-sm md:text-md'>9:30 - 10:00</p>
                        <hr className='m-auto'></hr>
                        <p className='py-2 ml-3  text-sm md:text-md'>10:00 - 10:30</p>
                        <hr className='m-auto'></hr>
                    </div>
                    <div className='bg-[#3685d8] text-white w-[250px] md:w-[300px] p-2 md:p-5'>
                        <h1 className='py-3 md:py-5 text-center text-md md:text-3xl font-bold tracking-wider'>Saturday</h1>
                        <p className='py-2 ml-3 text-sm md:text-md'>8:00 - 8:30</p>
                        <hr className='m-auto'></hr>
                        <p className='py-2 ml-3  text-sm md:text-md'>8:30 - 9:00</p>
                        <hr className='m-auto'></hr>
                        <p className='py-2 ml-3  text-sm md:text-md'>9:00 - 9:30</p>
                        <hr className='m-auto'></hr>
                        <p className='py-2 ml-3  text-sm md:text-md'>9:30 - 10:00</p>
                        <hr className='m-auto'></hr>
                        <p className='py-2 ml-3  text-sm md:text-md'>10:00 - 10:30</p>
                        <hr className='m-auto'></hr>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
        </>
    )
}

export default DoctorDetails