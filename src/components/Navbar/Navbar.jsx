import './Navbar.css';
import logo from '/logo.svg'
import { useState } from 'react';
import { randomHello } from '../../utilities/randomHello';

import { FaHome } from "react-icons/fa";
import { TiAdjustBrightness } from "react-icons/ti";
import { CiDark } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from "react-icons/ai";





const Navbar = () => {

    const [theme, setTheme] = useState('dark');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);


    const handleSidebarToggle = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }



    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        setTheme(newTheme); // Update the state variable
    };






    // demo user image link
    const demoUserImgLink = `https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`;

    return (
        <nav>
            <ul>
                <li>
                    <div onClick={handleSidebarToggle} className='sidebar-icon-container'>
                        <GiHamburgerMenu className="sidebar-icon" />
                    </div>
                </li>
                <li>
                    <Link to="/">
                        <div className='home-icon-container'>
                            <FaHome className='home-icon' />
                        </div>
                    </Link>
                </li>
                <li>
                    <div className='shopping-cart-container'>
                        <AiOutlineShoppingCart className='shopping-cart-icon' />
                    </div>
                </li>
                <li>
                    <div className='greetings-container'>
                        <p className='greetings'>{randomHello()}</p>
                    </div>
                </li>
            </ul>
            <img className='logo' src={logo} alt="" />
            <ul>

                <li>
                    <div className="search-container">
                        <input type="text" placeholder="Search..." className="search-input" />
                        <FaSearch className='search-icon' />
                    </div>
                </li>
                <li>
                    <button className='dark-mode-toggle' onClick={toggleTheme}>
                        {theme === 'light' ?
                            <CiDark /> :
                            <TiAdjustBrightness />
                        }</button>
                </li>
                <li>
                    <div className='dropdown-container'>
                        <div className='user-img-container'>
                            <img className='user-img' src={demoUserImgLink} alt="" />
                        </div>
                        <div className='dropdown-icon-container'>
                            <IoMdArrowDropdown className='dropdown-icon' />
                        </div>
                    </div>
                </li>
            </ul>
            {/* side bar */}

            <div className={isSidebarOpen ? 'sidebar-container' : 'display-hidden'}>
                {/* <h1>This is sidebar</h1> */}
                <div className='sidebar-top'>
                    <ul>
                        <li>
                            <div className='sidebar-icon-container'>
                                <GiHamburgerMenu className="sidebar-icon" />
                            </div>
                        </li>
                        <li>
                            <div className='greetings-container'>
                                <p className='greetings'>{randomHello()}</p>
                            </div>
                        </li>
                    </ul>
                    <div onClick={handleSidebarToggle} className='sidebar-close-container'>
                        <RxCross2 className='sidebar-close-icon' />
                    </div>
                </div>
                <div className='sidebar-content'>
                    <ul>
                        <li>
                            <Link to="/">
                                <div className='home-icon-container'>
                                    <FaHome className='home-icon' />
                                    Home
                                </div>
                            </Link>
                        </li>
                        {/* <li>Home</li> */}
                    </ul>
                </div>
            </div>
        </nav >
    );
};

export default Navbar;