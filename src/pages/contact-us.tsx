/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
// import { signIn } from "next-auth/react";
import Link from "next/link";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
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
    const [showPassword, setShowPassword] = useState(false);

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
        const formattedPhoneNumber = formData.phoneNumber.startsWith("+61") ? formData.phoneNumber : "+61" + formData.phoneNumber;
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
        <div>
            <div>

            </div>
            <div>
                <div>
                    <h1>
                        Questions or need assistance? Let us know about it
                    </h1>
                    <h2>
                        Email us below to any question related to our event
                    </h2>
                </div>
                <div className="md:w-[450px]">
                    <form action="" onSubmit={onSubmit} className={`space-y-5  p-5`}>
                        <div className={`flex flex-col `}>
                            <label
                                htmlFor="firstName"
                                className={`font-bold text-[16px] px-2 my-1`}
                            >
                                fisrtName
                            </label>
                            <input
                                type="firstName"
                                placeholder="Enter your email-address"
                                id="firstame"
                                name="firstName"
                                className={``}
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={`flex flex-col`}>
                            <label htmlFor="phoneNumber" className={`font-bold text-[16px] my-3`}>
                                Phone Number <span className={`text-red10`}>*</span>
                            </label>
                            <div className={`flex items-center justify-around`}>
                                <h4 className={`border-medium border-[1px] text-base text-black font-bold p-3 rounded-xl`}>AU +61</h4>
                                <input type="tel" placeholder='Enter phone number' name='phoneNumber' id='phoneNumber' className={`border-medium border-[1px] text-base text-black font-bold py-3 px-10 tracking-[0.3rem] rounded-xl w-5/6`} value={formData.phoneNumber} onChange={handleChange} onKeyDown={handlePhoneNumberKeyDown} required maxLength={9} minLength={9}
                                />
                            </div>
                        </div>

                        <div className={`flex flex-col `}>
                            <label
                                htmlFor="email"
                                className={`font-bold text-[16px] px-2 my-1`}
                            >
                                Email <span className={`text-red10`}>*</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Enter your email-address"
                                id="email"
                                name="email"
                                className={``}
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>





                        <div className={`flex justify-center items-center`}>
                            <button
                                type="submit"
                                className={`w-full bg-purpleBase text-white py-2 px-4 rounded-md hover:bg-purple5 text-sm ${isAllFieldsFilled() ? '' : 'cursor-not-allowed opacity-50'}`}
                                disabled={!isAllFieldsFilled()}
                            >
                                Log In
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default contact 