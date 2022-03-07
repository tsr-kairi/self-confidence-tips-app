import React from "react";
import cards from "../../data/cards";
import cardsone from "../../data/cardsone";
import CardOne from "./CardOne";
import CardTow from "./CardTow";

export default function ScbpCard() {
  return (
    <div className="flex flex-col items-center md:w-[60%] mx-auto py-6">
      <div className="bg-secondary-color mb-8">
        <div className="p-5">
          <span className="flex items-center mb-1">
            <a
              href="#"
              className="md:text-xs text-[10px] text-subHeader-color font-bold mr-2"
            >
              EMOTIONS AND FEELINGS
            </a>{" "}
            {`>>`}{" "}
            <a
              href="#"
              className="md:text-xs text-[10px] text-subHeader-color font-bold ml-2"
            >
              CONFIDENCE
            </a>
          </span>
          <a href="#">
            <h5 className="mb-2 md:text-[35px] text-lg font-bold text-header-color">
              How to Build Self Confidence
            </h5>
          </a>
          <p className="mb-3 text-base font-normal text-para-color">
            Self-confidence is an essential part of humanity.[1] A person with
            self-confidence generally likes themselves, is willing to take risks to
            achieve their personal and professional goals, and thinks positively about the
            future.[2] Someone who lacks self-confidence, however, is less likely to feel
            that they can achieve their goals, and tends to have a negative perspective
            about themselves and what they hope to gain in life.[3] The good news is that
            self-confidence is something you can improve! Building self-confidence
            requires you to cultivate a positive attitude about yourself and your social
            interactions, while also learning to deal with any negative emotions that
            arise and practicing greater self-care. You should learn to set goals and take
            risks, as well, since meeting challenges can further improve your
            self-confidence.
          </p>
        </div>
      </div>
      {/* part-header-1 */}
      <div id="attitude" className="flex items-center w-full bg-secondary-color">
        <div className="flex flex-col items-center justify-center mr-6 bg-primary-color p-4 leading-4 font-medium text-secondary-color text-sm">
          <span>Part</span>
          <span className="text-[21px] font-bold">1</span>
        </div>
        <div className="text-[20px] text-header-color font-bold">
          Cultivating a Good Attitude
        </div>
      </div>
      {cards.map((item) => (
        <CardOne key={item.index} item={item} />
      ))}
      {/* part-header-2 */}
      <div id="emotions" className="flex items-center w-full bg-secondary-color">
        <div className="flex flex-col items-center justify-center mr-6 bg-primary-color p-4 leading-4 font-medium text-secondary-color text-sm">
          <span>Part</span>
          <span className="text-[21px] font-bold">2</span>
        </div>
        <div className="text-[20px] text-header-color font-bold">
          Dealing with Emotions
        </div>
      </div>
      {cardsone.map((item) => (
        <CardTow key={item.index} item={item} />
      ))}
    </div>
  );
}
