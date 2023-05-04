const CardsBlog = () => {
  return (
    <section className="bg-gray-300 w-[600px] h-[200px] rounded-md ">
      <div className="flex items-center gap-2 mx-auto">
        <div className="w-[400px] h-[200px] transition duration-300 ease-in-out transform cursor-pointer hover:none md:hover:scale-90 p-3">
          img
        </div>
        <article className="flex flex-col items-center gap-6 p-3">
          <h2>Java script</h2>
          <span>fecha</span>
          <p>info</p>
        </article>
      </div>
    </section>
  );
};

export default CardsBlog;
