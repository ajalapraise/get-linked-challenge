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

  const closeNav = () => {
    setIsNavOpen(false);
  };

  const isLinkActive = (linkPath: string) => {
    return router.pathname === linkPath;
  };

  return (
    <div className="bg-purple3 border-b-[1px] border-[#FFFFFF2E] w-full font-extrabold text-[white] p-1">
      <div className={`flex   px-10  ${isNavOpen ? " min-h-screen justify-start items-start mt-8" : "min-h-[60px] md:min-h-[90px] items-center justify-between"} md:px-20 relative  z-[9999]`}>
        <div className="w-2/5 flex justify-left items-center `">
          <Link href="/" className={`flex items-center ${revalia.className}`} onClick={closeNav}>
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

        <div className={`bg-purple3 flex  ${isNavOpen ? " flex-col w-[300px]  space-y-5 text-base   md:text-sm my-10  absolute right-0" : "hidden md:flex md:items-center md:space-x-10 lg:space-x-20   "}`}>
          <div className={`w-2/3   ${isNavOpen ? " flex items-end justify-end absolute right-5 mt-[-35px]" : " hidden"}`}>
            <button className="rounded-full  w-[15px] relative  h-[15px]" onClick={toggleNav}>
              <Image src={cancelBtn} fill alt="" />
            </button>
          </div>
          <div className={`flex flex-col item-center space-y-4 relaive font-bold  md:flex-row md:space-x-12  md:space-y-0 `}>
            <Link
              href="#"
              className={`hover:text-purple2  ${isLinkActive("/timeline") ? "text-purple2" : ""}`}
              onClick={closeNav} // Close the navigation menu when link is clicked
            >
              Timeline
            </Link>
            <Link
              href="#"
              className={`hover:text-purple2 ${isLinkActive("/overview") ? "text-purple2" : ""}`}
              onClick={closeNav} // Close the navigation menu when link is clicked
            >
              Overview
            </Link>
            <Link
              href="#"
              className={`hover:text-purple2 ${isLinkActive("/faqs") ? "text-purple2" : ""}`}
              onClick={closeNav} // Close the navigation menu when link is clicked
            >
              FAQs
            </Link>
            <Link
              href="contact-us"
              className={`hover:text-purple2 ${isLinkActive("/contact-us") ? "text-purple2" : ""}`}
              onClick={closeNav} // Close the navigation menu when link is clicked
            >
              Contact
            </Link>
          </div>
          <div className={`flex  items-center  my-4`} onClick={closeNav}>
            <Link href="/register">
              <Button btnValue="Register" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
