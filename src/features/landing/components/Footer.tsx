import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white text-gray-700 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center md:items-start md:justify-between gap-8">

        {/* UniMarket Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-semibold">UniMarket</h2>
          </div>
          <p className="text-sm mt-2 max-w-xs">
            La plataforma que conecta el talento universitario con compradores reales.
          </p>
        </div>

        {/* Legal and Contact Info */}
        <div className="flex flex-col items-center md:items-center gap-2 text-sm md:flex-grow">
          <div className="flex flex-col md:flex-row gap-4 items-center md:justify-center">
            <a href="#" className="hover:underline">Política de Privacidad</a>
            <a href="#" className="hover:underline">Términos y Condiciones</a>
            <span>contacto@unimarket.com</span>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-4">
          <Facebook className="w-10 h-10 p-2 text-gray-700 hover:bg-gray-200" />
          <Twitter className="w-10 h-10 p-2 text-gray-700 hover:bg-gray-200" />
          <Instagram className="w-10 h-10 p-2 text-gray-700 hover:bg-gray-200" />
          <Linkedin className="w-10 h-10 p-2 text-gray-700 hover:bg-gray-200" />
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="text-center text-xs text-gray-500 py-4 border-t border-gray-200">
        © 2025 UniMarket
      </div>
    </footer>
  );
};

export default Footer;