import Header from "@/components/header/Header"
import MainServices from "@/components/main_services/MainServices"
import BlogCases from "@/components/blog/BlogCases"
import Conection from "@/components/conection/Conection"

const Services = () => {
  return (
    <>
      <Header text={ 'Servicios de desarrollo de software ' } descripcion={ "Nos encanta cambiar los patrones de pensamiento establecidos y crear lo que nunca antes se había intentado." } />
      <div className="bg-[#f3f3f3]">
        <MainServices titulo={ 'Colección de prácticas y conocimientos' } />
        <MainServices titulo={ 'Servicios de diseño ' } />
      </div>

      <BlogCases />
      <Conection />
    </>
  )
}

export default Services