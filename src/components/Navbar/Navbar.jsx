import './Navbar.css';
import logo from '/logo.svg'
import { TiAdjustBrightness } from "react-icons/ti";
import { CiDark } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';
import { randomHello } from '../../utilities/randomHello';





const Navbar = () => {

    const [theme, setTheme] = useState('light');




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
                    <div className='sidebar-icon-container'>
                        <GiHamburgerMenu className="sidebar-icon" />
                    </div>
                </li>
                <li className='greetings'>{randomHello()}</li>
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
                        <img className='user-img' src={demoUserImgLink} alt="" />
                        <IoMdArrowDropdown className='dropdown-icon' />
                    </div>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;