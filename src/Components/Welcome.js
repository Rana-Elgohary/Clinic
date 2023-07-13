import React from "react";

function Welcome() {
    return(
        <>
        <div className="flex flex-col items-center my-[1rem] md:my-[5rem] w-[300px] md:w-[730px] mx-auto p-5">
            <h1 className="capitalize font-bold text-xl md:text-4xl">welcome to the clinic</h1>
            <hr className="border-b-8 border-[#7cb2ec] rounded w-24 md:w-40 my-[1rem] md:my-[2rem]"></hr>
            <p className="text-sm md:text-lg">
                It has been the ongoing goal of the clinic to provide comprehensive primary medical care.
                When you have healthcare needs, you need to turn to a doctor who listens and responds..
                an experienced professional who knows the field and can effectively dignose and treat your needs a friendly staff
                who consels you on the best ways to maintain and improve your health.
            </p>
            <button className="rounded-md font-bold text-xs md:text-base p-4 md:p-5 uppercase text-white bg-[#7cb2ec] duration-200 
            my-[2rem] md:my-[3rem] hover:bg-[#3a434356] hover:border-transparent hover:text-[#3a4343]">Contact Us</button>
        </div>
        </>
    )
}

export default Welcome