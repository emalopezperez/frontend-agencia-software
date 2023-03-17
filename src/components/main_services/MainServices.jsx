
const MainServices = ({titulo}) => {
  return (
    <main className="w-full mt-20 mb-20">
      <div className="grid grid-cols-3 grid-rows-1 gap-6 max-w-[1100px] mx-auto p-8">
        <div className="col-span-3 ">
          <h2 className="text-4xl font-bold font_titulos">{titulo}</h2>
        </div>

        <div className="bg-white h-[250px] md:h-[450px] grid grid-row-3 gap-2 p-6">
          <div className="">Icono</div>
          <div className="bg-dark-400 h-[150px] md:h-[300px]">info</div>
          <div className="bg-dark-500">Ver mas</div>
        </div>

        <div className="bg-white h-[250px] md:h-[450px] grid grid-row-3 gap-2 p-6">
          <div className="">Icono</div>
          <div className="bg-dark-400 h-[150px] md:h-[300px]">info</div>
          <div className="bg-dark-500">Ver mas</div>
        </div>
        <div className="bg-white h-[250px] md:h-[450px] grid grid-row-3 gap-2 p-6">
          <div className="">Icono</div>
          <div className="bg-dark-400 h-[150px] md:h-[300px]">info</div>
          <div className="bg-dark-500">Ver mas</div>
        </div>
      </div>
    </main>
  )
}

export default MainServices