import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { revalia } from "@/styles/font";
import { FAQData, FAQProps, FAQlayout } from '../Faq/FaqDetails';
import { Button } from '../Button/Button';

import introImg from '../../../public/landingPage/intro-img.png'
import purpleStarImg from '../../../public/landingPage/star-purple-img.png'
import whiteStarImg from '../../../public/landingPage/star-white-img.png'
import ashStarImg from '../../../public/landingPage/star-ash-img.png'
import rulesImg from '../../../public/landingPage/rules-img.png'
import criteriaImg from '../../../public/landingPage/criteria-img.png'
import question from '../../../public/landingPage/question.png'
import timeline from '../../../public/landingPage/timeline-img.png'
import prize from '../../../public/landingPage/prize-img.png'
import gold from '../../../public/landingPage/gold-img.png'
import silver from '../../../public/landingPage/silver-img.png'
import bronze from '../../../public/landingPage/bronze-img.png'



export const Intro = () => {
    return (
        <div className={`border-b-[1px] border-[#FFFFFF2E]  px-24 py-14 flex justify-evenly items-center`}>
            <div className='w-1/2'>
                <Image src={introImg} width={450} alt="" />
            </div>
            <div className='w-[450px] space-y-5 relative'>
                <h1 className={`text-lg font-extrabold ${revalia.className}`}>Introduction to getlinked <br /> <span className='text-purple5'>tech Hackathon 1.0</span></h1>
                <p>
                    {`Our tech hackathon is a melting pot of visionaries, and its purpose is as
                    clear as day: to shape the future. Whether you're a coding genius, a
                    design maverick, or a concept wizard, you'll have the chance to transform
                    your ideas into reality. Solving real-world problems, pushing the boundaries
                    of technology, and creating solutions that can change the world,
                    that's what we're all about!`}
                </p>
                <Image src={purpleStarImg} width={25} alt="" className='absolute top-0 right-[-1rem]' />


            </div>
        </div>
    )
}

export const Rules = () => {
    return (
        <div className={`border-b-[1px] border-[#FFFFFF2E]  px-24 py-4 flex justify-between space-x-10 items-center`}>

            <div className='w-[600px] space-y-5 relative'>
                <h1 className={`text-lg font-extrabold ${revalia.className}`}>Rules and <br /> <span className='text-purple5'>Guidelines</span></h1>
                <p className='w-[420px]'>
                    {`Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!`}
                </p>
                <div className='absolute top-[-5rem] right-40'>
                    <Image src={ashStarImg} width={22} alt="" />
                </div>


            </div>
            <div className='w-[700px]'>
                <Image src={rulesImg} width={650} alt="" />
            </div>
        </div>
    )
}

export const Criteria = () => {
    return (
        <div className={`border-b-[1px] border-[#FFFFFF2E]  px-24 py-14 flex justify-between space-x-10 items-center`}>
            <div className='w-[700px]'>
                <Image src={criteriaImg} width={650} alt="" />
            </div>

            <div className='w-[600px] space-y-10  py-5 relative'>
                <div className='space-y-7'>

                    <h1 className={`text-lg font-extrabold ${revalia.className}`}>Judging Criteria<br /> <span className='text-purple5'>Key attributes</span></h1>
                    <ul className='space-y-6'>
                        <li>
                            <p className={`text-[14px]`}>
                                <span className='text-[#FF26B9] text-[16px] font-bold'>Innovation and Creativity: </span> Evaluate the uniqueness and creativity of the
                                solution. Consider whether it addresses a real-world problem in a novel
                                way or introduces innovative features.
                            </p>
                        </li>
                        <li>
                            <p className={`text-[14px]`}>
                                <span className='text-[#FF26B9] text-[16px] font-bold'>Functionality: </span> Assess how well the solution works. Does it perform its
                                intended functions effectively and without major issues? Judges would
                                consider the completeness and robustness of the solution.
                            </p>
                        </li>
                        <li>
                            <p className={`text-[14px]`}>
                                <span className='text-[#FF26B9] text-[16px] font-bold'>Impact and Relevance: </span> Determine the potential impact of the solution
                                in the real world. Does it address a significant problem, and is it relevant
                                to the target audience? Judges would assess the potential social,
                                economic, or environmental benefits.
                            </p>
                        </li>
                        <li>
                            <p className={`text-[14px]`}>
                                <span className='text-[#FF26B9] text-[16px] font-bold'>Technical Complexity: </span> Evaluate the technical sophistication of the solution.
                                Judges would consider the complexity of the code, the use of advanced
                                technologies or algorithms, and the scalability of the solution.
                            </p>
                        </li>
                        <li>
                            <p className={`text-[14px]`}>
                                <span className='text-[#FF26B9] text-[16px] font-bold'>Adherence to Hackathon Rules: </span> Judges will Ensure that the team adhered
                                to the rules and guidelines of the hackathon, including deadlines, use of
                                specific technologies or APIs, and any other competition-specific requirements.
                            </p>
                        </li>
                    </ul>
                </div>

                <div className={`flex  items w-[150px] my-4`}>
                    <Link href="#">
                        <Button btnValue="Read More" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export const FAQ = () => {
    return (
        <div className={`border-b-[1px] border-[#FFFFFF2E]  px-24 py-4 flex space-x-10 relative`}>
            <div className={`flex justify-center w-[500px] py-20 flex-col  text-white`}>
                <div className={`my-2 flex flex-col space-y-7 mb-10   `}>
                    <h1 className={`text-[27px] font-[100] ${revalia.className}`}>
                        Frequently Asked <br /> <span className='text-purple5'>Questions</span>
                    </h1>
                    <p className={`font-normal text-base w-[370px] `}>
                        We got answers to the questions that you might
                        want to ask about <span className='font-extrabold'>getlinked Hackathon 1.0</span>
                    </p>
                </div>
                <div className='absolute top-16 left-16'>
                    <Image src={purpleStarImg} width={20} alt="" />
                </div>


                <div className={`flex  flex-col  justify-center`}>
                    <div className={`flex  flex-col  justify-center`}>
                        <div className={` flex justify-around flex-col font-normal `}>
                            {FAQData.map((item, id) => (
                                <div key={id} className={` `}>
                                    <div className={`border-b-[1px] border-[#D434FE] mb-2 pb-1`}>
                                        <FAQlayout question={item.question} answer={item.answer} id={0} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
            <div className=' flex items-center '>
                <Image src={question} width={750} alt="" />
            </div>
        </div>
    )
}

export const Timeline = () => {
    return (
        <div className={`border-b-[1px] border-[#FFFFFF2E]  px-24 py-16 flex flex-col space-y-10 relative `}>
            <div className={`mb-10 flex items-center space-y-5 flex-col text-center`}>
                <h1 className={`text-xl  font-extrabold ${revalia.className}`}>Timeline</h1>
                <h4 className={`w-[400px] font-extrabold`}>Here is the breakdown of the time we anticipate using for the upcoming event.</h4>
            </div>
            <div className={` flex justify-center  space-x-10`}>
                <div>
                    <ul className='  text-right'>
                        <li className={` w-[350px] mt-20 flex flex-col justify-end items-end  h-[100px] space-y-3`}>
                            <h1 className={`text-[#D434FE]  text-[22px] font-extrabold`}>Hackathon Announcement</h1>
                            <h2 className={`text-[13px] font-bold `}>The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register</h2>
                        </li>
                        <li className={`w-[350px] mt-8 flex justify-end items-end  h-[100px] `}>
                            <h1 className={`text-[#D434FE]  text-[22px] font-extrabold `}>November 18, 2023</h1>
                        </li>
                        <li className={` w-[350px] flex mt-14 flex-col  items-end justify-end  h-[100px] space-y-3`}>
                            <h1 className={`text-[#D434FE]  text-[22px] font-extrabold`}>Teams Registration ends</h1>
                            <h2 className={`text-[13px] font-bold`}>Interested Participants are no longer Allowed to register</h2>
                        </li>
                        <li className={` w-[350px] flex mt-4 justify-end items-end h-[100px] `}>
                            <h1 className={`text-[#D434FE]  text-[22px] font-extrabold`}>November 18, 2023</h1>
                        </li>
                        <li className={` w-[350px] mt-20 flex flex-col justify-end items-end h-[100px] space-y-3`}>
                            <h1 className={`text-[#D434FE]  text-[22px] font-extrabold`}>Getlinked Hackathon 1.0 Offically Begins</h1>
                            <h2 className={`text-[13px] font-bold `}>Accepted teams can now proceed to build their ground breaking skill driven solutions</h2>
                        </li>
                        <li className={` w-[350px] flex items-end h-[100px] justify-end`}>
                            <h1 className={`text-[#D434FE]  text-[22px] font-extrabold`}>November 18, 2023</h1>
                        </li>
                    </ul>
                </div>
                <div className=''>
                    <Image src={timeline} width={45} alt="" />

                </div>
                <div>
                    <ul className=' text-left '>
                        <li className={` w-[350px] mt-16 flex justify-start items-end h-[100px] `}>
                            <h1 className={`text-[#D434FE]  text-[22px] font-extrabold`}>November 18, 2023</h1>
                        </li>
                        <li className={` w-[350px] flex mt-20 flex-col justify-center  h-[100px] space-y-3`}>
                            <h1 className={`text-[#D434FE] text-[22px] font-extrabold`}>Teams Registration begins</h1>
                            <h2 className={`text-[13px]  font-bold `}>Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register</h2>
                        </li>
                        <li className={` w-[350px] flex mt-0 items-end  h-[100px]`}>
                            <h1 className={`text-[#D434FE]  text-[22px] font-extrabold`}>November 18, 2023</h1>
                        </li>
                        <li className={` w-[350px] flex mt-16 flex-col justify-center h-[100px] space-y-3`}>
                            <h1 className={`text-[#D434FE] text-[22px] font-extrabold`}>Announcement of the accepted teams and ideas</h1>
                            <h2 className={`text-[13px] font-bold`}>All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced</h2>
                        </li>
                        <li className={`w-[350px] mt-3  flex items-end h-[100px]`}>
                            <h1 className={`text-[#D434FE]  text-[22px] font-extrabold`}>November 18, 2023</h1>
                        </li>
                        <li className={` h-[100px] mt-20 w-[350px] flex flex-col justify-center  space-y-3`}>
                            <h1 className={`text-[#D434FE] text-[22px] font-extrabold`}>Demo Day</h1>
                            <h2 className={`text-[13px] font-bold `}>Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day</h2>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='absolute top-[200px] left-[300px]'>
                <Image src={purpleStarImg} width={20} alt="" />
            </div>
            <div className='absolute right-[270px] top-[590px]'>
                <Image src={whiteStarImg} width={20} alt="" />
            </div>
            <div className='absolute bottom-24 '>
                <Image src={ashStarImg} width={20} alt="" />
            </div>
        </div>
    )
}

export const Prizes = () => {
    return (
        <div className={`border-b-[1px] border-[#FFFFFF2E]  px-24 py-16 flex items-center justify-around relative `}>
            <div className='w-1/3'>
                <Image src={prize} width={400} alt="" />
            </div>
            <div className='w-2/3 space-y-10'>
                <div className={`flex flex-col text-left mx-auto w-[400px]`}>
                    <h1 className={`${revalia.className}`}>Prizes and <br /> <span className='text-purple5'>Rewards</span></h1>
                    <p>Highlight of the prizes or rewards for winners and for participants.</p>
                </div>
                <div className='flex items-center justify-center w-[700px]'>
                    <div className='flex items-center justify-center'>
                        <div >
                            <Image src={silver} width={150} alt="" />
                        </div>
                        <div>
                            <Image src={gold} width={200} alt="" />
                        </div>
                        <div>
                            <Image src={bronze} width={150} alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export const Partners = () => {
    return (
        <div className={`border-b-[1px] border-[#FFFFFF2E]  px-24 py-16 flex flex-col items-center  relative `}>
            <div className='flex flex-col text-center space-y-5 items-center'>
                <h1 className={`text-lg font-extrabold ${revalia.className}`}>Partners and Sponsors</h1>
                <h5 className='w-[500px] font-normal'>Getlinked Hackathon 1.0 is honored to have the following major companies as its partners and sponsors</h5>

            </div>
            <div className='border-[1px] border-[#D434FE] w-[900px]'>

            </div>
        </div>
    )
}