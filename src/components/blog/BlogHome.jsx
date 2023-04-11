
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const products = [
  {
    id: 1,
    name: "JavaScript",
    image: "https://via.placeholder.com/400",
    description: "Descripción del producto 1"
  },
  {
    id: 2,
    name: "Python",
    image: "https://via.placeholder.com/400",
    description: "Descripción del producto 2"
  },
  {
    id: 3,
    name: "Producto 3",
    image: "https://via.placeholder.com/400",
    description: "Descripción del producto 3"
  },
  {
    id: 4,
    name: "Producto 4",
    image: "https://via.placeholder.com/400",
    description: "Descripción del producto 4"
  },
  {
    id: 5,
    name: "Producto 5",
    image: "https://via.placeholder.com/400",
    description: "Descripción del producto 5"
  }
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }
  ]
};

const BlogHome = () => {
  return (
    <div className="flex flex-col justify-center h-screen mx-auto mt-20 no-scrollbar">
    <h2 className="flex justify-center mx-24 mb-10 text-2xl font-bold md:text-4xl font_titulos">Nuestro blog </h2>
      <Slider className="pb-5 md:pb-10 max-w-[300px] md:max-w-[1210px] mx-auto" { ...settings }>
        { products.map(product => (
          <div key={ product.id } className='flex flex-col '>
            <div className="transition duration-300 ease-in-out transform cursor-pointer hover:none md:hover:scale-90 w-[400px]">
              <img src={ product.image } alt={ product.name } />
              <h3 className="pt-2 pb-2">{ product.name }</h3>
              <p className="">{ product.description }</p>
            </div>
          </div>
        )) }
      </Slider>
    </div>
  );
};

export default BlogHome