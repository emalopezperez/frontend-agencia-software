import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const products = [
  {
    id: 1,
    name: "Producto 1",
    image: "https://via.placeholder.com/300",
    description: "Descripción del producto 1"
  },
  {
    id: 2,
    name: "Producto 2",
    image: "https://via.placeholder.com/300",
    description: "Descripción del producto 2"
  },
  {
    id: 3,
    name: "Producto 3",
    image: "https://via.placeholder.com/300",
    description: "Descripción del producto 3"
  },
  {
    id: 4,
    name: "Producto 4",
    image: "https://via.placeholder.com/300",
    description: "Descripción del producto 4"
  },
  {
    id: 5,
    name: "Producto 5",
    image: "https://via.placeholder.com/300",
    description: "Descripción del producto 5"
  }
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
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

const ProductsSlider = () => {
  return (
    <div className="flex flex-col justify-center mx-auto mt-20 no-scrollbar">
    <h2 className="mx-24 mb-10 text-4xl font-bold font_titulos">Algunos de nuestros casos </h2>
      <Slider className="pb-5 md:pb-10 max-w-[300px] md:max-w-[1220px] mx-auto" { ...settings }>
        { products.map(product => (
          <div key={ product.id } className='flex flex-col gap-2'>
            <div className="transition duration-300 ease-in-out transform cursor-pointer hover:scale-90">
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

export default ProductsSlider