import {
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiCss3
} from "react-icons/si"


const About = () => {
  return (
    <div className="bg-[#f3f3f3] ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-8 mx-auto w-full max-w-[1270px] mt-20 ">
        <div className="flex justify-center col-span-1 sm:col-span-1 md:col-span-1 h-[100px] items-center mx-auto p-4 ">
          <h2 className="text-4xl font-bold font_titulos">Construimos más que experiencias </h2>
        </div>
        <div className="flex items-center justify-center col-span-1 p-4 border-t border-gray-200 sm:col-span-1 md:col-span-2">
          <p>Desde 2013, apoyamos a empresas globales y nuevas empresas en cada etapa del ciclo de vida de un producto, comenzando con la conceptualización, el diseño, la creación de prototipos, el desarrollo, las pruebas de usuario y la implementación de una solución completa.  </p>
        </div>
        <div className="col-span-1 sm:col-span-1 md:col-span-1 row-span-2 h-[200px] p-4 ">
          <p className="font_text">
            Fireart Studio es una agencia boutique de diseño de productos digitales. Contamos con más de 50 expertos en JS y diseño a bordo y más de 6 años de experiencia en la creación de proyectos digitales desde cero o en la actualización de los existentes como la agencia líder de productos digitales.
          </p>
        </div>
        <div className="col-span-1 row-span-2 p-4 sm:col-span-1 md:col-span-2 ">
          <p className="font_text">
            Al ser un socio confiable para más de 700 empresas audaces en todo el mundo, brindamos las soluciones de diseño y desarrollo generales para ayudar a nuestros clientes a convertirse en el juego de la industria: cambiadores, gigantes, personas influyentes, íconos.
          </p>
          <div className="flex gap-16 mx-auto mt-8 ">
            <SiCss3 className="text-4xl transition duration-300 ease-in-out transform cursor-pointer hover:scale-90" />
            <SiNodedotjs className="text-4xl transition duration-300 ease-in-out transform cursor-pointer hover:scale-90" />
            <SiReact className="text-4xl transition duration-300 ease-in-out transform cursor-pointer hover:scale-90" />
            <SiNextdotjs className="text-4xl transition duration-300 ease-in-out transform cursor-pointer hover:scale-90" />
          </div>
        </div>
      </div>
    </div>
  );
};


export default About