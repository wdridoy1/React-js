import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./navbar";
import Home from "./Home";
import About from "./About";
import User from "./user";
import Blog from "./Blog";
import BlogPage from "./blogPage";
import Contact from "./Contact";
import Error from "./Error";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Blog/:title" element={<BlogPage />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
