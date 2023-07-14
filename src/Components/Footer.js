import {
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
    return(
        <>
        <footer className="footer bg-[#7cb2ec] w-[100%]">
            <div className="flex flex-col-reverse justify-around px-6 md:py-10 space-y-8 md:flex-row md:space-y-0">
                <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-center">
                    <div className="mx-auto my-6 text-center text-white md:hidden">
                        Copyright &copy; 2022, All Rights Reserved
                    </div>

                    <div>
                        <h1 className="font-bold text-white text-2xl flex justify-center tracking-widest">CLINIC SERVICE</h1>
                    </div>

                    <div className='flex justify-between md:w-[75%] my-6'>
                    <FaFacebookSquare size={30} color='#3b5998' className='bg-white rounded text-lg'/>
                    <FaInstagram size={30} color='#962fbf ' className='bg-white rounded text-lg'/>
                    <FaTwitterSquare size={30} color='#1DA1F2' className='bg-white rounded text-lg'/>
                    <FaGithubSquare size={30} color='#171515' className='bg-white rounded text-lg'/>
                    </div>
                </div>

                <div className="flex justify-around space-x-32">
                    <div className="flex flex-col space-y-3 text-white">
                        <Link to="/" className="hover:text-brightRed">Home</Link>
                        <Link to="/" className="hover:text-brightRed">Pricing</Link>
                        <Link to="/" className="hover:text-brightRed">About</Link>
                    </div>
                    <div className="flex flex-col space-y-3 text-white">
                        <Link to="/" className="hover:text-brightRed">Careers</Link>
                        <Link to="/" className="hover:text-brightRed">Community</Link>
                        <Link to="/" className="hover:text-brightRed">Privacy Policy</Link>
                    </div>
                </div>

                <div className="flex flex-col justify-between items-center">
                    <div className="flex space-x-3">
                        <button className="rounded-full font-bold md:text-base text-xs p-5 uppercase bg-white transition-all my-2 w-32
                            hover:opacity-50">Contact</button>
                    </div>
                    <div className="hidden text-white md:block">
                        Copyright &copy; 2022, All Rights Reserved
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer