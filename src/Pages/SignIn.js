import React from 'react'
import Footer from "../Components/Footer"
import NavBar from "../Components/NavBar"
import { Link } from 'react-router-dom'

function SignIn() {
    return (
        <>
        <NavBar></NavBar>
        <div className='md:w-[850px] w-[300px] m-auto my-16'>
            <div className='signInBg md:h-[150px] h-[100px]'>
                <div className='makeBlur'>
                    <p className='uppercase h-[100%] flex items-center justify-center text-white font-extrabold tracking-widest text-xl md:text-2xl'>
                        Sign In
                    </p>
                </div>
            </div>

            <div className='text-center pt-11'>
                <form>
                    <label className='text-[#7d7d7d] text-lg md:text-xl'>Username </label>
                    <input type="text" placeholder="Enter Username" className='border-b-2 mb-6 ml-2 md:ml-10 text-lg md:text-xl'></input>
                    <br></br>
                    <label className='text-[#7d7d7d] text-lg md:text-xl'>Password </label>
                    <input type="password" placeholder="Enter Password" className='border-b-2 ml-2 md:ml-10 text-lg md:text-xl'></input>
                    <div className='text-[#7d7d7d] text-base md:text-lg my-8 flex items-center justify-around'>
                        <Link>Forget Your Password?</Link>
                        <input type='submit' value="Submit" className='rounded-full font-bold md:text-base text-xs p-4 md:p-5 uppercase text-white bg-[#7cb2ec] transition-all w-24 md:w-44
                    hover:bg-[#3a434356] hover:border-transparent hover:text-[#3a4343] '></input>
                    </div>
                </form>
            </div>
        </div>
        <Footer></Footer>
        </>
    )
}

export default SignIn