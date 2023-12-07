import './SubMenuItems.css';
import { useState } from 'react';

import { RxTriangleDown, RxTriangleUp } from "react-icons/rx";
import { Link } from 'react-router-dom';

const SubMenuItems = ({ item }) => {
    const [isHover, setIsHover] = useState(false);

    return (
        <div
            className='sub-menu-item'
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            {item}
            {
                isHover ?
                    <RxTriangleUp /> :
                    <RxTriangleDown />
            }

            <div className='sub-menu-drop-down-container'>
                <ul>
                    <li>
                        <Link>Brand</Link>
                    </li>

                </ul>
            </div>

        </div>
    );
};

export default SubMenuItems;