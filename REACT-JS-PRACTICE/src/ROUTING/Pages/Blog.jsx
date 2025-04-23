/*
import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
//import { blogsData } from "../../Data";
const Blog = () => {
  const location = useLocation();
  // console.log(location);

  const { title } = useParams();

  return (
    <div>
      <h1>{title} page</h1>
      <p>{location.state.body.slice(0, 100)}</p>
    </div>
  );
};

export default Blog;
*/

import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { blogsData } from "../../Data";
const Blog = () => {
  //const location = useLocation();
  //console.log(location);
  const { title } = useParams();
  const [bodyData, setBodyData] = useState("");

  useEffect(() => {
    const blogData = blogsData.filter((blog) => blog.title == title);
    setBodyData(blogData[0].body);
  }, []);

  return (
    <div>
      <h1>{title} page</h1>
      <p>{bodyData.slice(0, 100)}</p>
    </div>
  );
};

export default Blog;
