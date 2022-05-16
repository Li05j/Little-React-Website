import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
  HomePage,
  AboutPage,
  BlogPage,
  GalleryPage,
  ContactPage,
  PageNotFound,
} from "./components";


/* Routing All page will be here */
const AllRoutes = (props) => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/about" element={<AboutPage />} />
        <Route exact path="/blog" element={<BlogPage/>} />
        <Route exact path="/gallery" element={<GalleryPage/>} />
        <Route exact path="/games" element={<PageNotFound/>} />
        <Route exact path="/contact" element={<ContactPage/>} />
      </Routes>
    </Router>
  );
};

export default AllRoutes;