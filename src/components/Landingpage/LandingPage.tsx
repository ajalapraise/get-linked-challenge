import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { revalia } from "@/styles/font";
import { FAQData, FAQProps, FAQlayout } from '../Faq/FaqDetails';
import { Button } from '../Button/Button';

import introImg from '../../../public/landingPage/intro-img.png'
import purpleStarImg from '../../../public/landingPage/purple-star.svg'
import whiteStarImg from '../../../public/landingPage/white-star.svg'
import ashStarImg from '../../../public/landingPage/grey-star.svg'
import rulesImg from '../../../public/landingPage/rules-img.png'
import criteriaImg from '../../../public/landingPage/criteria-img.png'
import question from '../../../public/landingPage/question.png'
import prize from '../../../public/landingPage/prize-img.png'
import gold from '../../../public/landingPage/gold-img.png'
import silver from '../../../public/landingPage/silver-img.png'
import bronze from '../../../public/landingPage/bronze-img.png'
import libertyAssured from '../../../public/landingPage/liberty-assured.svg'
import libertyPay from '../../../public/landingPage/liberty-pay.svg'
import winwise from '../../../public/landingPage/winwise.svg'
import whispersms from '../../../public/landingPage/whispersms.svg'
import paybox from '../../../public/landingPage/Paybox.svg'
import VizualPlus from '../../../public/landingPage/Vizual-Plus.svg'
import privacy from '../../../public/landingPage/privacy.png'
import check from '../../../public/landingPage/check.svg'



export const Intro = () => {
    return (
        <div className={`border-b-[1px] p-10 space-y-5 border-[#FFFFFF2E] md:space-y-10 md:px-24 md:py-14 flex flex-col md:flex-row justify-evenly items-center`}>
            <div className='w-full flex items-center justify-center md:w-1/2'>
                <Image src={introImg} width={450} alt="" />
            </div>
            <div className='w-full flex flex-col items-center justify-center  md:items-start md:w-[450px] space-y-5 relative'>
                <h1 className={`text-base flex text-center flex-col items-center md:items-start justify-center md:text-lg font-extrabold ${revalia.className}`}>Introduction to getlinked <br /> <span className='text-purple5'>tech Hackathon 1.0</span></h1>
                <p className='text-center w-full md:w-full md:text-left'>
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
        <div className={`border-b-[1px] p-10 space-y-5 border-[#FFFFFF2E] md:space-y-10 md:px-24 md:py-14 flex flex-col-reverse md:flex-row justify-evenly items-center`}>
            <div className='w-full flex flex-col items-center justify-center  md:items-start  space-y-5 relative md:w-[600px] '>
                <h1 className={`text-base flex text-center flex-col items-center md:items-start justify-center md:text-lg font-extrabold ${revalia.className}`}>Rules and <br /> <span className='text-purple5'>Guidelines</span></h1>
                <p className='text-center w-full md:w-[420px] md:text-left'>
                    {`Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!`}
                </p>
                <div className='absolute top-[-5rem] right-40'>
                    <Image src={ashStarImg} width={22} alt="" />
                </div>


            </div>
            <div className='w-full flex items-center justify-center md:w-[700px]'>
                <Image src={rulesImg} width={650} alt="" />
            </div>
        </div>
    )
}

export const Criteria = () => {
    return (
        <div className={`border-b-[1px] p-10 space-y-5 border-[#FFFFFF2E] md:space-y-10 md:px-24 md:py-14 flex flex-col md:flex-row justify-evenly items-center`}>
            <div className='w-full flex items-center justify-center md:w-[700px]'>
                <Image src={criteriaImg} width={650} alt="" />
            </div>

            <div className='w-full flex flex-col items-center justify-center md:items-start md:w-[600px] space-y-10  py-5 relative'>
                <div className='space-y-7'>
                    <h1 className={`text-base flex text-center flex-col items-center md:items-start justify-center md:text-lgfont-extrabold ${revalia.className}`}>Judging Criteria<br /> <span className='text-purple5'>Key attributes</span></h1>
                    <ul className='space-y-3 flex flex-col items-center justify-center text-center md:space-y-6'>
                        <li>
                            <p className={`text-[13px] md:text-[14px]`}>
                                <span className='text-[#FF26B9] md:text-[16px] font-bold'>Innovation and Creativity: </span> Evaluate the uniqueness and creativity of the
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

                <div className={`flex  items-center  my-4`}>
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
        <div className={`border-b-[1px] p-10 space-x-5 border-[#FFFFFF2E] md:space-x-10 md:px-24 md:py-14 flex flex-col md:flex-row space-y-10 md:space-y-0 justify-evenly items-center`}>
            <div className={`flex justify-center w-[500px] md:py-20 flex-col  text-white`}>
                <div className={`my-2 flex flex-col items-center space-y-4 mb-5 justify-center  md:items-start md:space-y-7 md:mb-10   `}>
                    <h1 className={`text-base flex text-center flex-col items-center md:items-start justify-center md:text-[27px] font-[100] ${revalia.className}`}>
                        Frequently Asked <br /> <span className='text-purple5'>Questions</span>
                    </h1>
                    <p className={`text-center md:text-left px-10 md:px-0 w-3/5 font-normal text-[12px] md:text-base md:w-[370px] `}>
                        We got answers to the questions that you might
                        want to ask about <span className='font-extrabold'>getlinked Hackathon 1.0</span>
                    </p>
                </div>
                <div className='absolute top-16 left-16'>
                    <Image src={purpleStarImg} width={20} alt="" />
                </div>


                <div className={`flex w-4/5 md:w-full px-10 md:px-0  flex-col mx-auto justify-center`}>
                    <div className={`flex  flex-col  justify-center`}>
                        <div className={` flex justify-around flex-col font-normal `}>
                            {FAQData.map((item, id) => (
                                <div key={id} className={`flex justify-center items-center w-full px-5 md:px-0 `}>
                                    <div className={`flex  w-full justify-center  md:mb-2 pb-1`}>
                                        <FAQlayout question={item.question} answer={item.answer} id={0} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
            <div className='w-full flex items-center justify-center md:w-[650px] '>
                <Image src={question} width={650} alt="" />
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
            <div className={` flex justify-center w-full items-center`}>
                <div className={`flex flex-col p-5 w-[1200px] space-y-3`}>
                    <div className='flex items-center  space-x-20'>
                        <div className={` w-[400px] flex flex-col justify-end items-end mt-24 space-y-3 text-right`}>
                            <h1 className={`text-[#D434FE]  text-[20px] font-extrabold`}>Hackathon Announcement</h1>
                            <h2 className={`text-[12px] font-bold `}>The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register</h2>
                        </div>
                        <div className='flex flex-col items-center space-y-3'>
                            <div className='h-[110px] w-[4px] bg-[#D434FE]'>

                            </div>
                            <div className={`w-[35px] h-[35px] rounded-full bg-[#D434FE] flex justify-center items-center`}>
                                <h1 className='font-extrabold'>1</h1>
                            </div>

                        </div>
                        <div className={` w-[400px] flex justify-start items-end mt-[120px] text-left `}>
                            <h1 className={`text-[#D434FE]  text-[20px] font-extrabold`}>November 18, 2023</h1>
                        </div>
                    </div>

                    <div className='flex items-center space-x-20'>
                        <div className={`w-[400px] mt-[80px] flex justify-end items-end text-right `}>
                            <h1 className={`text-[#D434FE]  text-[20px] font-extrabold `}>November 18, 2023</h1>
                        </div>
                        <div className='flex flex-col items-center space-y-3'>
                            <div className='h-[70px] w-[4px] bg-[#D434FE]'>

                            </div>
                            <div className={`w-[35px] h-[35px] rounded-full bg-[#D434FE] flex justify-center items-center`}>
                                <h1 className='font-extrabold'>2</h1>
                            </div>

                        </div>
                        <div className={` w-[400px] flex flex-col justify-center  space-y-3 mt-16 text-left`}>
                            <h1 className={`text-[#D434FE] text-[20px] font-extrabold`}>Teams Registration begins</h1>
                            <h2 className={`text-[12px]  font-bold `}>Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register</h2>
                        </div>
                    </div>

                    <div className='flex  items-center space-x-20'>
                        <div className={` w-[400px] flex mt-14 flex-col justify-end items-end  space-y-3 text-right`}>
                            <h1 className={`text-[#D434FE]  text-[20px] font-extrabold`}>Teams Registration ends</h1>
                            <h2 className={`text-[12px] font-bold`}>Interested Participants are no longer Allowed to <br /> register</h2>
                        </div>
                        <div className='flex flex-col items-center space-y-3'>
                            <div className='h-[70px] w-[4px] bg-[#D434FE]'>

                            </div>
                            <div className={`w-[35px] h-[35px] rounded-full bg-[#D434FE] flex justify-center items-center`}>
                                <h1 className='font-extrabold'>3</h1>
                            </div>

                        </div>
                        <div className={` w-[400px] flex mt-20  text-left `}>
                            <h1 className={`text-[#D434FE]  text-[20px] font-extrabold`}>November 18, 2023</h1>
                        </div>
                    </div>

                    <div className='flex  items-center space-x-20'>
                        <div className={`w-[400px] mt-3 flex justify-end items-end  h-[100px] text-right `}>
                            <h1 className={`text-[#D434FE]  text-[20px] font-extrabold `}>November 18, 2023</h1>
                        </div>
                        <div className='flex flex-col items-center space-y-3'>
                            <div className='h-[70px] w-[4px] bg-[#D434FE]'>

                            </div>
                            <div className={`w-[35px] h-[35px] rounded-full bg-[#D434FE] flex justify-center items-center`}>
                                <h1 className='font-extrabold'>4</h1>
                            </div>

                        </div>
                        <div className={` w-[400px] flex mt-10 flex-col justify-center  h-[100px] space-y-3 text-left`}>
                            <h1 className={`text-[#D434FE] text-[20px] font-extrabold`}>Announcement of the accepted teams and ideas</h1>
                            <h2 className={`text-[12px] font-bold`}>All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced</h2>
                        </div>
                    </div>

                    <div className='flex  items-center space-x-20'>
                        <div className={` w-[400px] mt-10 flex flex-col justify-end items-end  h-[100px] space-y-3 text-right`}>
                            <h1 className={`text-[#D434FE]  text-[20px] font-extrabold`}>Getlinked Hackathon 1.0 Offically Begins</h1>
                            <h2 className={`text-[12px] font-bold `}>Accepted teams can now proceed to build their ground breaking skill driven solutions</h2>
                        </div>
                        <div className='flex flex-col items-center space-y-3'>
                            <div className='h-[70px] w-[4px] bg-[#D434FE]'>

                            </div>
                            <div className={`w-[35px] h-[35px] rounded-full bg-[#D434FE] flex justify-center items-center`}>
                                <h1 className='font-extrabold'>5</h1>
                            </div>

                        </div>
                        <div className={` w-[400px] mt-3 flex justify-start items-end h-[100px] text-left `}>
                            <h1 className={`text-[#D434FE]  text-[20px] font-extrabold`}>November 18, 2023</h1>
                        </div>
                    </div>

                    <div className='flex  items-center space-x-20'>
                        <div className={`w-[400px] mt-3 flex justify-end items-end  h-[100px] text-right `}>
                            <h1 className={`text-[#D434FE]  text-[20px] font-extrabold `}>November 18, 2023</h1>
                        </div>
                        <div className='flex flex-col items-center space-y-3'>
                            <div className='h-[70px] w-[4px] bg-[#D434FE]'>

                            </div>
                            <div className={`w-[35px] h-[35px] rounded-full bg-[#D434FE] flex justify-center items-center`}>
                                <h1 className='font-extrabold'>6</h1>
                            </div>

                        </div>
                        <div className={` w-[400px] mt-[55px] flex flex-col justify-center  h-[100px] space-y-3 text-left`}>
                            <h1 className={`text-[#D434FE] text-[20px] font-extrabold`}>Demo Day</h1>
                            <h2 className={`text-[12px] font-bold `}>Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className='absolute top-[200px] left-[300px]'>
                <Image src={purpleStarImg} width={20} alt="" />
            </div>
            <div className='absolute right-[270px] top-[620px]'>
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
            <div className='w-3/5 space-y-10'>
                <div className={`flex flex-col text-left mx-auto w-[400px]`}>
                    <h1 className={`${revalia.className}`}>Prizes and <br /> <span className='text-purple5'>Rewards</span></h1>
                    <p>Highlight of the prizes or rewards for winners and for participants.</p>
                </div>
                <div className='flex items-center justify-center w-[700px]'>
                    <div className='flex items-center justify-center'>
                        <div >
                            <Image src={silver} width={145} alt="" />
                        </div>
                        <div>
                            <Image src={gold} width={200} alt="" />
                        </div>
                        <div>
                            <Image src={bronze} width={130} alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export const Partners = () => {
    return (
        <div className={`border-b-[1px] border-[#FFFFFF2E]  px-24 py-16 flex flex-col items-center space-y-14 relative `}>
            <div className='flex flex-col text-center space-y-5 items-center'>
                <h1 className={`text-lg font-extrabold ${revalia.className}`}>Partners and Sponsors</h1>
                <h5 className='w-[500px] font-normal'>Getlinked Hackathon 1.0 is honored to have the following major companies as its partners and sponsors</h5>

            </div>
            <div className='border-[1px] border-[#D434FE] flex items-center mx-auto p-20 w-[900px]'>
                <div className=' flex flex-wrap w-[700px] mx-auto items-center justify-around  p-10'>
                    <div className='w-1/3 flex justify-center items-center  border-r-[2px] border-[#D434FE] h-[100px] mb-5  '>
                        <div className='w-2/3 flex justify-center  border-b-[2px] border-[#D434FE] h-[120px] py-2 items-center cursor-pointer '>
                            <Image src={libertyAssured} width={95} alt="" />
                        </div>

                    </div>
                    <div className='w-1/3 flex justify-center items-center  border-r-[2px] border-[#D434FE] h-[100px] mb-5'>
                        <div className='w-2/3 flex justify-center  border-b-[2px] items-center border-[#D434FE] h-[120px] py-2 cursor-pointer'>
                            <Image src={libertyPay} width={95} alt="" />
                        </div>

                    </div>
                    <div className='w-1/3 flex justify-center items-center h-[100px]  mb-5'>
                        <div className='w-2/3 flex justify-center  border-b-[2px] items-center border-[#D434FE] h-[120px] py-2 cursor-pointer'>
                            <Image src={winwise} width={95} alt="" />
                        </div>

                    </div>

                    <div className='w-1/3 flex justify-center items-center border-r-[2px] border-[#D434FE] h-[100px] '>
                        <div className='w-2/3 flex justify-center h-[120px] py-2 items-center cursor-pointer'>
                            <Image src={whispersms} width={95} alt="" />
                        </div>

                    </div>
                    <div className='w-1/3 flex justify-center items-center border-r-[2px] border-[#D434FE] h-[100px] '>
                        <div className='w-2/3 flex justify-center items-center  h-[120px] py-2 cursor-pointer'>
                            <Image src={paybox} width={95} alt="" />
                        </div>

                    </div>
                    <div className='w-1/3 flex justify-center items-center  h-[100px]'>
                        <div className='w-2/3 flex justify-center   items-center  h-[120px] py-2 cursor-pointer'>
                            <Image src={VizualPlus} alt="" layout="responsive" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export const Privacy = () => {
    return (
        <div className={`border-b-[1px] border-[#FFFFFF2E]  px-24 py-16 flex  items-center space-x-3 relative `}>
            <div className='space-y-14'>
                <div className='space-y-5'>
                    <h1 className={`${revalia.className} text-lg`}>
                        Privacy Policy and <br /><span className='text-purple5'>Terms</span>
                    </h1>
                    <h6 className='text-base'>Last updated on September 12, 2023</h6>
                    <h4 className='font-extrabold text-base'>Below are our privacy & policy, which outline a lot of goodies. <br />it’s our aim to always take of our participant</h4>
                </div>

                <div className={`w-[550px] p-14 flex flex-col items-center space-y-6 border-[1px] rounded-md border-[#D434FE]`}>
                    <div className=''>
                        <p className='font-semibold leading-8 text-[16px['>At getlinked tech Hackathon 1.0, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you participate in our tech hackathon event. By participating in our event, you consent to the practices described in this policy.</p>
                        <h2 className='mt-7 mb-1 text-purple5 font-extrabold text-sm'>Licensing Policy</h2>
                        <h3>Here are terms of our Standard License:</h3>
                    </div>
                    <div className='flex space-x-3 items-start'>
                        <Image src={check} width={20} alt="" className='mt-1' />
                        <h3>The Standard License grants you a non-exclusive right to navigate and register for our event</h3>
                    </div>
                    <div className='flex space-x-5  items-start'>
                        <Image src={check} width={20} alt="" className='mt-1' />
                        <h3>You are licensed to use the item available at any free source sites, for your project developement</h3>
                    </div>

                    <div className={`flex items-center w-[150px]`}>
                        <Link href="#">
                            <Button btnValue="Read more" />
                        </Link>
                    </div>
                </div>

            </div>
            <div className=" relative w-[600px] h-[750px]">
                <Image src={privacy} fill alt="" />
            </div>
        </div>

    )
}