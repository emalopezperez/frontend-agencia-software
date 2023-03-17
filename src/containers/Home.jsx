import Header from "@/components/header/Header"
import Main from "@/components/incentives/Incentives"
import Proyects from "@/components/proyects/Proyects"
import About from "@/components/about/About"
import BlogHome from "@/components/blog/BlogHome"
import Stats from "@/components/stats/Stats"
import Conection from "@/components/conection/Conection"

const Home = () => {
  return (
    <>
      <Header typewriter={true} text={"Para aquellos que"}/>
      <Main />
      <Proyects />
      <About />
      <BlogHome />
      <Stats/>
      <Conection/>
    </>
  )
}

export default Home