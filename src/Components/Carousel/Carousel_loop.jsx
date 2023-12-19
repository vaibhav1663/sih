import React, { useState, useEffect } from "react";
import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from "react-icons/bs";
import { Typography } from "@material-tailwind/react";

const CarouselSlider = ({ slides }) => {
    const [current, setCurrent] = useState(0);

    const prevSlide = () => {
        if (current === 0) setCurrent(slides.length - 1);
        else setCurrent(current - 1);
    };

    const nextSlide = () => {
        if (current === slides.length - 1) setCurrent(0);
        else setCurrent(current + 1);
    };
    setInterval(() => nextSlide(), 3000);
    return (
        <div className="overflow-hidden relative h-[92%]">
        <div 
        className={`flex transition ease-out duration-400 h-[100%]`}
        style={{
            transform: `translateX(-${current*100}%)`
        }}
        >
            {slides.map((slide)=>{
                return (
                <>
                <img src={slide.imglink} alt="" />
                </>
                )
            })}
            <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
                <div className="w-3/4 pl-24 md:w-2/4 md:pl-20 lg:pl-32">
                    <Typography
                    variant="h1"
                    color="white"
                    className="mb-4 text-2xl md:text-4xl lg:text-5xl"
                    >
                    National Commission for Indian System of Medicine
                    </Typography>
                    <Typography
                    variant="lead"
                    color="white"
                    className="mb-12 text-md opacity-80 lg:text-xl"
                    >
                    The Aims and objectives of the National Commission for Indian System of Medicine are to
                    improve access to quality and affordable Ayurveda, Unani, Siddha and Sowa-Rigpa (AUS&SR) medical education
                    </Typography>
                </div>
            </div>
        </div>
        <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-4xl">
            <button onClick={prevSlide}>
                <BsArrowLeftCircleFill></BsArrowLeftCircleFill>
            </button>
            <button onClick={nextSlide}>
                <BsArrowRightCircleFill></BsArrowRightCircleFill>
            </button>
        </div>
        <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
            {slides.map((s,i)=>{
                return(
                    <div 
                    onClick={()=>{setCurrent(i)}}
                    key={"circle"+i}
                    className={`rounded-full cursor-pointer w-3.5 h-3.5 ${i==current ? "bg-white" : "bg-gray-300"}`}></div>
                )
            })}
        </div>
            <div
                className={`flex transition ease-out duration-400 h-[100%]`}
                style={{
                    transform: `translateX(-${current * 100}%)`,
                }}
            >
                {slides.map((slide, index) => {
                    return <img key={index} src={slide.imglink} alt="" />;
                })}
                <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
                    <div className="w-3/4 pl-24 md:w-2/4 md:pl-20 lg:pl-32">
                        <Typography
                            variant="h1"
                            color="white"
                            className="mb-4 text-2xl md:text-4xl lg:text-5xl"
                        >
                            National Commission for Indian System of Medicine
                        </Typography>
                        <Typography
                            variant="lead"
                            color="white"
                            className="mb-12 text-md opacity-80 lg:text-xl"
                        >
                            The Aims and objectives of the National Commission
                            for Indian System of Medicine are to improve access
                            to quality and affordable Ayurveda, Unani, Siddha
                            and Sowa-Rigpa (AUS&SR) medical education
                        </Typography>
                    </div>
                </div>
            </div>
            <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-4xl">
                <button onClick={prevSlide}>
                    <BsArrowLeftCircleFill></BsArrowLeftCircleFill>
                </button>
                <button onClick={nextSlide}>
                    <BsArrowRightCircleFill></BsArrowRightCircleFill>
                </button>
            </div>
            <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
                {slides.map((s, i) => {
                    return (
                        <div
                            onClick={() => {
                                setCurrent(i);
                            }}
                            key={"circle" + i}
                            className={`rounded-full cursor-pointer w-3.5 h-3.5 ${i == current ? "bg-white" : "bg-gray-300"
                                }`}
                        ></div>
                    );
                })}
            </div>
        </div>
    );
};

export default CarouselSlider;
