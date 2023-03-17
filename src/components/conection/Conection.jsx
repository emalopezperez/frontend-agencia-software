import Image from "next/image"
import publicidad from "../../../public/publicidad/publicidad.jpg.png"
import Link from "next/link"

const Conection = () => {
  return (
    <div className="flex items-center justify-center h-[200px] mx-auto mb-20">
      <div className="grid grid-cols-2 max-w-[1210px] gap-10">
        <div className="w-[500px] h-[200px] flex flex-col items-center justify-center gap-6">
          <h2 className="text-5xl font-bold mt-14 font_titulos">Construyamos
            <Link href='/'>
              <span className="transition duration-300 ease-in-out transform cursor-pointer eading-6 hover:text-orange-400 hover:scale-90"> juntos</span>
            </Link>
          </h2>
          <p className="max-w-[400px] mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum soluta tempora ipsa corporis deleniti
          </p>

          <div className="flex flex-col mt-6 space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded dark:bg-orange-500 dark:text-white">Suspendisse</a>
            <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100">Malesuada</a>
          </div>

        </div>
        <div className="flex justify-center w-[400px]">
          <Image
            src={ publicidad }
            width={ 400 }
            className="object-cover rounded-tl-none rounded-br-none"
            alt="imagen incentives"
            priority />
        </div>
      </div>
    </div>
  )
}

export default Conection