import React from "react";

export default function HamBurger() {
  return (
    <ul className="">
      <p className="text-sm font-thin text-gray-400 pt-2 pb-4">Confidence</p>
      <hr />

      <li className="my-2">
        <a
          href="#"
          className="flex items-center p-2 px-4 text-base font-thin hover:text-white rounded-sm hover:bg-gray-400 capitalize"
        >
          Home
        </a>
      </li>
      <li className="mb-2">
        <a
          href="#attitude"
          className="flex items-center p-2 px-4 text-base font-thin hover:text-white rounded-sm hover:bg-gray-400 capitalize"
        >
          Cultivating a Good Attitude
        </a>
      </li>
      <li className="mb-1">
        <a
          href="#emotions"
          className="flex items-center p-2 px-4 text-base font-thin hover:text-white rounded-sm hover:bg-gray-400 capitalize"
        >
          Dealing with Emotions
        </a>
      </li>
      <li className="mb-2">
        <a
          href="#self-care"
          className="flex items-center p-2 px-4 text-base font-thin hover:text-white rounded-sm hover:bg-gray-400 capitalize"
        >
          Practicing Self-Care
        </a>
      </li>
      <li className="mb-2">
        <a
          href="#goals"
          className="flex items-center p-2 px-4 text-base font-thin hover:text-white rounded-sm hover:bg-gray-400 capitalize"
        >
          Goals and Taking Risks
        </a>
      </li>
      <li className="mt-20">
        <a
          href="#"
          className="flex items-center p-2 px-4 text-base font-thin hover:text-white rounded-sm capitalize"
        >
          Terms of Use
        </a>
      </li>
    </ul>
  );
}
