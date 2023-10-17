/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import manWalking from "../../../public/man-walking.svg";
import ladyWalking from "../../../public/lady-walking.svg";
import registerImg from "../../../public/register.svg";
import successImg from '../../../public/congratulations.svg'
import winkEmoji from '../../../public/wink-emoji.svg'
import { Button } from "@/components/Button/Button";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface FormState {
  teamName: string;
  phoneNumber: string;
  email: string
  projectTopic: string;
  agreement: boolean,
  category: number;
  groupSize: number;
}

const index: React.FC<FormState> = () => {
  const [dataNames, setDataNames] = useState([]);
  const [dataIds, setDataIds] = useState([])
  const [register, setRegister] = useState("Register Now");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);


  useEffect(() => {
    fetch('https://backend.getlinked.ai/hackathon/categories-list')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Get the response as text
      })
      .then((responseData) => {
        const names = responseData.map((category: { name: any; }) => category.name);
        const ids = responseData.map((category: { id: any; }) => category.id)
        setDataNames(names);
        setDataIds(ids)
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const [formData, setFormData] = useState({
    teamName: '',
    phoneNumber: '',
    email: '',
    projectTopic: '',
    agreement: false,
    category: 1,
    groupSize: 1
  });

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target; if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked, // Set the checkbox value to true or false
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));


    }

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
    const requiredFields: (keyof typeof formData)[] = ['teamName', 'phoneNumber', 'email', 'projectTopic', 'category', 'groupSize'];
    return requiredFields.every(field => formData[field] !== '') && formData.agreement;
  }

  const onSubmit = async (event: any) => {
    event.preventDefault();


    try {
      const user = {
        email: formData.email,
        phone_number: formData.phoneNumber,
        team_name: formData.teamName,
        group_size: formData.groupSize,
        project_topic: formData.projectTopic,
        category: formData.category,
        privacy_poclicy_accepted: formData.agreement

      }


      // console.log('Signup payload:', user);
      setRegister("Loading...");
      const response = await fetch(
        "https://backend.getlinked.ai/hackathon/registration",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );
      // console.log(response);

      if (response.ok) {
        setErrorMessage(null);
        const successMessage = "Registration successful";
        toast.success(successMessage, {
          position: toast.POSITION.TOP_RIGHT,
        });
        setSuccess(true);
      } else {
        const errorMessage = "An error occurred, check your credentials and try again.";
        setErrorMessage(errorMessage);
        toast.error(errorMessage, {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } catch (err) {
      const errorMessage =
        "An error occurred, check your network connection and try again.";
      setErrorMessage(errorMessage);
      toast.error(errorMessage, {
        position: toast.POSITION.TOP_RIGHT,
      });
      // console.log(err.message);
    } finally {
      setRegister("Register Now");
    }



  }

  return (
    <div className="flex justify-center mt-16 md:mt-24 items-center flex-col relative">
      <ToastContainer />
      <div className={`border-b-[1px] p-10 space-y-5 border-[#FFFFFF2E] md:space-y-10 md:px-20 md:py-14 flex flex-col md:flex-row justify-between items-center ${success ? "opacity-10" : ""}`}>
        <div className=" w-full md:w-2/3 flex flex-col md:flex-row justify-start">
          <h1 className="text-[#D434FE] md:hidden mb-5 flex text-lg  font-extrabold">Register</h1>

          <div className=" w-full h-[250px]  sm:w-[300px] sm:h-[350px] relative md:w-[500px] md:h-[600px]">
            <Image src={registerImg} fill alt="" />
          </div>
        </div>
        <div className={`w-full  my-10  md:rounded-md md:bg-[#FFFFFF08] md:p-10 md:px-16 md:w-[700px] md:flex md:flex-col md:shadow-lg`}>
          <div className="flex flex-col space-y-5 md:w-[500px] justify-center ">
            <h1 className="text-[#D434FE] hidden md:flex md:text-lg mb-5 font-extrabold">Register</h1>
            <div className="flex space-x-2 md:space-x-5  items-center">
              <h2 className="font-bold text-base md:text-[18px] ">Be part of this movement! </h2>
              <div className="flex justify-center w-[70px] md:w-[100px] mt-[-13px] space-x-1 items-center border-b-2 border-[#D434FE] border-dashed">
                <div className={`relative w-[30px] h-[30px]`}>
                  <Image src={ladyWalking} fill alt="" />
                </div>
                <div className={`relative  w-[30px] h-[30px]`}>
                  <Image src={manWalking} fill alt="" />
                </div>
              </div>
            </div>

            <div>
              <h1 className="font-bold text-[20px] md:text-[27px] tracking-wider mb-4">CREATE YOUR ACCOUNT</h1>
            </div>
          </div>
          <div className='w-full'>
            <form action="" onSubmit={onSubmit}>
              <div className="flex flex-col gap-8">
                {errorMessage && (
                  <p className="text-base font-medium text-error">
                    {errorMessage}
                  </p>
                )}
                <div className={`space-y-4 mb-10`}>
                  <div className={`flex flex-col md:flex-row justify-between `}>
                    <div className={`flex flex-col md:basis-[47%]`}>
                      <label htmlFor="teamName" className={`font-bold text-base md:text-[16px]  my-3`}>
                        Team's Name
                      </label>
                      <input type="text" placeholder='Enter the name of your group' id='teamName' name='teamName' className={` border-[1px] border-[white] bg-transparent text-base text-[white] font-bold p-3 rounded-sm`} value={formData.teamName} onChange={handleChange} required

                      />
                    </div>

                    <div className={`flex flex-col md:basis-[47%]`}>
                      <label htmlFor="phoneNumber" className={`font-bold text-base md:text-[16px] my-3`}>
                        Phone
                      </label>
                      <input type="tel" placeholder='Enter your phone number' name='phoneNumber' id='phoneNumber' className={`  border-[1px] border-[white] bg-transparent text-base text-[white] font-bold p-3 rounded-sm `} value={formData.phoneNumber} onChange={handleChange} onKeyDown={handlePhoneNumberKeyDown} required maxLength={11} minLength={11}
                      />
                    </div>
                  </div>

                  <div className={`flex flex-col md:flex-row justify-between`}>
                    <div className={`flex flex-col md:basis-[47%]`}>
                      <label htmlFor="email" className={`font-bold text-base md:text-[16px] my-3`}>
                        Email
                      </label>
                      <input type="email" placeholder='Enter your email-address' id='email' name='email' className={`  border-[1px] border-[white] bg-transparent text-base text-[white] font-bold p-3 rounded-sm`} value={formData.email} onChange={handleChange} required
                      />
                    </div>

                    <div className={`flex flex-col md:basis-[47%]`}>
                      <label htmlFor="projectTopic" className={`font-bold text-base md:text-[16px]  my-3`}>
                        Project Topic
                      </label>
                      <input type="text" placeholder='What is your group project topic' id='projectTopic' name='projectTopic' className={` border-[1px] border-[white] bg-transparent text-base text-[white] font-bold p-3 rounded-sm`} value={formData.projectTopic} onChange={handleChange} required
                      />
                    </div>
                  </div>

                  <div className={`flex justify-between space-x-5`}>
                    <div className={`flex flex-col basis-[50%] md:basis-[47%]`}>
                      <label htmlFor="category" className={`font-bold text-base md:text-[16px]  my-3`}>
                        Category
                      </label>
                      <select name="category" id="category" className={`border-[1px] border-[white] bg-transparent text-base text-[white] font-bold p-3 rounded-sm`} value={formData.category} onChange={handleChange} required >
                        <option value="" disabled hidden>Select your Category</option>
                        {dataNames.map((name, index) => (
                          <option key={index} value={dataIds[index]} className="bg-purple3 text-[white]">{name}</option>
                        ))}
                      </select>
                    </div>

                    <div className={`flex flex-col basis-[30%] md:basis-[47%]`}>
                      <label htmlFor="groupSize" className={`font-bold text-base md:text-[16px] my-3`}>
                        Group Size <span className={`text-red10`}></span>
                      </label>

                      <select name="groupSize" id="groupSize" className={`border-[1px] border-[white] bg-transparent text-base text-[white] font-bold p-3 rounded-sm`} value={formData.groupSize} onChange={handleChange} required >
                        <option value="" disabled hidden>Select</option>
                        <option className="bg-purple3 text-[white]">1</option>
                        <option className="bg-purple3 text-[white]">2</option>
                        <option className="bg-purple3 text-[white]">3</option>
                        <option className="bg-purple3 text-[white]">4</option>
                        <option className="bg-purple3 text-[white]">5</option>
                        <option className="bg-purple3 text-[white]">6</option>
                        <option className="bg-purple3 text-[white]">7</option>
                        <option className="bg-purple3 text-[white]">8</option>
                        <option className="bg-purple3 text-[white]">9</option>
                        <option className="bg-purple3 text-[white]">10</option>
                        <option className="bg-purple3 text-[white]">11</option>
                        <option className="bg-purple3 text-[white]">12</option>
                        <option className="bg-purple3 text-[white]">13</option>
                        <option className="bg-purple3 text-[white]">14</option>
                        <option className="bg-purple3 text-[white]">15</option>


                      </select>
                    </div>
                  </div>

                  <div>
                    <h1 className="text-[#FF26B9] text-[12px] font-extrabold md:text-[16px]">Please review your registration details before submitting</h1>
                  </div>


                  <div className={`space-x-2 h-[10px] flex items-center`}>
                    <input onChange={handleChange} type="checkbox" name="agreement" id="agreement" required />
                    <label htmlFor="agreement" className={`font-bold text-base`}>I agreed with the event terms and conditions  and privacy policy</label>
                  </div>

                </div>

                <div className={`flex justify-center items-center`}>
                  <div className={` rounded-[5px] flex items-center w-2/3 md:w-full justify-center `}>
                    <button
                      type="submit"
                      className={` text-[16px]   text-[white] font-extrabold  rounded-[5px] py-1 px-2 text-center justify-center w-full  h-[50px] bg-gradient-to-r from-[#903AFF] to-[#FE34B9] items-center cursor-not-allowed ${isAllFieldsFilled() ? 'hover:bg-purple1 cursor-pointer' : 'opacity-50'}`}
                      disabled={!isAllFieldsFilled()}>
                      Register Now
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {success && (
        <div className="p-5  opacity-100   flex-col w-5/6 h-[700px] md:w-[550px] md:h-[450px] justify-center items-center border-[1px] border-[#D434FE] absolute top-auto space-y-3 md:space-y-5">
          <div className="flex items-center justify-center">
            <div className="relative w-[350px] h-[350px] md:w-[300px] flex justify-center items-center md:h-[150px]">
              <Image src={successImg} fill alt="" />
            </div>
          </div>
          <div className="flex flex-col space-y-5 md:space-y-2">
            <div className="text-center mt-[-40px] md:mt-0 text-[30px] md:text-lg font-extrabold">
              <h1>Congratulations  </h1>
              <h1>You have successfully Registered!</h1>
            </div>

            <div className="flex flex-col text-center justify-center items-center text-base md:text-[12px]  font-extrabold">
              <h3>Yes, it was easy and you did it! </h3>
              <div className="flex">
                <h3>check your mail box for next step</h3>
                <div className="relative w-[20px] h-[20px]">
                  <Image src={winkEmoji} fill alt="" />
                </div>
              </div>
            </div>
          </div>


          <div className={`flex justify-center  items-center`}>
            <div className={`flex  justify-center mt-8 md:mt-0 items-center  `}>
              <Link href="/">
                <Button btnValue="Back" />
              </Link>
            </div>
          </div>

        </div>
      )}

    </div>
  );
};

export default index;
