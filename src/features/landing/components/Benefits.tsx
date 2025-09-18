import React from "react";
import { GraduationCap, CircleAlert, MessageSquare} from 'lucide-react';

const Benefits: React.FC = () => {
    return(
        <div id="benefits" className="flex flex-col bg-white w-full py-12 px-4 sm:px-6 lg:px-8 items-center text-center justify-center lg:h-200">
            <div className="flex flex-col items-center gap-2 md:gap-4 lg:gap-4 max-w-4xl mx-auto">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                    Beneficios claves
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                    Lo que hace a nuestro marketplace diferente y especial.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row mt-10 md:mt-12 lg:mt-16 gap-6 w-full max-w-6xl mx-auto">
                {/**target 1 */}
                <div className="flex flex-col flex-1 border border-gray-300 rounded-lg items-center text-center p-6 sm:p-8 md:p-10 shadow-md hover:shadow-gray-400 transition-shadow duration-300">
                    <div className="flex bg-gray-200 w-12 h-12 sm:w-14 sm:h-14 rounded-full justify-center items-center mb-4">
                        <GraduationCap size={28} className="text-black" />
                    </div>

                        <h3 className="font-semibold text-xl sm:text-2xl mb-3">
                            Para emprendedores
                        </h3>
                        <p className="text-gray-700 text-sm sm:text-base mb-6">
                            Visibilidad inmediata y la oportunidad de crecer tu negocio dentro de un mercado específico y receptivo.
                        </p>
                        
                </div>

                {/**target 2 */}
                <div className="flex flex-col flex-1 border border-gray-300 rounded-lg items-center text-center p-6 sm:p-8 md:p-10  shadow-md hover:shadow-gray-400 transition-shadow duration-300">
                    
                    <div className="flex bg-gray-200 w-12 h-12 sm:w-14 sm:h-14 rounded-full justify-center items-center mb-4">
                        <CircleAlert size={28} className="text-black" />
                    </div>
                    
                    <h3 className="font-semibold text-xl sm:text-2xl mb-3">
                        Para compradores
                    </h3>
                    <p className="text-gray-700 text-sm sm:text-base mb-6">
                        Descubre productos únicos y apoya el talento universitario mientras encuentras soluciones innovadoras a tus necesidades.
                    </p>

                </div>

                

                {/**target 4 */}
                <div className="flex flex-col flex-1 border border-gray-300 rounded-lg items-center text-center p-6 sm:p-8 md:p-10 shadow-md hover:shadow-gray-400 transition-shadow duration-300 lg:gap-4">
                    <div className="flex bg-gray-200 w-12 h-12 sm:w-14 sm:h-14 rounded-full justify-center items-center mb-4">
                        <MessageSquare size={28} className="text-black" />
                    </div>

                        <h3 className="font-semibold text-xl sm:text-2xl mb-3">
                            Contacto directo
                        </h3>
                        <p className="text-gray-700 text-sm sm:text-base mb-6">
                            Comunicación sin barreras entre compradores y vendedores.
                        </p>
                        
                </div>

            </div>
        </div>
    );
};
export default Benefits;