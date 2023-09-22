import { Link, NavLink } from "react-router-dom";
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from "react";
import './Navbar.css';

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);

    const handleMenu = () => {
        setShowMenu(!showMenu);
    }

    const handleClick = () => {
        setShowMenu(false);
    }

    return (
        <nav>

            <div className="w-11/12 mx-auto my-5 hidden md:flex justify-between items-center">
                <div className="">
                    <Link to="/" className="text-2xl xl:text-3xl font-extrabold text-dark1">CareerHub</Link>
                </div>

                <div className="flex gap-5 list-none lg:w-1/4 justify-between lg:text-sm xl:text-base">
                    <li><NavLink to="/statistics" className="text-dark3 font-medium">Statistics</NavLink></li>
                    <li><NavLink to="/applied-jobs" className="text-dark3 font-medium">Applied Jobs</NavLink></li>
                    <li><NavLink to="/blog" className="text-dark3 font-medium">Blog</NavLink></li>
                </div>

                <div>
                    <button className="px-5 py-2 lg:text-sm xl:text-base bg-gradient-to-r from-primary1 to-primary2 text-white font-extrabold rounded-lg active:scale-95 transition-transform">Start Applying</button>
                </div>
            </div>

            <div className="w-11/12 mx-auto my-5 md:hidden">
                <div className="flex items-center">
                    <GiHamburgerMenu onClick={handleMenu} className="text-2xl text-dark1 mr-2" />
                    <Link to="/" className="text-2xl font-extrabold text-dark1">CareerHub</Link>
                </div>
                <div className={`fixed top-16 p-8 bg-white list-none border-2 border-primary2 space-y-3 rounded-lg ${showMenu || 'hidden'}`}>
                    <li><NavLink onClick={handleClick} to="/statistics" className="text-dark3 font-medium">Statistics</NavLink></li>
                    <li><NavLink onClick={handleClick} to="/applied-jobs" className="text-dark3 font-medium">Applied Jobs</NavLink></li>
                    <li><NavLink onClick={handleClick} to="/blog" className="text-dark3 font-medium">Blog</NavLink></li>
                    <button className="px-4 py-2 text-sm bg-gradient-to-r from-primary1 to-primary2 text-white font-extrabold rounded-lg active:scale-95 transition-transform">Start Applying</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;