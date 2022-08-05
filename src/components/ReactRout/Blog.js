// import React, { useState } from "react";
// import Navget from "./navget";
// import BlogData from "./data";
// import { Link } from "react-router-dom";
// const Home = () => {
//   const [blogs, setBlogs] = useState(BlogData);
//   const trunCateString = (str, num) => {
//     if (str.length > num) {
//       return str.slice(0, num) + "...";
//     } else {
//       return str;
//     }
//   };
//   return (
//     <div>
//       <h1>Blog Page</h1>
//       <section>
//         {BlogData.map((blog) => {
//           const { id, title, body } = blog;
//           return (
//             <article key={id}>
//               <h3>{title}</h3>
//               <p>{trunCateString(body, 100)}</p>
//               <Link to={title}>Loren More</Link>
//             </article>
//           );
//         })}
//       </section>
//       <Navget text="Go Home Page" navget="/" />
//     </div>
//   );
// };

// export default Home;

import React, { useState } from "react";
import Navget from "./navget";
import BlogData from "./data";
import { Link } from "react-router-dom";
const Home = () => {
  const [blogs, setBlogs] = useState(BlogData);
  const trunCateString = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };
  return (
    <div>
      <h1>Blog Page</h1>
      <section>
        {BlogData.map((blog) => {
          const { id, title, body } = blog;
          return (
            <article key={id}>
              <h3>{title}</h3>
              <p>{trunCateString(body, 100)}</p>
              <Link to={title} state={{ id, title, body }}>
                Loren More
              </Link>
            </article>
          );
        })}
      </section>
      <Navget text="Go Home Page" navget="/" />
    </div>
  );
};

export default Home;
