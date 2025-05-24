import { useContext } from "react";
import { Blogs } from "../../context/BlogsContext";
import { Link, useParams } from "react-router";
import ErrorPage from "../404-Error-Page/ErrorPage";

export default function Blog() {
  const { blogId } = useParams("blogId");
  const blog = useContext(Blogs).find((b) => Number(b.id) === Number(blogId));

  return (
    <>
      {blog ? (
        <div className="m-5 px-5">
          <div className="d-flex gap-4 my-4">
            <img
              src={blog.image}
              alt="blog image"
              style={{
                height: "15vh",
                width: "15vh",
                borderRadius: "12px",
              }}
            />
            <div>
              <h1>{blog.title}</h1>
              <p>
                By: {blog.author} <br />
                <Link to="/home">
                  <span className="link-primary text-decoration-underline">
                    Back To Home Page
                  </span>
                </Link>
              </p>
            </div>
          </div>

          <div className="my-4">
            <h2>Content</h2>
            <hr />
            <p>{blog.content}</p>
            <hr />
          </div>

          <section className="my-4">
            <h2>Comments</h2>
            {blog.comments.map((comment, index) => {
              return (
                <div key={index}>
                  {index + 1}. {comment.content}
                </div>
              );
            })}
          </section>
        </div>
      ) : (
        <ErrorPage message={`No Blog Found with Id of ${blogId}`} />
      )}
    </>
  );
}
