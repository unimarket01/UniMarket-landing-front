import React, { useState } from "react";
import type { WaitlistUser } from "../types/user"; // Importamos el tipo
import { JoinWaitlistApi } from "../services/JoinWaitlistApi"; // Importamos el servicio actualizado
import cart from "../../../assets/images/back.jpg";

const JoinWaitlistForm: React.FC = () => {
  const [formData, setFormData] = useState<WaitlistUser>({
    name: "",
    email: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError(null);
  };

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      setError("Por favor, ingresa tu nombre");
      return false;
    }
    if (!formData.email.trim()) {
      setError("Por favor, ingresa tu correo electrónico");
      return false;
    }
    if (formData.name.trim().length < 2) {
      setError("El nombre debe tener al menos 2 caracteres");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Por favor, ingresa un correo electrónico válido");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);
    setError(null);

    try {
      await JoinWaitlistApi(formData);

      setEmailSent(true);
      setFormData({ name: "", email: "" });
    } catch (error: any) {
      console.error(error);
      setError(
        error.message || "Hubo un error al registrarte. Intenta de nuevo."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleTryAgain = () => {
    setEmailSent(false);
    setError(null);
  };

  if (emailSent) {
    return (
      <div
        id="form"
        className="flex flex-col justify-center bg-gray-100 w-full py-8 sm:py-12 px-4 sm:px-6 lg:px-8 items-center text-center min-h-[400px] lg:min-h-[500px]"
      >
        <div className="flex flex-col gap-4 md:gap-6 max-w-4xl mx-auto">
          <div className="mb-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              ¡Revisa tu correo! 📧
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Te enviamos un correo de verificación. Por favor, haz clic en el
              enlace de tu bandeja de entrada para activar tu cuenta.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button
              onClick={handleTryAgain}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl transition-all duration-300 hover:from-blue-700 hover:to-blue-800 hover:shadow-xl hover:scale-105 transform shadow-lg border-0 text-sm sm:text-base"
            >
              Registrar otro email
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      id="form"
      className="relative flex flex-col justify-center bg-gray-100 w-full py-8 sm:py-12 px-4 sm:px-6 lg:px-8 items-center text-center
     min-h-[400px] lg:min-h-[500px] bg-cover bg-center"
      style={{ backgroundImage: `url(${cart})` }}
    >

      <div className="absolute inset-0 bg-black/30 backdrop-blur-xs"></div>
      <div className="relative z-10 flex flex-col gap-3 md:gap-4 lg:gap-6 max-w-4xl mx-auto mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          No te pierdas el lanzamiento
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white max-w-2xl mx-auto leading-relaxed">
          Sé de los primeros en acceder a nuestra plataforma y aprovecha todos
          sus beneficios.
        </p>
      </div>

      <div className="w-full max-w-sm sm:max-w-md">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="space-y-2">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Tu nombre completo"
              className="bg-gradient-to-r from-white/20 to-white/5 backdrop-blur-md border border-white/30 
             text-white placeholder-white/70 p-3 sm:p-4 rounded-lg w-full text-sm sm:text-base 
             focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 
             disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>

          <div className="space-y-2">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              id="email"
              placeholder="Tu correo electrónico"
              className="bg-gradient-to-r from-white/20 to-white/5 backdrop-blur-md border border-white/30 
             text-white placeholder-white/70 p-3 sm:p-4 rounded-lg w-full text-sm sm:text-base 
             focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 
             disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`relative z-10 w-full px-4 py-3 sm:py-4 font-bold rounded-xl transition-all duration-300 transform shadow-lg
               border- text-sm sm:text-base whitespace-nowrap  ${
                 isLoading
                   ? "bg-gray-400 cursor-not-allowed"
                   : "bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 hover:shadow-xl hover:scale-105 active:scale-95"
               }`}
          >
            {isLoading ? (
              <div className="flex items-center justify-center gap-2">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                <span>Enviando...</span>
              </div>
            ) : (
              "Únete a la lista de espera"
            )}
          </button>
        </form>

        {error && (
          <div className="relative z-10 mt-4 p-3 rounded-lg text-sm bg-red-100 text-red-800 border border-red-300 animate-fade-in">
            {error}
          </div>
        )}
      </div>
    </div>
  );
};

export default JoinWaitlistForm;
