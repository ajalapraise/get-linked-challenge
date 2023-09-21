import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { revalia } from "@/styles/font";
import { Button } from "@/components/Button/Button";

const Navbar = () => {
  const router = useRouter();
  const isLinkActive = (linkPath: string) => {
    return router.pathname === linkPath;
  };
  return (
    <div
      className={`p-1 flex items-center justify-evenly h-[100px] border-b-[1px] border-[#FFFFFF2E]  w-full bg-primary font-extrabold`}
    >
      <div className={`w-2/5 flex justify-left pl-20`}>
        <Link href="/" className={`flex items-center ${revalia.className} `}>
          <h4 className={`text-lg font-extrabold text-[white] `}>
            get<span className="text-purple5">linked</span>
          </h4>
        </Link>
      </div>

      <div className="flex  space-x-12 items-center font-extrabold text-sm text-[white] w-2/5 ">
        <Link
          href="#"
          className={`hover:text-purple2 ${isLinkActive("/timeline") ? "text-[22px]" : ""
            }`}
        >
          Timeline
        </Link>
        <Link
          href="#"
          className={`hover:text-purple2 ${isLinkActive("/overview") ? "text-[22px]" : ""
            }`}
        >
          Overview
        </Link>
        <Link
          href="#"
          className={`hover:text-purple2 ${isLinkActive("/faqs") ? "text-[22px]" : ""
            }`}
        >
          FAQs
        </Link>
        <Link
          href="#"
          className={`hover:text-purple2 ${isLinkActive("/contact-us") ? "text-[22px]" : ""
            }`}
        >
          Contact Us
        </Link>
      </div>

      <div className={`flex  items-center w-1/5`}>
        <Link href="/auth">
          <Button btnValue="Register" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
