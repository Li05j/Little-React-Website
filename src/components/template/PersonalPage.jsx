import React, { Fragment } from "react";

// import Header from "../navbar/Header";
import Navbar from "../navbar/Navbar"
import Footer from "../footer/Footer";

const PersonalPage = ({ children }) => {
  <style>

  </style>
  return (
    <Fragment >
      <Navbar/>
      <div className="min-h-screen">
        {children}
      </div>
      <Footer className="absolute bottom-0"/>
    </Fragment>
  );
};

export default PersonalPage;