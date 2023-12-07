import './SubMenuDropDown.css';

const SubMenuDropDown = ({ items }) => {
    console.log("items", items);
    return (
        <ul className='list-style-type-none gap-10p'>
            {
                items.map((item, index) => <li

                    key={index}
                >
                    {item}
                </li>)
            }

        </ul>
    );
};

export default SubMenuDropDown;