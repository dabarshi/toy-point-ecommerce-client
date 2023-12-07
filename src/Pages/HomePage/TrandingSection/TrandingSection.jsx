import './TrandingSection.css';
import luffy from '../../../assets/tranding/luffy.png'
import luffy2 from '../../../assets/tranding/luffy2.png'
import ace from '../../../assets/tranding/Ace.png';
import ace2 from '../../../assets/tranding/Ace2.png';
import zoro from '../../../assets/tranding/zoro.png';
import superman from '../../../assets/tranding/superman-henry-cavill.png';
import hulk from '../../../assets/tranding/hulk.png';


import Marquee from "react-fast-marquee";

// import { FaAngleRight } from "react-icons/fa";
// import { FaAngleLeft } from "react-icons/fa";


const TrandingSection = () => {
    // const sliderContainer = document.querySelector('.container');

    // const btnRight = () => {
    //     let width = sliderContainer.clientWidth;
    //     sliderContainer.scrollLeft = sliderContainer.scrollLeft + width;
    //     console.log(sliderContainer.scrollWidth);


    // }
    // const btnLeft = () => {
    //     let width = sliderContainer.scrollWidth;
    //     sliderContainer.scrollLeft = sliderContainer.scrollLeft - width;
    // }


    const trandingToy = [
        {
            id: '01',
            toyName: "Monkey D. Luffy",
            imgUrl: luffy2
        },
        {
            id: '02',
            toyName: "Ace",
            imgUrl: ace2
        },
        {
            id: '03',
            toyName: "Zoro",
            imgUrl: zoro
        },
        {
            id: '04',
            toyName: "Superman",
            imgUrl: superman
        },
        {
            id: '05',
            toyName: "Hulk",
            imgUrl: hulk
        },
        {
            id: '06',
            toyName: "Monkey D. Luffy",
            imgUrl: luffy
        },
        {
            id: '07',
            toyName: "Ace",
            imgUrl: ace
        }
    ]


    return (
        <div className='tranding-section-container'>
            <div className='tranding-title-container'>
                <h2>Tranding</h2>
            </div>
            <div className='container flex relative'>
                <Marquee pauseOnHover >
                    {
                        trandingToy.map(toy => <div
                            key={toy.id}
                            className='flex tranding-toy-card'>
                            <div className='tranding-toy-name-container flex'>
                                <p>{toy.id}</p>
                                <h6>{toy.toyName}</h6>
                            </div>
                            <div className='tranding-img-container flex'>
                                <img src={toy.imgUrl} alt={toy.toyName} />
                            </div>
                        </div>)
                    }
                </Marquee>
                {/* <div className='flex tranding-slider-btn-container'>
                    <button onClick={btnRight}>
                        <FaAngleRight />
                    </button>
                    <button onClick={btnLeft}>
                        <FaAngleLeft />
                    </button>
                </div> */}
            </div>


        </div>
    );
};

export default TrandingSection;