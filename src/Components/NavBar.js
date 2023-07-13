import React from "react";
import NavBarLink from "./NavBarLinks";

function NavBar() {
    const signStyle = "font-bold w-[100px] text-lg py-2 text-[#3a4343] bg-white rounded-md duration-200 hover:bg-[#3a4343] hidden md:block hover:text-white"
    const navBarMobileStyle = "absolute flex-col items-center hidden py-8 mt-9 space-y-6 font-bold bg-[#8d8b8bc5] left-6 right-6 drop-shadow-2xl text-white"

    const hamburgerFun = () => {
        const btn = document.getElementById('menubtn')
        const nav = document.getElementById('menu')
        const log = document.getElementById('login')

        btn.classList.toggle('open')  // If the class isn't there then add it, if it is there then remove it
        nav.classList.toggle('flex')
        nav.classList.toggle('hidden')
        log.classList.toggle('hidden')
    }

    return(
        <>
        <h1 className="font-bold text-[#3a4343] md:text-2xl text-lg flex justify-center tracking-widest">CLINIC SERVICE</h1>

        <div className="p-2 bg-[#6da9e9] flex justify-around items-center sticky top-[-1px] z-30">
            <h1 className="flex-[0.7] md:text-2xl  font-bold text-white">CLINIC SERVICE</h1>

            <div className="hidden md:block">
                <NavBarLink arr={['Doctors', 'Contact Us', 'My Appointments']}></NavBarLink>
            </div>

            <button id="menubtn" onClick={hamburgerFun} className="block hamburger md:hidden">
                <span className="hamburger-top"></span>
                <span className="hamburger-middle"></span>
                <span className="hamburger-bottom"></span>
            </button>

            <div className="md:hidden">
                <div id="menu" className={navBarMobileStyle}>
                    <NavBarLink arr={['Doctors', 'Contact Us', 'My Appointments']}></NavBarLink>
                    <button id="login" className={signStyle}>Sign In</button>
                </div>
            </div>

            <button className={signStyle}>Sign In</button>
        </div>
        </>
    )
}

export default NavBar