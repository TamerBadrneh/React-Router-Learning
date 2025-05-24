import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router";

export default function BlogCard({ id, image, title, content }) {
  return (
    <div
      className="card m-5"
      style={{
        width: "18rem",
      }}
    >
      <img src={image} className="card-img-top" alt="blog image" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          {content.split(" ").length > 25
            ? content.split(" ").slice(0, 24).join(" ").concat("...")
            : content}
        </p>
        <Link to={`/blog/${id}`}>Read Blog</Link>
      </div>
    </div>
  );
}
