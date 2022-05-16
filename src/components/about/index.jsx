import React from "react";
import PersonalPage from "../template/PersonalPage";

const AboutComp = (props) => {
  return (
    <div className="flex flex-col items-center justify-start my-32">
      <h2 className="text-3xl font-bold " >About</h2>
      <p className="text-xl py-5">My name is Jason Li, currently in 3A Computer science in the University of Waterloo.</p>

      <h2 className="text-3xl font-bold justify-start mt-10" >Other</h2>
      
    </div>
  );
};

const AboutPage = (props) => {
  return <PersonalPage children={<AboutComp />} />;
};

export default AboutPage;