import React from "react";
import { ArrowsUpFromLine, Coffee, CreditCard } from 'lucide-react';
import post from '../../../assets/images/post.png';
import handShake from '../../../assets/images/handshacke.jpg';
import packagee from '../../../assets/images/package.png';
const HowItWorks: React.FC = () => {
    return(
        <div id="how-it-work" className="flex flex-col justify-center bg-gray-100 w-full py-12 px-4 sm:px-6 lg:px-8 items-center text-center lg:h-210">

            {/*Title subtitle */}
            <div className="flex flex-col gap-6 md:gap-8 lg:gap-10 max-w-4xl">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                    ¿Cómo funciona?
                </h2>
                <p className="text-base md:text-xl text-gray-700">
                    Un proceso simple y directo para conectar emprendedores con compradores.
                </p>
            </div>

                {/**Key features */}
                <div className="flex flex-col lg:flex-row mt-10 md:mt-12 lg:mt-16 gap-6 w-full max-w-6xl mx-auto">
                    
                    {/**Card 1 */}
                    <div className="flex flex-col h-full border-none shadow-md hover:shadow-gray-400 transition-shadow duration-300">
                        <div className="flex flex-col flex-1 bg-white rounded-t-lg items-center text-center p-6 sm:p-8 md:p-12">
                            
                            {/**Icon */}
                            <div className="flex bg-gray-200 w-12 h-12 sm:w-14 sm:h-14 rounded-full justify-center items-center mb-4">
                                <ArrowsUpFromLine size={28} className="text-black" />
                            </div>

                            {/**content */}
                            <div className="flex-1 flex flex-col justify-center">
                                <h3 className="font-semibold text-xl sm:text-2xl mb-3">
                                    Publica tu producto
                                </h3>

                                <p className="text-gray-700 text-sm sm:text-base">
                                    Crea tu perfil de emprendedor y sube tus productos o servicios con fotos, descripciones y precios.
                                </p>
                            </div>
                        </div>

                        {/**Img */}  
                        <div className="w-full h-48 bg-gray-200 overflow-hidden rounded-b-lg"> 
                                <img
                                src={post}
                                alt="Placeholder de Publicación"
                                className="w-full h-full object-cover"/>
                            </div>
                        </div>

                    {/**Card 2 */}
                    <div className="flex flex-col h-full border-none shadow-md hover:shadow-gray-400 transition-shadow duration-300">
                        <div className="flex flex-col flex-1 bg-white rounded-t-lg items-center text-center p-6 sm:p-8 md:p-12">
                            
                            {/**Icon */}
                            <div className="flex bg-gray-200 w-12 h-12 sm:w-14 sm:h-14 rounded-full justify-center items-center mb-4">
                                <Coffee size={28} className="text-black" />
                            </div>

                            {/**content */}
                            <div className="flex-1 flex flex-col justify-center">
                                <h3 className="font-semibold text-xl sm:text-2xl mb-3">
                                    Conecta con compradores
                                </h3>

                                <p className="text-gray-700 text-sm sm:text-base">
                                    Los compradores encuentran tus productos y se ponen en contacto directamente contigo a través de la plataforma.
                                </p>
                            </div>                         
                        </div>

                        {/**Img */}  
                        <div className="w-full h-48 bg-gray-200 overflow-hidden rounded-b-lg"> 
                                <img
                                src={handShake}
                                alt="Placeholder de Publicación"
                                className="w-full h-full object-cover"/>
                            </div>
                        </div>

                    {/**Card 3 */}
                    <div className="flex flex-col h-full border-none shadow-md hover:shadow-gray-400 transition-shadow duration-300">
                        <div className="flex flex-col flex-1 bg-white rounded-t-lg items-center text-center p-6 sm:p-8 md:p-12">
                            
                            {/**Icon */}
                            <div className="flex bg-gray-200 w-12 h-12 sm:w-14 sm:h-14 rounded-full justify-center items-center mb-4">
                                <CreditCard size={28} className="text-black" />
                            </div>

                            {/**content */}
                            <div className="flex-1 flex flex-col justify-center">
                                <h3 className="font-semibold text-xl sm:text-2xl mb-3">
                                    Realiza la venta
                                </h3>

                                <p className="text-gray-700 text-sm sm:text-base">
                                    Coordina la entrega y el pago directamente con el comprador, sin intermediarios ni comisiones.
                                </p>
                            </div>
                        </div>

                        {/**Img */}
                        <div className="w-full h-48 bg-gray-200 overflow-hidden rounded-b-lg"> 
                                <img
                                src={packagee}
                                alt="Placeholder de Publicación"
                                className="w-full h-full object-cover"/>
                            </div>
                        </div>
                </div>
        </div>
    );
};

export default HowItWorks;