import { useState, useEffect } from "react";
import Link from "next/link"
import { FaLaptopCode, FaCode } from "react-icons/fa";
import classNames from "classnames";

const Nav = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [nav, setNav] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const iconClass = classNames(
    "transform transition-all duration-600 ease-in-out cursor-pointer",
    {
      "scale-110 rotate-45": isHovering,
      "scale-100 rotate-0 ": !isHovering,
    }
  );

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    window.onscroll = function () {
      scrollFunction();
    };
  }, []);

  function scrollFunction() {
    if (document.getElementById("navbar")) {
      if (window.scrollY >= 10) {
        document.getElementById("navbar").classList.add("shadow-navbar");
        document.getElementById("navbar").classList.add("bg-white/90");
      } else {
        document.getElementById("navbar").classList.remove("shadow-navbar");
        document.getElementById("navbar").classList.remove("bg-white/90");
      }
    }
  }

  return (
    <nav>
      <div
        id="navbar"
        data-scroll
        data-scroll-id="hey"
        className="fixed top-0 z-40 items-center w-full py-6 transition duration-300 ease-in-out shadow-navbar">
        <div className="max-w-[1240px] flex justify-between mx-auto ">
          <div
            className="flex items-center gap-2 font-bold font_titulos"
            onMouseEnter={ handleMouseEnter }
            onMouseLeave={ handleMouseLeave }
          >
            <div className={ iconClass }>
              { isHovering ? (
                <FaCode/>
              ) : (
                <FaLaptopCode className="text-black text-md" />
              ) }
            </div>
            <h2 className="transition duration-300 ease-in-out transform cursor-pointer eading-6 hover:text-orange-400 hover:scale-90">Icon</h2>
          </div>

          <div className="font_titulos font-bold text-[14px] flex gap-8">
            <Link
              href="/"
              className="transition duration-300 ease-in-out transform cursor-pointer eading-6 hover:text-orange-400 hover:scale-90">
              Inicio
            </Link>

            <Link
              href="/cases"
              className="transition duration-300 ease-in-out transform cursor-pointer eading-6 hover:text-orange-400 hover:scale-90">
              Casos
            </Link>

            <Link
              href="/services"
              className="transition duration-300 ease-in-out transform cursor-pointer eading-6 hover:text-orange-400 hover:scale-90">
              Servicios
            </Link>

            <Link
              href="/"
              className="transition duration-300 ease-in-out transform cursor-pointer eading-6 hover:text-orange-400 hover:scale-90">
              Blog
            </Link>

            <Link
              href="/about"
              className="transition duration-300 ease-in-out transform cursor-pointer eading-6 hover:text-orange-400 hover:scale-90">
              Sobre nosotros
            </Link>

            <Link
              href="/contact"
              className="transition duration-300 ease-in-out transform cursor-pointer eading-6 hover:text-orange-400 hover:scale-90">
              Contacto
            </Link>

            <Link
              href="/"
              className="px-8 text-white transition duration-300 ease-in-out transform bg-orange-500 border rounded-sm cursor-pointer eading-6 hover:bg-black hover:scale-90">
              us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav