import Head from "next/head";
import Nav from "@/components/nav/Nav";
import Footer from "@/components/footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Agencia software</title>
        <meta property="Emanuel Lopez" content="My page title" key="Agencia Software" />
      </Head>
      <Nav />
      { children }
      <Footer />
    </>
  )
}

export default Layout;