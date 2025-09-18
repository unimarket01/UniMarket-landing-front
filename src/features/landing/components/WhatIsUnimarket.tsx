import React from "react";
import { Pen, ShoppingCart, Check } from 'lucide-react';

const WhatIsUnimarket: React.FC = () => {
    return(
        <div id="what-is-unimarket" className="flex flex-col bg-gray-50 w-full py-12 px-4 sm:px-6 lg:px-8 items-center text-center justify-center lg:h-200">
            <div className="flex flex-col items-center gap-6 md:gap-8 lg:gap-10 max-w-4xl mx-auto">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                    ¿Qué es <span className="text-blue-600">Unimarket</span> y por qué importa?
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                    Una plataforma diseñada específicamente para la comunidad universitaria, donde los emprendedores pueden brillar y los compradores pueden descubrir productos únicos.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row mt-10 md:mt-12 lg:mt-16 gap-6 w-full max-w-6xl mx-auto">
                
                <div className="flex flex-col flex-1 border border-gray-300 rounded-lg items-center text-center p-6 sm:p-8 md:p-10 shadow-md hover:shadow-gray-400 transition-shadow duration-300">
                    <div className="flex bg-gray-200 w-12 h-12 sm:w-14 sm:h-14 rounded-full justify-center items-center mb-4">
                        <Pen size={28} className="text-black" />
                    </div>

                        <h3 className="font-semibold text-xl sm:text-2xl mb-3">
                            Para emprendedores
                        </h3>
                        <p className="text-gray-700 text-sm sm:text-base mb-6">
                            Visibilidad inmediata, cero comisiones y la oportunidad de crecer tu negocio dentro de un mercado específico y receptivo.
                        </p>
                        <ul className="text-left space-y-2 text-sm sm:text-base">
                            <li className="flex items-start gap-2">
                                <Check size={18} className="text-blue-600 mt-1 flex-shrink-0" />
                                <span>Publica tus productos sin costos ocultos</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Check size={18} className="text-blue-600 mt-1 flex-shrink-0" />
                                <span>Conecta directamente con tu audiencia</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Check size={18} className="text-blue-600 mt-1 flex-shrink-0" />
                                <span>Crece tu marca personal y profesional</span>
                            </li>
                        </ul>
                </div>

                <div className="flex flex-col flex-1 border border-gray-300 rounded-lg items-center text-center p-6 sm:p-8 md:p-10  shadow-md hover:shadow-gray-400 transition-shadow duration-300">
                    
                    <div className="flex bg-gray-200 w-12 h-12 sm:w-14 sm:h-14 rounded-full justify-center items-center mb-4">
                        <ShoppingCart size={28} className="text-black" />
                    </div>
                    
                    <h3 className="font-semibold text-xl sm:text-2xl mb-3">
                        Para compradores
                    </h3>
                    <p className="text-gray-700 text-sm sm:text-base mb-6">
                        Descubre productos únicos y apoya el talento universitario mientras encuentras soluciones innovadoras a tus necesidades.
                    </p>

                    <ul className="text-left space-y-2 text-sm sm:text-base">
                        <li className="flex items-start gap-2">
                            <Check size={18} className="text-blue-600 mt-1 flex-shrink-0" />
                            <span>Accede a productos y servicios exclusivos</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <Check size={18} className="text-blue-600 mt-1 flex-shrink-0" />
                            <span>Apoya directamente a emprendedores universitarios</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <Check size={18} className="text-blue-600 mt-1 flex-shrink-0" />
                            <span>Encuentra soluciones innovadoras a precios justos</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default WhatIsUnimarket;