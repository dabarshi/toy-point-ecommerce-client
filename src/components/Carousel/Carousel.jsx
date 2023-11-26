import { useState, useEffect } from 'react';
import './Carousel.css';


import img1 from "../../assets/carousel/1.jpg"
import img2 from "../../assets/carousel/2.png"
import img3 from "../../assets/carousel/3.jpg"
import img4 from "../../assets/carousel/4.jpg"


import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";

const Carousel = () => {
    // const images = [img1, img2, img3, img4];
    const images = [
        {
            id: 1,
            title: "Captain America and Iron Man",
            tags: ['Marvel Cinematic Universe', 'MCU'],
            description: "Marvel Avengers Titan Hero Series Collectible 12-Inch Captain America Action and Iron Man Figure, Toy For Ages 4 and Up",
            imgUrl: img1,
        },
        {
            id: 2,
            title: "Deadpool",
            tags: ['Marvel Comics', 'MCU'],
            description: "Tamashii Nations - Deadpool 2, S.H. Figuarts Action Figure",
            imgUrl: img2,
        },
        {
            id: 3,
            title: "Naruto",
            tags: ['Japanese Manga', 'Anime', 'Naruto Uzumaki'],
            description: "Anime Heroes - Naruto - Naruto Final Battle Action Figure",
            imgUrl: img3,
        },
        {
            id: 4,
            title: "Monkey D. Luffy",
            tags: ['Japanese Manga', 'Anime', 'Straw Hat'],
            description: "Anime Heroes - One Piece - Monkey D. Luffy Dressrosa Verison Action Figure",
            imgUrl: img4,
        },
    ]


    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 30000); // Change image every 30 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    const changeImage = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className='carousel-container'>
            <div className="carousel">
                {/* Left side text */}
                <div className="text-section">
                    {/* Your five rows of text */}
                    <p className='carousel-subtitle'>#{images[currentIndex].id} Spotlight</p>
                    <h1 className='carousel-title'>{images[currentIndex].title}</h1>
                    {
                        images[currentIndex].tags.map((tag, index) => <span key={index} className='carousel-tags'><small>#{tag}</small></span>)
                    }
                    <p className='carousel-description'>{images[currentIndex].description}</p>
                    <button className='carousel-btn'>Buy Now</button>
                    <button className='carousel-login-btn'>Log In</button>
                </div>

                {/* Right side images */}
                <div className="image-section">

                    <img src={images[currentIndex].imgUrl} alt={images[currentIndex].title} />
                    {/* Buttons to change images */}
                    <button onClick={() => changeImage((currentIndex + 1) % images.length)}>
                        <FaAngleRight />
                    </button>
                    <button onClick={() => changeImage((currentIndex - 1 + images.length) % images.length)}>
                        <FaAngleLeft />
                    </button>
                    <div className='img-gradient'></div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;