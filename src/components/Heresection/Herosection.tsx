import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { revalia } from "@/styles/font";


import { Button } from "../Button/Button";

import heroImage from "../../../public/herosection/hero-image.png";
import underline from "../../../public/herosection/underline.png";
import star from "../../../public/herosection/star.png";
import linkage from "../../../public/herosection/linkage.png";
import fire from "../../../public/herosection/fire.png";
import bulb from "../../../public/herosection/bulb.png";

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
        <div className={`flex justify-evenly px-24 pt-14 border-b-[1px] border-[#FFFFFF2E] w-full`}>
            <div className={`w-full `}>
                <div className={``}>
                    <div className="mt-5 ml-10">
                        <Image src={star} width={15} height={15} alt="" />
                    </div>
                    <div className={`mt-14  space-y-5`}>
                        <div className={`font-extrabold relative text-[45px] ${revalia.className}`}>
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

                    <div className={`flex  items w-[150px] my-4`}>
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
            <div>
                <div className="relative">
                    <div className="mt-[-2rem]">
                        <h2 className={`text-[24px] font-bold`}>Igniting a Revolution in HR innovation</h2>
                    </div>
                    <div className="absolute right-2">
                        <Image src={underline} width={170} height={10} alt="" />
                    </div>
                </div>
                <div className="mt-7">
                    <Image src={heroImage} width={800} height={700} alt="" />
                </div>
            </div>
        </div >
    );
};

export default Herosection;
