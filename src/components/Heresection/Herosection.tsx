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
        const targetDate = new Date("2023-09-23T23:59:59");

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
        <div className={`hidden  justify-evenly px-2 md:px-24 pt-16 border-b-[1px] border-[#FFFFFF2E] w-full`}>
            <div className="text-center md:relative">
                <div className="mt-[-2rem] w-[200px] md:w-full flex items-center justify-center md:flex md:justify-end md:absolute md:right-0">
                    <h2 className={`text-base md:text-[24px] font-bold`}>Igniting a Revolution in HR innovation
                        <div className="hidden md:flex md:justify-end">
                            <Image src={underline} width={160} alt="" />
                        </div>
                        <div className="  flex justify-end absolute right-12 md:hidden ">
                            <Image src={underline} width={90} alt="" />
                        </div>
                    </h2>
                </div>


            </div>
            <div className={`w-full flex flex-col md:flex-row`}>
                <div className={`w-full `}>
                    <div className={``}>
                        <div className="mt-5 ml-10">
                            <Image src={star} width={15} height={15} alt="" />
                        </div>
                        <div className={`mt-5  space-y-5`}>
                            <div className={`flex flex-col items-center text-center text-sm md:font-extrabold md:relative md:text-[45px] ${revalia.className}`}>
                                <h2>getlinked Tech </h2>
                                <div className="flex space-x-3">
                                    <h2>Hackathon 1.0 </h2>
                                    <Image src={linkage} width={50} height={50} alt="" />
                                    <Image src={fire} width={45} height={30} alt="" />
                                </div>
                                <div className="absolute left-[22.5rem] top-[-2.5rem]">
                                    <Image src={bulb} width={40} height={11} alt="" />
                                </div>
                            </div>
                            <p className={`w-[500px] text-[17px]`}>
                                Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize
                            </p>
                        </div>

                        <div className={`flex  items-center w-[150px] my-4`}>
                            <Link href="/auth">
                                <Button btnValue="Register" />
                            </Link>
                        </div>
                        <div className={`font-extrabold text-sm space-x-5 flex `}>
                            <h1><span className={`text-lg`}>{formatTime(countdown.hours)} </span>H </h1>
                            <h1><span className={`text-lg`}>{formatTime(countdown.minutes)} </span>M </h1>
                            <h1><span className={`text-lg`}>{formatTime(countdown.seconds)} </span>S</h1>
                        </div>
                    </div>
                </div >

                <div className="mt-7 relative md:w-[900px] md:h-[420px]">
                    <Image src={heroImage} fill alt="" />
                </div>
            </div >
        </div>
    );
};

export default Herosection;
