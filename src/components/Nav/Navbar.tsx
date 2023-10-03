import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { revalia } from "@/styles/font";
import { Button } from "@/components/Button/Button";
import navBtn from "../../../public/navButton.svg";
import cancelBtn from "../../../public/cancelBtn.svg";

const Navbar = () => {
  const router = useRouter();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const isLinkActive = (linkPath: string) => {
    return router.pathname === linkPath;
  };

  return (
    <div className="bg-purple3 border-b-[1px] border-[#FFFFFF2E] w-full font-extrabold text-[white] p-1">
      <div className={`flex   px-10  ${isNavOpen ? " min-h-screen justify-start items-start mt-8" : "min-h-[60px] md:min-h-[90px] items-center justify-between"} md:px-20 relative  z-[9999]`}>
        <div className="w-2/5 flex justify-left items-center `">
          <Link href="/" className={`flex items-center ${revalia.className}`}>
            <h4 className="text-base md:text-lg font-extrabold ">
              get<span className="text-purple5">linked</span>
            </h4>
          </Link>
        </div>
        <div className={`w-1/5 flex items-end justify-end  ${isNavOpen ? "hidden" : " md:hidden"}`}>
          <button className="  " onClick={toggleNav}>
            <Image src={navBtn} width={20} alt="" />
          </button>
        </div>

        <div className={`bg-purple3 flex  ${isNavOpen ? " flex-col w-[300px]  space-y-5 text-base mt-24  md:text-sm my-10 pl-5 absolute right-0" : "hidden md:flex md:items-center md:space-x-10 lg:space-x-20   "}`}>
          <div className={`w-2/3   ${isNavOpen ? " flex items-end justify-end absolute right-5 " : " hidden"}`}>
            <button className="" onClick={toggleNav}>
              <Image src={cancelBtn} width={20} alt="" />
            </button>
          </div>
          <div className="flex flex-col  item-center space-y-4 font-bold  md:flex-row md:space-x-12  md:space-y-0">
            <Link
              href="#"
              className={`hover:text-purple2  ${isLinkActive("/timeline") ? "md:text-[22px]" : ""}`}
            >
              Timeline
            </Link>
            <Link
              href="#"
              className={`hover:text-purple2 ${isLinkActive("/overview") ? "md:text-[22px]" : ""}`}
            >
              Overview
            </Link>
            <Link
              href="#"
              className={`hover:text-purple2 ${isLinkActive("/faqs") ? "md:text-[22px]" : ""}`}
            >
              FAQs
            </Link>
            <Link
              href="contact-us"
              className={`hover:text-purple2 ${isLinkActive("/contact-us") ? "md:text-[22px]" : ""}`}
            >
              Contact
            </Link>
          </div>
          <div className={`flex  items-center  my-4`}>
            <Link href="/auth">
              <Button btnValue="Register" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
