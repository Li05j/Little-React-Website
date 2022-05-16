import React from "react";
import PersonalPage from "../template/PersonalPage";

const HomePageComp = (props) => {
  return (
    <div className="flex flex-col items-center justify-center my-32">
      <h1 className="text-8xl font-bold " >Jason Li</h1>

      <p className="text-xl pt-12 pb-2"> email: &ensp; jason0510@gmail.com</p>
      <p className="text-xl p-2">github: &ensp; https://github.com/Li05j</p>
    </div>
  );
};

const HomePage = (props) => {
  return <PersonalPage children={<HomePageComp />} />;
};

export default HomePage;