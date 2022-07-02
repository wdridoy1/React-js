import React from "react";
import Blog from "./blog.css";
//============================== Blog area ==============================
function blog(props) {
  const { BlogImage, BlogTitle, BlogDescription } = props;
  return (
    <div className="blog">
      <img src={BlogImage} alt="" />
      <h3>{BlogTitle}</h3>
      <p>{BlogDescription}</p>
      <button className="BTN">Read More</button>
    </div>
  );
}
export default blog;
