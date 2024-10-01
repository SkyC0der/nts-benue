// components/MultiStepForm.tsx
import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import { format } from "date-fns"

import { Link } from 'react-router-dom';
import logo from '../assets/homelogo.png';
import background from '../assets/homepage.png';
// import { Calendar as CalendarIcon } from "lucide-react"

// import { cn } from "@/lib/utils"
// import { Button } from "@/components/ui/button"
// import { Calendar } from "@/components/ui/calendar"
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover"


const MultiStepForm= () => {
  const progress = 25;
  const [step, setStep] = useState(1);
  const [date, setDate] = React.useState(new Date())

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    username: '',
    password: '',
  });

  const totalSteps = 4;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const nextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Handle final form submission (e.g., send data to server)
  };

  return (
    <div
    className="font-myLocalFont min-h-screen w-full bg-blend-hard-light bg-[#f1e6c7] bg-cover bg-center bg-no-repeat flex justify-center items-center p-4"
    style={{ backgroundImage: `url(${background})`}}
  >
    <div className="px-6 max-w-[40rem] py-12">

    <ProgressBar step={step} totalSteps={totalSteps} />
      <form className="max-w-5xl" onSubmit={handleSubmit}>
        {step === 1 && (
          <div>
         
          
            <div className="w-full max-w-5xl p-10 rounded-lg shadow-lg relative">
              <div className="flex flex-col lg:flex-row">
                {/* Left side - Form */}
                <div className="w-full lg:w-1/2 pr-0 lg:pr-8">
                  {/* Progress Bar */}
                  <div className="w-full rounded-xl h-3 bg-gray-300 mb-6">
                    <div
                      className="h-full bg-yellow-600 transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                  {/* Logo */}
                  <div className="mb-6">
                    <img src={logo} alt="NTS Benue Logo" className="mx-auto max-w-[150px]" />
                  </div>
                  
                  {/* Form */}
                    <div className="flex flex-col">
                      <label htmlFor="Full Name">Full Name</label>
                    <input
                      type="text"
                      placeholder="Your Full Name"
                      className="font-bell w-[496px] border border-primary h-[67px] px-3 text-[24px]"
             
                      aria-label="Full Name"
                    />

                    </div>
                    <input
                      type="text"
                      placeholder="Phone Number"
                      className="w-full p-2 border-b-2 border-yellow-800 bg-transparent text-white"
                      aria-label="Phone Number"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <div className="relative">
                      <select
                        className="w-full p-2 border-b-2 border-yellow-800 bg-transparent appearance-none"
                        aria-label="Gender"
                      >
                        <option value="">What is your Gender?</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                        </svg>
                      </div>
                    </div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full p-2 border-b-2 border-yellow-800 bg-transparent text-white"
                      aria-label="Email Address"
                    />
                  
                  <div className="flex justify-between mt-6">
                    <Link to="/" className="text-yellow-900 hover:text-yellow-700">
                      &lt; Go Back
                    </Link>
                    <Link to="/login">
                      <button
                        type="button"
                        className="px-6 py-2 bg-yellow-800 text-white rounded-full hover:bg-yellow-700 transition duration-300"
                      >
                        Continue
                      </button>
                    </Link>
                  </div>
                </div>
                
                {/* Right side - Text */}
                <div className="font-externalFont w-full lg:w-1/2 flex items-center justify-center text-center mt-8 lg:mt-0">
                  <h2 className="text-3xl font-bold text-[#6B120E] leading-tight">
                    YOUR JOURNEY TO CLAIM THE ROYAL BOUNTY STARTS HERE...
                  </h2>
                </div>
              </div>
            </div>
          </div>
        )}
        {step === 2 && (
         <div className="flex flex-col gap-4 my-6">
            <select
           aria-placeholder="Are you a Lord or Lady?"
           className="font-bell px-3  bg-white color w-[496px] border border-primary h-[67px]  text-[24px]"
           name="gender"
           id=""
         >
           <option className="" value="" disabled selected hidden>
            LC
           </option>
           <option value="male">Lord</option>
           <option value="female">Lady</option>
         </select>
         <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full marker: justify-start text-left font-normal font-bell w-[496px] border border-primary h-[67px] px-3 text-[24px]",
            !date && "text-muted-foreground"
          )}
        >
          {/* <CalendarIcon className="mr-2 bg-white h-4 " /> */}
          {date ? format(date, "PPP") : <span className='text-[#999]'>Date of birth</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full bg-white p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
    <select
           aria-placeholder="Are you a Lord or Lady?"
           className="font-bell px-3  bg-white color w-[496px] border border-primary h-[67px]  text-[24px]"
           name="gender"
           id=""
         >
           <option className="" value="" disabled selected hidden>
            Position
           </option>
           <option value="male">Lord</option>
           <option value="female">Lady</option>
         </select>
         <select
           aria-placeholder="Are you a Lord or Lady?"
           className="font-bell px-3  bg-white color w-[496px] border border-primary h-[67px]  text-[24px]"
           name="gender"
           id=""
         >
           <option className="" value="" disabled selected hidden>
           Is this your debutante season?
           </option>
           <option value="male">Lord</option>
           <option value="female">Lady</option>
         </select>
         <input
           type="text"
           name="lastName"
           placeholder="Phone Number"
           className="font-bell w-[496px] border border-primary h-[67px] px-3 text-[24px]"
           value={formData.lastName}
           onChange={handleChange}
         />
         
         <input
           type="text"
           name="email"
           placeholder="Email Address"
           className="font-bell w-[496px] border border-primary h-[67px] px-3 text-[24px]"
           value={formData.email}
           onChange={handleChange}
         />
       </div>
        )}
        {step === 3 && (
         <div className="flex flex-col gap-4 my-6">
        
        <select
           aria-placeholder="Are you a Lord or Lady?"
           className="font-bell px-3  bg-white color w-[496px] border border-primary h-[67px]  text-[24px]"
           name="gender"
           id=""
         >
           <option className="" value="" disabled selected hidden>
           Is this your debutante season?
           </option>
           <option value="male">Lord</option>
           <option value="female">Lady</option>
         </select>
         <input
           type="text"
           name="email"
           placeholder="Email Address"
           className="font-bell w-[496px] border border-primary h-[67px] px-3 text-[24px]"
           value={formData.email}
           onChange={handleChange}
         />
         <select
           aria-placeholder="Are you a Lord or Lady?"
           className="font-bell px-3  bg-white color w-[496px] border border-primary h-[67px]  text-[24px]"
           name="gender"
           id=""
         >
           <option className="" value="" disabled selected hidden>
             Are you a Lord or Lady?
           </option>
           <option value="male">Lord</option>
           <option value="female">Lady</option>
         </select>
         <input
           type="text"
           name="email"
           placeholder="Email Address"
           className="font-bell w-[496px] border border-primary h-[67px] px-3 text-[24px]"
           value={formData.email}
           onChange={handleChange}
         />
       </div>
        )}

        {step === 4 && (
          <div className="flex flex-col gap-4 my-6">
          <input
            type="text"
            name="firstName"
            placeholder="How may we address you?"
            className="font-bell w-[496px] border border-primary h-[67px] px-3 text-[24px]"
            value={formData.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Phone Number"
            className="font-bell w-[496px] border border-primary h-[67px] px-3 text-[24px]"
            value={formData.lastName}
            onChange={handleChange}
          />
        
        </div>
        )}
        <div className="mt-8 flex gap-8">
          {step > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="button  bg-primary w-full  font-sans tracking-tighter py-4 font-medium text-white text-center"
            >
              Previous
            </button>
          )}
          {step < totalSteps && (
            <button
              type="button"
              onClick={nextStep}
              className="button bg-primary font-sans tracking-tighter w-full py-4 font-medium text-white text-center"
            >
              Next
            </button>
          )}
          {step === totalSteps && (
            <button type="submit" 
            className="button bg-primary font-sans tracking-tighter w-full py-4 font-medium text-white text-center">
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
    </div>
  );
};

export default MultiStepForm;
