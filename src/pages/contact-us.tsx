/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import insta from "../../public/insta.svg";
import twitter from "../../public/twitter.svg";
import facebook from "../../public/facebook.svg";
import linkedin from "../../public/linkedin.svg";
import { IoIosArrowBack } from 'react-icons/io'
import { revalia } from "@/styles/font";

// import { useSession } from "next-auth/react";
// import router from "next/router";

interface FormState {
    firstName: string;
    phoneNumber: string;
    message: string;
    email: string;
}

const contact: React.FC<FormState> = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        phoneNumber: "",
        message: "",
        email: "",

    });

    // const { data: session } = useSession();

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handlePhoneNumberKeyDown = (e: any) => {
        // Check if the pressed key is a number (0-9) or Backspace/Delete key
        const isNumericKey = /^[0-9]$/.test(e.key);
        const isBackspaceOrDelete = ['Backspace', 'Delete'].includes(e.key);

        // If the pressed key is not numeric and not Backspace/Delete, prevent the input
        if (!isNumericKey && !isBackspaceOrDelete) {
            e.preventDefault();

        }
    };

    const isAllFieldsFilled = () => {
        const requiredFields: (keyof FormState)[] = ["firstName", "phoneNumber", "message", "email"];
        return requiredFields.every((field) => formData[field] !== "");
    };



    const onSubmit = async (event: { preventDefault: () => void }) => {
        event.preventDefault();

        // console.log("formdata", formData);
        // const result = await signIn("credentials", {
        //     redirect: false,
        //     email: formData.email,
        //     password: formData.password,
        //     callbackUrl: "/dashboard/customer",
        // });
        // console.log("result", result);
        // console.log("session", session);
        // if (result && result.ok) {
        //     alert("Login Successful");
        //     // router.push("/dashboard/customer");

        // } else {
        //     alert("Login Failed");
        // }
    };
    return (
        <div className={`  justify-evenly relative items-center px-10 md:px-20 pt-10 md:pt-3 border-b-[1px] min-h-screen border-[#FFFFFF2E] w-full`}>
            <div className={`flex flex-col`}>
                <div className={`bg-gradient-to-r from-[#903AFF] to-[#FE34B9] rounded-full w-[30px] h-[30px] flex justify-center items-center mb-16 md:hidden`}>
                    <button className="bg-purple3 flex justify-center items-center w-[28px] h-[27px] rounded-full">
                        <IoIosArrowBack className={`text-[white] w-[15px] h-[15px]`} />
                    </button>
                </div>
                <div className={`flex flex-col space-y-7 md:hidden`}>
                    <h1 className={`${revalia.className} font-extrabold text-[14px] w-[230px]  text-[#D434FE]`}>
                        Questions or need assistance? <br />Let us know about it
                    </h1>
                    <h2 className={`font-bold text-[12px] w-[240px] md:hidden`}>
                        Email us below to any question related to our event
                    </h2>
                </div>
                <div className="w-full mt-10 md:w-[450px]">

                    <form action="" onSubmit={onSubmit} className={`space-y-5 `}>
                        <div className={`border-[1px] rounded-md border-[white]`}>

                            <input
                                type="firstName"
                                placeholder="Enter your Name"
                                id="firstame"
                                name="firstName"
                                className={`bg-transparent h-[40px] w-full px-3 text-[white] font-bold text-[16px] focus:outline-none`}
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={`border-[1px] rounded-md border-[white]`}>

                            <div className={``}>
                                <input type="tel" placeholder='Enter phone number' name='phoneNumber' id='phoneNumber'
                                    className={`bg-transparent h-[40px] px-3 text-[white] w-full font-bold text-[16px] focus:outline-none`}
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    onKeyDown={handlePhoneNumberKeyDown} required maxLength={11} minLength={11}
                                />
                            </div>
                        </div>

                        <div className={`border-[1px] rounded-md border-[white]`}>

                            <input
                                type="email"
                                placeholder="Email"
                                id="email"
                                name="email"
                                className={`bg-transparent h-[40px] px-3 text-[white] font-bold w-full text-[16px] focus:outline-none`}
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>


                        <div className={`border-[1px] rounded-md border-[white]`}>
                            <textarea
                                placeholder="Message"
                                id="message"
                                name="message"
                                className={`bg-transparent h-[150px] p-3 text-[white] font-bold w-full text-[16px] focus:outline-none resize-none `}
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <div className={`bg-gradient-to-r from-[#903AFF] to-[#FE34B9] rounded-[5px] flex items-center w-[150px] h-[50px] justify-center `}>
                                <button
                                    type="submit"
                                    className={` text-[16px]   text-[white] font-extrabold  rounded-[5px] py-1 px-2 text-center justify-center w-[150px] h-[50px] items-center cursor-not-allowed ${isAllFieldsFilled() ? 'hover:bg-purple1 cursor-pointer' : 'opacity-50'}`}
                                    disabled={!isAllFieldsFilled()}
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div>
                    <div className={`hidden md:flex`}>
                        <h1>Get in touch</h1>
                        <h3>Contact Information</h3>
                        <h3>27,Alara Street, Yaba 100012, Lagos State</h3>
                        <h3>Call Us : 07067981819</h3>
                        <h3>we are open from Monday-Friday, 08:00am - 05:00pm</h3>
                    </div>

                    <div>
                        <h1>Share on</h1>
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
        </div>
    )
}

export default contact 