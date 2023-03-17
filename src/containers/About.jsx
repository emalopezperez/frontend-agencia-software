import Header from "@/components/header/Header"
import Incentives from "@/components/incentives/Incentives"

const About = () => {
  return (
    <>
      <Header text={ 'Sobre nosotros  ' } descripcion={ "Cada empresa tiene su historia de Cenicienta sobre esos tiempos oscuros cuando acaba de comenzar a salir al mercado. Nuestra historia comienza en 2013, en una pequeña oficina con algunas personas de ideas afines y tazas de café sin fondo . " } />

      <Incentives />
    </>
  )
}

export default About