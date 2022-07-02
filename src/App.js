import React from "react";
import Data from "./data.json";
import Blog from "./components/blog";

function App() {
  let BlogData = Data.map((blogItem) => (
    <Blog
      BlogImage={blogItem.img}
      BlogTitle={blogItem.Title}
      BlogDescription={blogItem.Description}
    />
  ));
  return <div>{BlogData}</div>;
}

export default App;
