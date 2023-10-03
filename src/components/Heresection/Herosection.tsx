import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { revalia } from "@/styles/font";


import { Button } from "../Button/Button";

import heroImage from "../../../public/herosection/hero-image.png";
import underline from "../../../public/herosection/underline.png";
import star from "../../../public/herosection/white-star.svg";
import linkage from "../../../public/herosection/chain.svg";
import fire from "../../../public/herosection/fire.svg";
import bulb from "../../../public/herosection/bulb.svg";

const Herosection = () => {
    const [countdown, setCountdown] = useState<{ hours: number; minutes: number; seconds: number }>({
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const targetDate = new Date("2023-12-31T23:59:59");

        const updateCountdown = () => {
            const now = new Date();
            const timeRemaining = Math.max(targetDate.getTime() - now.getTime(), 0);

            const hours = Math.floor(timeRemaining / (1000 * 60 * 60));
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

            setCountdown({ hours, minutes, seconds });
        };

        const countdownInterval = setInterval(updateCountdown, 1000);

        // Clear the interval when the component unmounts
        return () => {
            clearInterval(countdownInterval);
        };
    }, []);

    const formatTime = (time: number) => {
        return time < 10 ? `0${time}` : time.toString();
    };

    return (
        <div className={`  justify-evenly relative items-center px-2 md:px-16 pt-6 md:pt-3 border-b-[1px] border-[#FFFFFF2E] w-full`}>
            <div className="flex items-center justify-center md:relative">
                <div className="mt-[-3.5rem] mb-8 md:w-full flex items-center justify-center md:flex md:justify-end md:absolute md:right-0">
                    <h2 className={`text-base  mt-14 md:mt-32 text-center sm:text-[22px] font-bold relative`}>Igniting a Revolution in HR innovation
                        <div className=" absolute md:flex   right-0 w-[90px] h-[7px] sm:w-[145px] md:h-[9px]">
                            <Image src={underline} fill alt="" />
                        </div>

                    </h2>
                </div>
            </div>
            <div className={`w-full flex flex-col items-center md:flex-row`}>
                <div className={`w-full md:w-full space-y-7  flex justify-center flex-col`}>
                    <div className={` space-y-3 md:space-y-0`}>
                        <div className={`flex flex-col items-center text-center md:items-start text-[24px] md:font-extrabold md:relative md:text-[40px] ${revalia.className}`}>
                            <div className="relative">
                                <h2 className="">getlinked Tech </h2>
                                <div className="absolute w-[25px] h-[25px] top-[-1rem] right-[0.5rem] md:w-[45px] md:h-[50px] md:right-4 md:top-[-2rem]">
                                    <Image src={bulb} fill alt="" />
                                </div>
                            </div>
                            <div className="flex ">
                                <h2>Hackathon 1.0 </h2>
                                <div className="relative w-[35px] h-[25px] mt-1 md:w-[40px] md:h-[50px] md:mt-2 ml-2 ">
                                    <Image src={linkage} fill alt="" />
                                </div>
                                <div className="relative w-[35px] h-[25px] mt-1 md:w-[40px] md:h-[50px] md:mt-2 mx-1">
                                    <Image src={fire} fill alt="" />
                                </div>
                            </div>
                        </div>
                        <p className={`text-center md:text-left md:w-[500px] text-base md:text-[17px]`}>
                            Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize
                        </p>
                    </div>
                    <div className={`flex  justify-center md:justify-start items-center md:w-[150px] `}>
                        <Link href="/auth">
                            <Button btnValue="Register" />
                        </Link>
                    </div>
                    <div className={`font-extrabold text-sm space-x-5 flex justify-center md:justify-start `}>
                        <h1><span className={`text-lg`}>{formatTime(countdown.hours)} </span>H </h1>
                        <h1><span className={`text-lg`}>{formatTime(countdown.minutes)} </span>M </h1>
                        <h1><span className={`text-lg`}>{formatTime(countdown.seconds)} </span>S</h1>
                    </div>
                </div >

                <div className="w-3/4 flex justify-center">
                    <div className="mt-12 w-full h-[250px]  sm:w-[400px] sm:h-[350px] relative md:w-[400px] md:h-[380px]">
                        <Image src={heroImage} fill alt="" />
                    </div>
                </div>
            </div >
            {/* <div className=" absolute ml-10">
                <Image src={star} width={15} height={15} alt="" />
            </div> */}
        </div>
    );
};

export default Herosection;
