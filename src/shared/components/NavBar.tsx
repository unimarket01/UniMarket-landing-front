import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navbarBackground, setNavbarBackground] = useState("bg-transparent");
  const [navbarText, setNavbarText] = useState("text-white");

  const navItems = [
    { name: "Qué somos", href: "#what-is-unimarket" },
    { name: "Cómo funciona", href: "#how-it-work" },
    { name: "Beneficios", href: "#benefits" },
    { name: "únete", href: "#form" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 50; // Cambia esto al número de píxeles que desees

      if (window.scrollY > scrollThreshold) {
        setNavbarBackground("bg-white shadow-md border-gray-200");
        setNavbarText("text-blue-600");
      } else {
        setNavbarBackground("bg-transparent");
        setNavbarText("text-white");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Limpia el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuItemClick = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed w-full py-4 px-4 sm:px-6 lg:px-8 items-center z-50 transition-all duration-300 ${navbarBackground}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center flex-shrink-0">
          <h1
            className={`text-xl sm:text-2xl lg:text-3xl font-extrabold whitespace-nowrap ${navbarText}`}
          >
            Unimarket
          </h1>
        </div>

        {/* Botón de hamburguesa para móviles */}
        <div className="lg:hidden ml-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`${navbarText} focus:outline-none`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <ul className="hidden lg:flex flex-row items-center space-x-4 xl:space-x-8 font-normal">
          {navItems.map((item, idx) => (
            <li key={idx}>
              <a
                href={item.href}
                className={
                  item.name === "únete"
                    ? 
                      "px-3 py-2 xl:px-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl transition-all duration-300 hover:from-blue-700 hover:to-blue-800 hover:shadow-xl hover:scale-105 transform shadow-lg border-0 text-sm xl:text-base whitespace-nowrap"
                    :
                      `text-sm xl:text-lg p-2 rounded-md transition-colors duration-200 hover:bg-blue-100 hover:text-blue-700 whitespace-nowrap ${navbarText === "text-white" ? "text-white" : "text-blue-600"}`
                }
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className=" w-full lg:hidden mt-4 bg-white border-t border-gray-200">
          <ul className="flex flex-col space-y-2 py-4 font-normal">
            {navItems.map((item, idx) => (
              <li key={idx}>
                <a
                  href={item.href}
                  onClick={handleMenuItemClick}
                  className={
                    item.name === "únete"
                      ? "block mx-4 px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl transition-all duration-300 hover:from-blue-700 hover:to-blue-800 text-center"
                      : "block text-lg p-3 mx-4 rounded-md transition-colors duration-200 hover:bg-blue-100 hover:text-blue-700 text-blue-600" // Texto siempre azul en menú móvil
                  }
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;  