import "bootstrap/dist/css/bootstrap.min.css";
import BlogCard from "../Blog-Card/BlogCard";
import { useContext } from "react";
import { Blogs } from "../../context/BlogsContext";

export default function Home() {
  const BLOGS = useContext(Blogs);

  return (
    <div className="h-100">
      <header className="text-center my-5">
        <h1>React Router Mini Blog Application</h1>
      </header>

      <section className="container">
        <div className="row">
          {BLOGS.map(({ id, title, image, content }) => (
            <div key={id} className="col-12 col-sm-6 col-md-4 mb-4">
              <BlogCard id={id} content={content} title={title} image={image} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
