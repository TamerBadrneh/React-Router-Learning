import { Route, Routes } from "react-router";
import Home from "./components/Home/Home";
import Blog from "./components/Blog/Blog";
import { Blogs } from "./context/BlogsContext";
import ErrorPage from "./components/404-Error-Page/ErrorPage";
import { useEffect, useState } from "react";

export default function App() {
  const [BLOGS, setBlogs] = useState([]);

  useEffect(() => {
    fetch("./data/blogs.json")
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Blogs.Provider value={BLOGS}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/blog/:blogId" element={<Blog />} />
          <Route path="*" element={<ErrorPage message="Page Not Found !" />} />
        </Routes>
      </Blogs.Provider>
    </>
  );
}
