import React from "react";
import Link from "next/link";

interface ButtonProps {
  btnValue: string;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ btnValue, className }) => {
  return (
    <div
      className={` bg-gradient-to-r from-[#903AFF] to-[#FE34B9] rounded-[5px]`}
    >
      <input
        type="button"
        value={btnValue}
        className={` text-[16px]  cursor-pointer text-[white] w-[150px] h-[45px] font-bold hover:bg-purple1 rounded-[5px]  py-1 px-2 text-center justify-center items-center ${className} `}
      />
    </div>
  );
};
