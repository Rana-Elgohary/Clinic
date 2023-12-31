import React from "react";
import sign from "../img/Mobile login-amico.svg"

function RememberToSign() {
    return(
        <>
        <div className="bg-[#7cb2ec] relative h-[26rem] md:h-[40rem]">
            <div className="bg-white absolute top-16 left-24 md:left-auto md:right-40 px-8 md:px-10 py-3 md:py-8 flex flex-col w-[70%] md:w-[50%]">
                <div className="pl-[12%] md:pl-[40%]">
                    <h1 className="capitalize font-bold text-xl md:text-4xl my-3 md:my-5">Don't mess To sign up</h1>
                    <p className="md:text-base text-xs">Sign up to our website and stay up to date. Make your appointments with your doctor, Just by making an account</p>
                    <p className="my-3 md:my-5 md:text-base text-xs">The registeration will not take too long.</p>
                    <button className="rounded-md font-bold md:text-base text-xs p-2 md:p-5 uppercase text-white bg-[#7cb2ec] transition-all my-3 md:my-5 px-6 md:px-14 md:w-44
                hover:bg-[#3a434356] hover:border-transparent hover:text-[#3a4343]">Sign Up</button>  
                </div>
            </div>
            <img src={sign} alt="sign" className="absolute left-[-35px] top-52 md:top-0 md:left-44 rounded-full w-[15rem] md:w-[45rem]"></img>
        </div>
        </>
    )
}

export default RememberToSign