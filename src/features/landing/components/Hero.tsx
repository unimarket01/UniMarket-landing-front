import React, { useEffect, useState } from "react";
import delivery from "../../../assets/images/delivery.png";

const Hero: React.FC = () => {


  return (
    <div className="relative w-full px-4 sm:px-8 md:px-12 py-20 flex flex-col h-auto lg:h-200 lg:flex-row items-center justify-between overflow-hidden bg-[#2563EB] text-white text-center lg:text-left">
      <div className="z-10">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
          <span className="lg:hidden">Tu universidad,</span>
          <br className="lg:hidden" />
          <span className="lg:hidden">tu mercado</span>
          <br className="lg:hidden" />
          <span className="lg:hidden">¡Impulsa tu éxito aquí!</span>

          <span className="hidden lg:block">Tu Universidad, tu mercado</span>
          <span className="hidden lg:block">¡Impulsa tu éxito aquí!</span>
        </h2>

        <p className="text-base sm:text-2xl mt-4 font-medium max-w-xl mx-auto lg:mx-0">
          Únete gratis y sé de los primeros en vender.
        </p>

        <a href="#form">
          <button
            type="submit"
            className="w-full max-w-xs sm:max-w-md lg:max-w-64 mt-6 p-4 bg-gradient-to-r from-blue-700 to-blue-800 text-white font-bold rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-105 transform shadow-lg border-0 mx-auto lg:mx-0"
          >
            <span className="flex items-center justify-center">
              Únete a la lista de espera
            </span>
          </button>
        </a>

      </div>

      <img
        src={delivery}
        alt="delivery"
        className="hidden lg:block absolute right-0 bottom-0 max-w-[800px] z-0 pointer-events-none"
      />

      <div className="lg:hidden w-full flex justify-center z-10">
        <img
          src={delivery}
          alt="Repartidor Mobile"
          className="max-w-100 h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default Hero;
