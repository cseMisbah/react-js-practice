import React, { useState } from "react";
import { blogsData } from "../components/Navbar/Data";
import { Link } from "react-router-dom";
const Blogs = () => {
  const [blogs, setBlogs] = useState(blogsData);
  //console.log(blogs);

  const truncateString = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div>
      <h1>Blogs page</h1>
      <section>
        {blogs.map((blog) => {
          const { id, title, body } = blog;
          return (
            <article key={id}>
              <h3>{title}</h3>
              <p>{truncateString(body, 5)}</p>
              {<Link to={title}>Learn more</Link>}
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default Blogs;
