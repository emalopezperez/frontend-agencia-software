const BlogCases = () => {
  return (
    <div className="w-full mt-20 bg-[#f3f3f3] mb-20">
      <div className="grid grid-cols-2 grid-rows-1 gap-6 max-w-[1100px] mx-auto p-8">
        <div className="col-span-2 ">
          <h2 className="text-3xl font-bold font_titulos">Colección de prácticas y conocimientos </h2>
        </div>
        <div className="bg-white h-[250px] md:h-[450px] grid grid-row-2 gap-2 p-4">
          <div className="bg-dark-400 h-[200px] md:h-[400px]">1</div>
          <div className="bg-dark-500">titulos</div>
        </div>

        <div className="bg-white h-[250px] md:h-[450px] grid grid-row-2 gap-2 p-4">
          <div className="bg-dark-400 h-[200px] md:h-[400px]">1</div>
          <div className="bg-dark-500">titulos</div>
        </div>
      </div>
    </div>
  );
};


export default BlogCases