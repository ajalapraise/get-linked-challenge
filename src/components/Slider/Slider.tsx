
import Image from 'next/image'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import introImg from '../../../public/landingPage/intro-img.png'

import rulesImg from '../../../public/landingPage/rules-img.png'

import criteriaImg from '../../../public/landingPage/criteria-img.png'

import question from '../../../public/landingPage/question.png'

import prize from '../../../public/landingPage/prize-img.png'
import { useState } from 'react';




const MySlider1 = () => {
    const imageData = [
        {
            url: introImg,
            description: 'Image 1',
        },
        {
            url: criteriaImg,
            description: 'Image 2',
        },
        {
            url: rulesImg,
            description: 'Image 3',
        },
        {
            url: question,
            description: 'Image 4',
        },
        {
            url: prize,
            description: 'Image 5',
        },
    ];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === imageData.length - 1 ? 0 : prevIndex + 1
        );
    };
    return (
        <div className="image-gallery relative">
            {/* {imageData.map((image, index) => (
                <div
                    key={index}
                    className={`${index === currentImageIndex ? "z-50" : ""}image-container relative w-[400px] border-[1px] bg-purple1 flex justify-center items-center border-[red] h-[400px] right-20`}
                    style={{
                        position: "absolute",
                        zIndex: imageData.length - index,
                        top: `${index * 30}px`,
                        transform: `translateY(${index * 5}px) scale(${1 - index * 0.05})`,
                        display: index === currentImageIndex ? 'block' : '',
                    }}
                >
                    <Image src={image.url} alt={image.description} />
                </div>
            ))}
            <button onClick={nextImage} className='text-[yellow]'>Next</button> */}

        </div>
    );
};


export default MySlider1;
