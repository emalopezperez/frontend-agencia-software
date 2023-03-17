import Header from "@/components/header/Header"
import Main from "@/components/cases/Main"
import BlogCases from "@/components/blog/BlogCases"
import Conection from "@/components/conection/Conection"

const Cases = () => {
  return (
    <>
      <Header text={ 'Estudios de caso ' } descripcion={ "Creemos que los grandes productos no pueden surgir sin pasión, inteligencia y compromiso personal, y nuestro portafolio lo demuestra, que abarca diferentes clientes, industrias y audiencias objetivo. " } />

      <Main />
      <BlogCases />
      <Conection />
    </>
  )
}

export default Cases