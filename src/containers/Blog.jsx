import CardsBlog from "@/components/blog/CardsBlog";

const Blog = () => {
  return (
    <div className="flex justify-center mt-20 mb-20 ">
      <selection className="flex flex-col gap-7 ">
        <CardsBlog />
        <CardsBlog />
        <CardsBlog />
      </selection>
    </div>
  );
};

export default Blog;
