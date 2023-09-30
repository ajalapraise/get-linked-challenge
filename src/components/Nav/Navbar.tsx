import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { revalia } from "@/styles/font";
import { Button } from "@/components/Button/Button";
import navBtn from "../../../public/navButton.svg";

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
      <div className="flex  items-center justify-between px-10 min-h-[80px] md:px-20 relative ">
        <div className="w-2/5 flex justify-left items-center `">
          <Link href="/" className={`flex items-center ${revalia.className}`}>
            <h4 className="text-base md:text-lg font-extrabold ">
              get<span className="text-purple5">linked</span>
            </h4>
          </Link>
        </div>
        <div className={`w-1/5 flex items-end justify-end  ${isNavOpen ? "flex flex-col  mt-[-150px] sm:absolute sm:right-[150px]" : " md:hidden"}`}>
          <button className="  " onClick={toggleNav}>
            <Image src={navBtn} width={20} alt="" />
          </button>
        </div>

        <div className={`bg-purple3 flex  ${isNavOpen ? " flex-col w-[100px] text-base border-l-[1px] border-[white]  md:text-sm my-10 px-5" : "hidden md:flex md:items-center md:space-x-10 lg:space-x-20   "}`}>
          <div className="flex flex-col  item-center space-y-4 font-bold  md:flex-row md:space-x-12  md:space-y-0">
            <Link
              href="#"
              className={`hover:text-purple2 ${isLinkActive("/timeline") ? "text-[22px]" : ""}`}
            >
              Timeline
            </Link>
            <Link
              href="#"
              className={`hover:text-purple2 ${isLinkActive("/overview") ? "text-[22px]" : ""}`}
            >
              Overview
            </Link>
            <Link
              href="#"
              className={`hover:text-purple2 ${isLinkActive("/faqs") ? "text-[22px]" : ""}`}
            >
              FAQs
            </Link>
            <Link
              href="#"
              className={`hover:text-purple2 ${isLinkActive("/contact-us") ? "text-[22px]" : ""}`}
            >
              Contact
            </Link>
          </div>
          <div className="flex items-center mt-4  md:mt-0">
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


// return (
//   <div
//     className={`p-1 flex items-center bg-purple3 justify-evenly h-[100px] border-b-[1px] border-[#FFFFFF2E]  w-full font-extrabold`}
//   >
//     <div className={`w-2/5 flex justify-left pl-20`}>
//       <Link href="/" className={`flex items-center ${revalia.className} `}>
//         <h4 className={`text-lg font-extrabold text-[white] `}>
//           get<span className="text-purple5">linked</span>
//         </h4>
//       </Link>
//     </div>

//     <div className="flex  space-x-12 items-center font-extrabold text-sm text-[white] w-2/5 ">
//       <Link
//         href="#"
//         className={`hover:text-purple2 ${isLinkActive("/timeline") ? "text-[22px]" : ""
//           }`}
//       >
//         Timeline
//       </Link>
//       <Link
//         href="#"
//         className={`hover:text-purple2 ${isLinkActive("/overview") ? "text-[22px]" : ""
//           }`}
//       >
//         Overview
//       </Link>
//       <Link
//         href="#"
//         className={`hover:text-purple2 ${isLinkActive("/faqs") ? "text-[22px]" : ""
//           }`}
//       >
//         FAQs
//       </Link>
//       <Link
//         href="#"
//         className={`hover:text-purple2 ${isLinkActive("/contact-us") ? "text-[22px]" : ""
//           }`}
//       >
//         Contact Us
//       </Link>
//     </div>

//     <div className={`flex  items-center w-1/5`}>
//       <Link href="/auth">
//         <Button btnValue="Register" />
//       </Link>
//     </div>
//   </div>
// );