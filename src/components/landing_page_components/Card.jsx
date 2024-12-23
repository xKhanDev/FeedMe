import React, { useState } from "react";
import { MdNavigateNext } from "react-icons/md";

const Card = ({ camp }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const percentage = (camp?.raised / camp?.goal) * 100;
  const images = Array.isArray(camp?.image) ? camp?.image : [camp?.image];

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="lg:w-[30%] md:w-[45%] w-full flex flex-col span_bg border-[0.5px] border-gray-500 rounded relative p-4">
      <span className="absolute top-2 left-2 bg-gray-500 rounded-full p-3 text-white text-[10px] px-2 py-1">
        {camp?.category}
      </span>
      <img
        src={images[currentImageIndex]}
        alt="campaign image"
        className="w-full h-32 ease-in-out duration-500"
      />
      {images.length > 1 && (
        <div className="w-full absolute left-0 top-20 flex items-center justify-between z-10">
          <button onClick={handlePrev} className="rotate-180">
            <MdNavigateNext className="text-4xl hover:scale-110" />
          </button>
          <button onClick={handleNext}>
            <MdNavigateNext className="text-4xl hover:scale-110" />
          </button>
        </div>
      )}
      <span className="h-[0.15px] bg-green-500"></span>
      <h1 className="font-semibold mt-2">{camp?.title}</h1>
      <h3 className="text-sm mt-1">Deadline: {camp?.deadline}</h3>
      <div className="flex items-center justify-between mt-2 mb-1">
        <h1 className="text-sm">Goal: {camp?.goal}$</h1>
        <h1 className="text-sm">Raised: {camp?.raised}$</h1>
      </div>
      <progress
        className="progress progress-success w-full"
        value={percentage}
        max="100"
      ></progress>
    </div>
  );
};

export default Card;
