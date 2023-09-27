import { revalia } from "@/styles/font";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div
      className={`p-1 flex items-center bg-purple3 justify-evenly h-[100px] border-b-[1px] border-[#FFFFFF2E]  w-full bg-primary font-extrabold`}>
      <div className="w-[800px]">
        <div className={`w-2/5 flex justify-left pl-20`}>
          <Link href="/" className={`flex items-center ${revalia.className} `}>
            <h4 className={`text-lg font-extrabold text-[white] `}>
              get<span className="text-purple5">linked</span>
            </h4>
          </Link>
        </div>
        <div>

        </div>
        <div>

        </div>
      </div>

    </div>
  )
};

export default Footer;
