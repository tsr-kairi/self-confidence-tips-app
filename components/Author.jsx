import React from "react";
import Image from "next/image";

export default function Author() {
  return (
    <div className="md:block hidden mt-6 w-[30%]">
      {/* 1st */}
      <div className="flex flex-col bg-[#e4ecdc] mb-6">
        <div className="flex p-4">
          <a href="#">
            <Image
              className="rounded-full shadow-lg"
              src="/images/author-img.jpg"
              alt="author_img"
              height={50}
              width={50}
            />
          </a>
          <div className="flex flex-col ml-4">
            <small className="text-[10px]">Co-authored by:</small>
            <h5 className="text-base font-bold text-gray-900 tracking-widest">
              Ranjit Kairi
            </h5>
            <span className="text-xs text-gray-500">Frontend Developer</span>
          </div>
        </div>
        <div className="flex justify-between bg-secondary-color p-4">
          <a
            href="#"
            className="bg-[#e4ecdc] hover:bg-primary-color text-para-color hover:text-secondary-color py-1 px-3"
          >
            Prev
          </a>
          <a
            href="#"
            className="bg-[#e4ecdc] hover:bg-primary-color text-para-color hover:text-secondary-color py-1 px-3"
          >
            Next
          </a>
        </div>
      </div>
      {/* 2nd */}
      <div className="bg-secondary-color mb-6">
        <div className="flex flex-col p-1">
          <div className="flex items-center">
            <span className="text-[26px] text-para-color font-bold mr-1">92%</span>
            <span className="text-base text-para-color">
              of readers found this article <b>helpful</b>.
            </span>
          </div>
        </div>
      </div>
      {/* 3rd */}
      <div className="flex flex-col bg-secondary-color mb-6">
        <div className="flex p-4">
          <a
            href="#"
            className="flex items-center rounded-full shadow-lg h-[50px] w-[50px] bg-primary-color"
          ></a>
          <div className="flex flex-col ml-4">
            <h5 className="text-base font-bold text-gray-900 tracking-widest">
              Farkio Suiza
            </h5>
            <span className="text-xs text-gray-500">Feb-15-2022</span>
          </div>
        </div>
        <div className="flex justify-between p-4">
          <a
            href="#"
            className="bg-[#e4ecdc] hover:bg-primary-color text-para-color hover:text-secondary-color py-1 px-3"
          >
            Prev
          </a>
          <a
            href="#"
            className="bg-[#e4ecdc] hover:bg-primary-color text-para-color hover:text-secondary-color py-1 px-3"
          >
            Next
          </a>
        </div>
      </div>
      {/* 4th */}
      <div className="flex flex-col bg-secondary-color mb-6">
        <div className="flex p-4">
          <a
            href="#"
            className="flex items-center rounded-full shadow-lg h-[50px] w-[50px] bg-primary-color"
          ></a>
          <div className="flex flex-col ml-4">
            <h5 className="text-base font-bold text-gray-900 tracking-widest">Jon Doe</h5>
            <span className="text-xs text-gray-500">Jan-21-2022</span>
          </div>
        </div>
        <div className="flex justify-between p-4">
          <a
            href="#"
            className="bg-[#e4ecdc] hover:bg-primary-color text-para-color hover:text-secondary-color py-1 px-3"
          >
            Prev
          </a>
          <a
            href="#"
            className="bg-[#e4ecdc] hover:bg-primary-color text-para-color hover:text-secondary-color py-1 px-3"
          >
            Next
          </a>
        </div>
      </div>
    </div>
  );
}
