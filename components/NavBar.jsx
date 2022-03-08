import React, { useState } from "react";
import Image from "next/image";
import HamBurger from "./HamBurger";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-primary-color w-full sticky top-0 shadow-lg h-[70px] z-50">
      <div className="w-[95%] mx-auto flex justify-between items-center">
        <a
          href="#"
          className="flex flex-col items-center leading-[0.2px] py-3 cursor-pointer"
        >
          <Image src="/images/scbp-logo.png" width={42} height={42} alt="logo" />
          <small className="text-[8px] text-para-color tracking-widest font-extralight">
            SCBP
          </small>
        </a>
        <div onClick={() => setOpen(!open)} className="md:hidden">
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-secondary-color w-[28px] h-[28px] cursor-pointer font-semibold md:ml-48 ml-72"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="text-secondary-color w-[28px] h-[28px] cursor-pointer font-semibold"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </div>
        <ul className="md:flex hidden">
          <li className="">
            <a
              href="#"
              className="flex items-center p-2 px-2 text-sm font-thin hover:text-white text-[#e4ecdc] rounded-sm hover:border-b hover:border-[#e4ecdc] capitalize"
            >
              Home
            </a>
          </li>
          <li className="">
            <a
              href="#attitude"
              className="flex items-center p-2 px-2 text-sm font-thin hover:text-white text-[#e4ecdc] rounded-sm hover:border-b hover:border-[#e4ecdc] capitalize"
            >
              Cultivating a Good Attitude
            </a>
          </li>
          <li className="">
            <a
              href="#emotions"
              className="flex items-center p-2 px-2 text-sm font-thin hover:text-white text-[#e4ecdc] rounded-sm hover:border-b hover:border-[#e4ecdc] capitalize"
            >
              Dealing with Emotions
            </a>
          </li>
          <li className="">
            <a
              href="#self-care"
              className="flex items-center p-2 px-2 text-sm font-thin hover:text-white text-[#e4ecdc] rounded-sm hover:border-b hover:border-[#e4ecdc] capitalize"
            >
              Practicing Self-Care
            </a>
          </li>
          <li className="">
            <a
              href="#goals"
              className="flex items-center p-2 px-2 text-sm font-thin hover:text-white text-[#e4ecdc] rounded-sm hover:border-b hover:border-[#e4ecdc] capitalize"
            >
              Goals and Taking Risks
            </a>
          </li>
        </ul>

        {/* hamburger */}
        <div
          className={` md:hidden block absolute w-[65%] h-screen bg-para-color text-[#ffffff] px-2 transition-all duration-500 ease-in right-0 top-[68px] z-50 ${
            open ? "left-[35%] block" : "left-[35%] hidden"
          }`}
        >
          <HamBurger />
        </div>
      </div>
    </div>
  );
}
