/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import manWalking from "../../../public/man-walking.svg";
import ladyWalking from "../../../public/lady-walking.svg";
import register from "../../../public/register.svg";
import { data } from "autoprefixer";

interface FormState {
  teamName: string;
  phoneNumber: string;
  email: string
  projectTopic: string;
  agreement: boolean,
  category: string;
  groupSize: number;
}

const index = () => {

  // useEffect(() => {
  //   fetch('https://backend.getlinked.ai/hackathon/categories-list')
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       return response.json(); // Get the response as text
  //     })
  //     .then((responseData) => {
  //       const names = responseData.map((category: { name: any; }) => category.name);
  //       console.log(names); // Log the response data
  //       // / Now, you can analyze the response and determine its format.
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching data:', error);
  //     });
  // }, []);


  const [formData, setFormData] = useState({
    teamName: '',
    phoneNumber: '',
    email: '',
    projectTopic: '',
    agreement: false,
    category: '',
    groupSize: ''
  });



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
    const requiredFields: (keyof typeof formData)[] = ['teamName', 'phoneNumber', 'email', 'projectTopic', 'category', 'groupSize'];
    return requiredFields.every(field => formData[field] !== '') && formData.agreement;
  }



  const onSubmit = async (event: any) => {
    event.preventDefault();


    try {
      const user = {
        //   firstName: formData.firstName,
        //   lastName: formData.lastName,
        //   phoneNumber: formattedPhoneNumber, // Use the formatted phone number here
        //   emailAddress: formData.email,
        //   password: formData.password,
        // idNumber: formData.idNumber,
      }

      const payload = {
        // firstName: formData.firstName,
        // lastName: formData.lastName,
        // phoneNumber: formattedPhoneNumber, // Use the formatted phone number here
        // emailAddress: formData.email,
        // password: formData.password,
        // idNumber: formData.idNumber,


      }

      // const res = await serviceProviderSignup(user);

      //   console.log('Signup payload:', payload);
      //   const res = await fetch('https://service-rppp.onrender.com/api/v1/service_provider/sign-up', { method: 'POST', body: JSON.stringify(payload) })

      //   console.log('Signup response:', res);
    } catch (error) {
      //   console.log('Signup error:', error);
    }


  }

  return (
    <div className={`border-b-[1px] p-10 space-y-5 border-[#FFFFFF2E] md:space-y-10 md:px-20 md:py-14 flex flex-col md:flex-row justify-between items-center`}>
      <div className=" w-full md:w-2/3 flex flex-col md:flex-row justify-start">
        <h1 className="text-[#D434FE] md:hidden mb-5 flex text-lg  font-extrabold">Register</h1>

        <div className=" w-full h-[250px]  sm:w-[300px] sm:h-[350px] relative md:w-[500px] md:h-[600px]">
          <Image src={register} fill alt="" />
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
            <div className={`space-y-4 mb-10`}>
              <div className={`flex flex-col md:flex-row justify-between`}>
                <div className={`flex flex-col md:basis-[47%]`}>
                  <label htmlFor="teamName" className={`font-bold text-[16px]  my-3`}>
                    Team's Name
                  </label>
                  <input type="text" placeholder='Enter the name of your group' id='teamName' name='teamName' className={` border-[1px] border-[white] bg-transparent text-base text-[white] font-bold p-3 rounded-sm`} value={formData.teamName} onChange={handleChange} required

                  />
                </div>

                <div className={`flex flex-col md:basis-[47%]`}>
                  <label htmlFor="phoneNumber" className={`font-bold text-[16px] my-3`}>
                    Phone
                  </label>
                  <input type="tel" placeholder='Enter your phone number' name='phoneNumber' id='phoneNumber' className={`  border-[1px] border-[white] bg-transparent text-base text-[white] font-bold p-3 rounded-sm `} value={formData.phoneNumber} onChange={handleChange} onKeyDown={handlePhoneNumberKeyDown} required maxLength={11} minLength={11}
                  />
                </div>
              </div>

              <div className={`flex flex-col md:flex-row justify-between`}>
                <div className={`flex flex-col md:basis-[47%]`}>
                  <label htmlFor="email" className={`font-bold text-[16px] my-3`}>
                    Email
                  </label>
                  <input type="email" placeholder='Enter your email-address' id='email' name='email' className={`  border-[1px] border-[white] bg-transparent text-base text-[white] font-bold p-3 rounded-sm`} value={formData.email} onChange={handleChange} required
                  />
                </div>

                <div className={`flex flex-col md:basis-[47%]`}>
                  <label htmlFor="projectTopic" className={`font-bold text-[16px]  my-3`}>
                    Project Topic
                  </label>
                  <input type="text" placeholder='What is your group project topic' id='projectTopic' name='projectTopic' className={` border-[1px] border-[white] bg-transparent text-base text-[white] font-bold p-3 rounded-sm`} value={formData.projectTopic} onChange={handleChange} required
                  />
                </div>
              </div>

              <div className={`flex justify-between`}>
                <div className={`flex flex-col basis-[55%] md:basis-[47%]`}>
                  <label htmlFor="category" className={`font-bold text-[16px]  my-3`}>
                    Category
                  </label>
                  <select name="Select your Category" id="category" className={`border-[1px] border-[white] bg-transparent text-base text-[white] font-bold p-3 rounded-sm`} value={formData.category} onChange={handleChange} required >
                    <option>
                      {/* {data.map((name, index) => (
                        <li key={index}>{name}</li>
                      ))} */}
                    </option>
                  </select>
                </div>

                <div className={`flex flex-col basis-[35%] md:basis-[47%]`}>
                  <label htmlFor="lastName" className={`font-bold text-[16px]  my-3`}>
                    Group Size <span className={`text-red10`}></span>
                  </label>

                  <select name="Select" id="groupSize" className={`border-[1px] border-[white] bg-transparent text-base text-[white] font-bold p-3 rounded-sm`} value={formData.groupSize} onChange={handleChange} required >
                    <option>
                      {/* {data.map((name, index) => (
                        <li key={index}>{name}</li>
                      ))} */}
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <h1 className="text-[#FF26B9] text-[12px] font-extrabold md:text-[16px]">Please review your registration details before submitting</h1>
              </div>


              <div className={`space-x-2`}>
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default index;
