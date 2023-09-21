import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { revalia } from "@/styles/font";

import introImg from '../../../public/landingPage/intro-img.png'
import purpleStarImg from '../../../public/landingPage/star-purple-img.png'
import rulesImg from '../../../public/landingPage/rules-img.png'
import criteriaImg from '../../../public/landingPage/criteria-img.png'
import { Button } from '../Button/Button';

import { FAQData, FAQProps, FAQlayout } from '../Faq/FaqDetails';


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
    const displayedFAQs = FAQData.slice(0, 4);

    return (
        <div>
            <div className={`flex justify-center  flex-col  pt-[50px] pb-[150px] px-[60px] bg-purpleBase text-white  `}>
                <div className={`my-2 flex flex-col items-center text-center`}>
                    <h1 className={`text-xl font-[100] ${revalia.className}`}>
                        Frequently Asked Questions (FAQs)
                    </h1>
                    <p className={` w-[650px]  font-normal mt-10 mb-[60px] text-base`}>
                        These section provides answers to common questions that visitors might have about the website, its products, services, policies, or any other relevant topics.
                    </p>
                </div>


                <div className={`flex s flex-col  justify-center`}>
                    <div className={`flex items-center flex-col  justify-center`}>
                        <div className={` flex justify-around w-[700px]  bg-[#FECD83] p-3 flex-col font-normal space-y-5 `}>
                            {displayedFAQs.map((item, id) => (
                                <div key={id} className={`bg-white flex rounded-lg justify-center p-2 text-black `}>
                                    <div className={`w-[600px] px-3`}>
                                        <FAQlayout question={item.question} answer={item.answer} id={0} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>


                    <div className={` flex p-3 ml-[250px] mt-10 font-normal  `}>
                        <Link href='/faq'>
                            <Button
                                btnValue='See more'
                                className=' border-[1px] w-[150px] h-[55px]  px-4 border-purpleBase   text-white font-extralight text-base hover:bg-yellow4 bg-yellow6'
                            />
                        </Link>
                    </div>

                </div>


            </div>
            <div>

            </div>
        </div>
    )
}