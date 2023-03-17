import Link from "next/link"

const Footer = () => {
  return (
    <div className="flex pt-10 bg-[#f3f3f3] ">
      <div className="grid h-[400px] grid-cols-1 gap-8 md:grid-cols-4 max-w-[1210px] mx-auto grid-rows-1 ">
        <div className="flex flex-col gap-4 p-5 ">
          <h2 className="font-bold font_titulos ">Logo</h2>
          <Link href='/' className="text-sm transition duration-300 ease-in-out transform cursor-pointer eading-6 hover:text-orange-400 hover:scale-90">Montevideo, Uruguay</Link>
          <Link href='/' className="text-sm transition duration-300 ease-in-out transform cursor-pointer eading-6 hover:text-orange-400 hover:scale-90">emanuel-lopez13@hotmail.com</Link>
          <Link href='/' className="text-sm transition duration-300 ease-in-out transform cursor-pointer eading-6 hover:text-orange-400 hover:scale-90">Sobre nosotros</Link>
        </div>

        <div className="flex flex-col gap-4 p-5">
          <h2 className="font-bold font_titulos">Contactanos</h2>
          <Link href='/' className="text-sm transition duration-300 ease-in-out transform cursor-pointer eading-6 hover:text-orange-400 hover:scale-90">Cases</Link>
          <Link href='/' className="text-sm transition duration-300 ease-in-out transform cursor-pointer eading-6 hover:text-orange-400 hover:scale-90">Servicios</Link>
          <Link href='/' className="text-sm transition duration-300 ease-in-out transform cursor-pointer eading-6 hover:text-orange-400 hover:scale-90">Sobre nosotros</Link>
          <Link href='/' className="text-sm transition duration-300 ease-in-out transform cursor-pointer eading-6 hover:text-orange-400 hover:scale-90">Blog</Link>
          <Link href='/' className="text-sm transition duration-300 ease-in-out transform cursor-pointer eading-6 hover:text-orange-400 hover:scale-90">Contacto</Link>
        </div>

        <div className="flex flex-col gap-5 p-4">
          <h2 className="font-bold font_titulos">Servicios</h2>
          <Link href='/' className="text-sm transition duration-300 ease-in-out transform cursor-pointer eading-6 hover:text-orange-400 hover:scale-90">Cases</Link>
          <Link href='/' className="text-sm transition duration-300 ease-in-out transform cursor-pointer eading-6 hover:text-orange-400 hover:scale-90">Servicios</Link>
          <Link href='/' className="text-sm transition duration-300 ease-in-out transform cursor-pointer eading-6 hover:text-orange-400 hover:scale-90">Sobre nosotros</Link>
          <Link href='/' className="text-sm transition duration-300 ease-in-out transform cursor-pointer eading-6 hover:text-orange-400 hover:scale-90">Blog</Link>
          <Link href='/' className="text-sm transition duration-300 ease-in-out transform cursor-pointer eading-6 hover:text-orange-400 hover:scale-90">Contacto</Link>
        </div>

        <div className="flex flex-col gap-5 p-4">
          <h2 className="font-bold font_titulos">Compañía</h2>
          <Link href='/' className="text-sm transition duration-300 ease-in-out transform cursor-pointer eading-6 hover:text-orange-400 hover:scale-90">Cases</Link>
          <Link href='/' className="text-sm transition duration-300 ease-in-out transform cursor-pointer eading-6 hover:text-orange-400 hover:scale-90">Servicios</Link>
          <Link href='/' className="text-sm transition duration-300 ease-in-out transform cursor-pointer eading-6 hover:text-orange-400 hover:scale-90">Sobre nosotros</Link>
          <Link href='/' className="text-sm transition duration-300 ease-in-out transform cursor-pointer eading-6 hover:text-orange-400 hover:scale-90">Blog</Link>
          <Link href='/' className="text-sm transition duration-300 ease-in-out transform cursor-pointer eading-6 hover:text-orange-400 hover:scale-90">Contacto</Link>
        </div>

        <div className="h-[40px] flex justify-center col-span-4 ">
          <p className="text-sm">Copyright © 2023 - All right reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer