import React from "react";
import Image from "next/image";
import ImgDec from "../ImgDec";

export default function CardOne({ item }) {
  return (
    <div className="bg-secondary-color mb-6">
      <a href="#">
        <ImgDec image={item.image} />
      </a>
      <div className="p-5">
        <p className="mb-3 font-normal text-para-color text-base first-letter:text-5xl first-letter:font-bold first-letter:pt-8">
          {item.part}
          <a href="#" className="font-bold">
            {item.subHeader}
          </a>{" "}
          {item.description}
        </p>
      </div>
    </div>
  );
}
