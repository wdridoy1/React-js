import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import blogData from "./data";
import BlogsData from "./data";
const BlogPage = () => {
  const { title } = useParams();
  const Location = useLocation();
  // const [bodyData, setBodyData] = useState("");
  // useEffect(() => {
  //   const filteredTitle = BlogsData.filter((book) => book.title === title);
  //   setBodyData(blogData[0].body);
  // }, []);
  return (
    <div>
      <h1>{title} Page</h1>
      <p>{Location.state.body.slice(0, 200)}</p>
      <p>{Location.state.body.slice(201, 500)}</p>
    </div>
  );
};
export default BlogPage;
