import Layout from "@/layout/Layout";
import Blog from "@/containers/Blog";
import Header from "@/components/header/Header";

export default function blog() {
  return (
    <Layout>
      <Header
        text={"Blog "}
        descripcion={
          "La informacion es la puerta al mundo..."
        }
      />
      <Blog />
    </Layout>
  );
}
