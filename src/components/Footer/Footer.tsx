import React from "react";
import { revalia } from "@/styles/font";
import Link from "next/link";
import Image from "next/image";
import insta from "../../../public/insta.svg";
import twitter from "../../../public/twitter.svg";
import facebook from "../../../public/facebook.svg";
import linkedin from "../../../public/linkedin.svg";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import purpleStarImg from '../../../public/landingPage/purple-star.svg'
import whiteStarImg from '../../../public/landingPage/white-star.svg'
import ashStarImg from '../../../public/landingPage/grey-star.svg'

const Footer = () => {
  return (
    <div className={`p-10 md:px-24 md:py-10 flex flex-col items-center bg-purple3 justify-evenly space-y-10  text-[white]  w-full  relative`}>
      <div className="w-full flex flex-col md:flex-row py-5 justify-around">
        <div className={` flex flex-col  justify-left`}>
          <Link href="/" className={`flex items-center mb-5`}>
            <h4 className={`text-lg font-extrabold   ${revalia.className} `}>
              get<span className="text-purple5">linked</span>
            </h4>
          </Link>

          <p className="text-[12px] md:text-[16px] md:w-[450px]">Getlinked Tech Hackathon is a technology innovation program established by a group of organizations with the aim of young and talented individuals in the field of technology</p>

          <h5 className="text-[12px] md:text-sm mt-5 md:mt-16">Terms of Use   <span className="text-purple5 text-[13px] md:text-lg">|</span>    Privacy Policy</h5>
        </div>

        <div>
          <div className={`flex flex-col space-y-2 mt-10 md:mt-0`}>
            <h3 className={`md:mb-5 font-semibold text-sm text-purple5`}>Useful Links</h3>

            <ul className={`space-y-3`}>
              <li>
                <Link href='#' className={`hover:text-purple5 text-[10px] md:text-[18px]`}> Overview</Link>
              </li>
              <li>
                <Link href='#' className={`hover:text-purple5 text-[10px] md:text-[18px]`}>Timeline </Link>
              </li>
              <li>
                <Link href='#' className={`hover:text-purple5 text-[10px] md:text-[18px]`}> FAQs</Link>
              </li>
              <li>
                <Link href='/auth' className={`hover:text-purple5 text-[10px] md:text-[18px]`}>Register</Link>
              </li>
            </ul>

            <div className="flex space-x-3 md:space-x-4 items-center">
              <h3 className={`text-purple5 text-base`}>Follow Us</h3>
              <div className=" flex space-x-2 md:space-x-4 items-center">
                <Link href='https://www.instagram.com/accounts/login/' className={` items-center flex justify-center relative w-[20px] h-[20px]`} target="_blank">
                  <Image src={insta} fill alt="" />
                </Link>
                <Link href='https://twitter.com/login/' className={` items-center flex justify-center relative w-[20px] h-[20px]`} target="_blank">
                  <Image src={twitter} fill alt="" />
                </Link>
                <Link href='https://www.facebook.com/login/' className={` items-center flex justify-center relative w-[20px] h-[20px]`} target="_blank">
                  <Image src={facebook} fill alt="" />
                </Link>
                <Link href='https://www.linkedin.com/login/' className={` items-center flex justify-center relative w-[20px] h-[20px]`} target="_blank">
                  <Image src={linkedin} fill alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className={`flex flex-col space-y-2 mt-10 md:mt-0`}>
            <h3 className={`md:mb-5 font-semibold text-sm text-purple5`}>Useful Links</h3>
            <div className="space-x-4 flex text-base">
              <h2 className="text-[17px] mt-1 text-[white]"> <BiSolidPhoneCall /> </h2>
              <h1>+234 679 81819</h1>
            </div>
            <div className="space-x-5 flex text-base">
              <h2 className="text-[17px] mt-1 text-[white]"> <FaLocationDot /> </h2>
              <h1 className="w-[110px]">27,Alara Street, Yaba 100012, Lagos State.</h1>
            </div>
            <h2 className="space-x-3 flex"> </h2>
          </div>
        </div>
      </div>
      <h3 className="text-base md:text-sm">All rights reserved. &copy; getlinked Ltd.</h3>

      <Image src={whiteStarImg} width={15} height={20} alt="" className="absolute left-10 top-20" />
      <Image src={purpleStarImg} width={15} height={20} alt="" className="absolute left-[620px] bottom-20" />
      <Image src={ashStarImg} width={15} height={20} alt="" className="absolute right-[400px] top-16" />
      <Image src={whiteStarImg} width={15} height={20} alt="" className="absolute right-20 bottom-[120px]" />
    </div>
  )
};

export default Footer;
