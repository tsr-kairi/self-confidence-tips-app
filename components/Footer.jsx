import React from "react";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="flex flex-col justify-center pt-4 mt-6 pb-4 bg-primary-color text-secondary-color z-10">
      <div className="md:w-[80%] w-[95%] mx-auto">
        <div className="flex items-center justify-center gap-4 pt-4">
          <a
            href="#"
            className="text-secondary-color text-xl rounded-full font-bold hover:bg-slate-500 bg-para-color p-2"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="text-secondary-color text-xl rounded-full font-bold hover:bg-slate-500 bg-para-color p-2"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="text-secondary-color text-xl rounded-full font-bold hover:bg-slate-500 bg-para-color p-2"
          >
            <FaLinkedinIn />
          </a>
        </div>
        <hr className="w-[90%] mx-auto mt-4" />
        <div className="flex flex-col md:flex-row items-center justify-center md:gap-4 mb-8 md:mt-2">
          <a href="#" className="flex flex-col items-center leading-[0.2px] mb-2 md:mb-0">
            <Image
              src="/images/scbp-logo.png"
              width={42}
              height={42}
              alt="logo"
              layout="fill"
            />
            <small className="text-[8px] text-para-color tracking-widest font-extralight">
              SCBP
            </small>
          </a>
          <small className="flex md:text-sm text-[10px] font-thin text-secondary-color">
            <span className="text-secondary-color font-bold md:mr-2">
              self confidence build platform
            </span>
            Ltd. ©copyright 2022
          </small>

          <div className="flex flex-col md:flex-row items-center">
            <small className="md:text-sm text-[10px] font-thin text-secondary-color">
              Terms & conditions Privacy Policies
            </small>
            <a href="#" className="object-cover flex items-center md:pl-2 mt-2 md:mt-0">
              <Image
                src="/images/contact_us.png"
                width={100}
                height={30}
                alt="contact_log"
                layout="fill"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
