import { useState } from 'react';

import './SubMenuBar.css';
import SubMenuDropDown from '../SubMenuDropDown/SubMenuDropDown';
import { popularBrand } from '../../data/brands.data';
import { ageLimit } from '../../data/ages.data';
import { categoryList } from '../../data/categories.data';
// import SubMenuDropDown from '../SubMenuDropDown/SubMenuDropDown';


import { RxTriangleDown, RxTriangleUp } from "react-icons/rx";

const SubMenuBar = () => {
    console.log(popularBrand);
    const [activeMenu, setActiveMenu] = useState(null);
    // const [isHover, setIsHover] = useState(false);

    const handleMenuHover = (menuIndex) => {
        setActiveMenu(menuIndex);
    }

    const handleMenuLeave = () => {
        setActiveMenu(null);
    }

    return (
        // className sub-menu-container
        <div className="relative mt-1em pt-2em bg-nav-color">
            <div className='pb-2em'>
                <ul className='align-justify-center list-style-type-none gap-30p font-w-500'>
                    <li
                        className='cursor-pointer'
                        onMouseEnter={() => handleMenuHover(1)}
                        onMouseLeave={handleMenuLeave}
                    >
                        <div className='align-justify-center gap-5p'>
                            Shop By Brands
                            {
                                activeMenu === 1 ?
                                    <RxTriangleUp /> :
                                    <RxTriangleDown />
                            }
                        </div>
                    </li>
                    <li
                        className='cursor-pointer'
                        onMouseEnter={() => handleMenuHover(2)}
                        onMouseLeave={handleMenuLeave}
                    >
                        <div className='align-justify-center gap-5p'>
                            Shop By Ages
                            {
                                activeMenu === 2 ?
                                    <RxTriangleUp /> :
                                    <RxTriangleDown />
                            }
                        </div>
                    </li>
                    <li
                        className='cursor-pointer'
                        onMouseEnter={() => handleMenuHover(3)}
                        onMouseLeave={handleMenuLeave}
                    >
                        <div className='align-justify-center gap-5p'>
                            Shop By Categories
                            {
                                activeMenu === 3 ?
                                    <RxTriangleUp /> :
                                    <RxTriangleDown />
                            }
                        </div>
                    </li>
                </ul>

                <div className='sub-menu-dropdown-container'>

                    {
                        activeMenu === 1 && (
                            <div
                                onMouseEnter={() => handleMenuHover(1)}
                                onMouseLeave={handleMenuLeave}
                            >
                                <SubMenuDropDown items={popularBrand} />
                            </div>
                        )
                    }
                    {
                        activeMenu === 2 && (
                            <div
                                onMouseEnter={() => handleMenuHover(2)}
                                onMouseLeave={handleMenuLeave}
                            >
                                <SubMenuDropDown items={ageLimit} />
                            </div>
                        )
                    }
                    {
                        activeMenu === 3 && (
                            <div
                                onMouseEnter={() => handleMenuHover(3)}
                                onMouseLeave={handleMenuLeave}
                            >
                                <SubMenuDropDown items={categoryList} />
                            </div>
                        )
                    }

                </div>
            </div>
        </div>
    );
};

export default SubMenuBar;