import Image from "next/image"
import bgIncentive from '../../../public/bg-home/bg-incentives.jpg.png'


export default function Incentives() {

  return (
    <div className="">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4 mx-auto w-full max-w-[1270px] mt-6">

        <div className="h-[300px] p-4 flex items-center justify-center mx-auto">
          <h2 className="text-4xl font_titulos">¿Por qué elegir la agencia de productos digitales emaart? </h2>
        </div>
        <div className="flex items-center justify-center w-2/3 p-4 mx-auto lg:col-span-2">
          <p className="font_text">
            Agencia de productos digitales Fireart?

            Fireart Studio es un estudio boutique de diseño y desarrollo de productos digitales. Contamos con más de 50 expertos en JS y diseño a bordo y más de 6 años de experiencia en la creación de proyectos digitales desde cero o en la actualización de los existentes.
          </p>
        </div>
        <div className=" p-4 h-[300px] flex items-center flex-col gap-8">
          <span>logo</span>
          <h2 className=" font_titulos text-[22px] font-bold">Equipo ágil de programadores JS </h2>
          <p className="font_text">Un equipo exclusivo de nuestra agencia de productos digitales, dedicado solo a su proyecto, sin microgestión, comunicación solo a través de un líder de equipo, que resuelve todos los problemas y se encarga de la entrega del producto.</p>
        </div>

        <div className="p-4 h-[300px] flex items-center flex-col gap-8">
          <span>logo</span>
          <h2 className=" font_titulos text-[22px] font-bold">Equipo ágil de programadores JS </h2>
          <p className="font_text">Un equipo exclusivo de nuestra agencia de productos digitales, dedicado solo a su proyecto, sin microgestión, comunicación solo a través de un líder de equipo, que resuelve todos los problemas y se encarga de la entrega del producto.</p>
        </div>


        <div className="relative hidden row-span-3 lg:flex ">
          <Image src={ bgIncentive } width={ 600 }
            className="object-cover rounded-tl-none rounded-br-none"
            height={ 400 }
            alt="imagen incentives"
            priority />
          <div className="absolute inset-0 bg-white opacity-70"></div>
        </div>


        <div className=" p-4 h-[300px] flex items-center flex-col gap-8">
          <span>logo</span>
          <h2 className=" font_titulos text-[22px] font-bold">Equipo ágil de programadores JS </h2>
          <p className="font_text">Un equipo exclusivo de nuestra agencia de productos digitales, dedicado solo a su proyecto, sin microgestión, comunicación solo a través de un líder de equipo, que resuelve todos los problemas y se encarga de la entrega del producto.</p>
        </div>


        <div className=" p-4 h-[300px] flex items-center flex-col gap-8">
          <span>logo</span>
          <h2 className=" font_titulos text-[22px] font-bold">Equipo ágil de programadores JS </h2>
          <p className="font_text">Un equipo exclusivo de nuestra agencia de productos digitales, dedicado solo a su proyecto, sin microgestión, comunicación solo a través de un líder de equipo, que resuelve todos los problemas y se encarga de la entrega del producto.</p>
        </div>
        <div className="p-4 h-[300px] flex items-center flex-col gap-8">
          <span>logo</span>
          <h2 className=" font_titulos text-[22px] font-bold">Integración con un proyecto en curso o inicio de uno nuevo </h2>
          <p className="font_text">Un equipo exclusivo de nuestra agencia de productos digitales, dedicado solo a su proyecto, sin microgestión, comunicación solo a través de un líder de equipo, que resuelve todos los problemas y se encarga de la entrega del producto.</p>
        </div>
        <div className="p-4 h-[300px] flex items-center flex-col gap-8">
          <span>logo</span>
          <h2 className=" font_titulos text-[22px] font-bold">Equipo ágil de programadores JS </h2>
          <p className="font_text">Un equipo exclusivo de nuestra agencia de productos digitales, dedicado solo a su proyecto, sin microgestión, comunicación solo a través de un líder de equipo, que resuelve todos los problemas y se encarga de la entrega del producto.</p>
        </div>
      </div>
    </div>
  )
}