import React from "react";
import PersonalPage from "../template/PersonalPage";

import shop1Img from "../../images/pic1.jpg";
import shop2Img from "../../images/pic2.jpg";

//import fs from "fs";


const GalleryComp = (props) => {
  return (
    <div className="flex flex-col items-center justify-start my-32">
      <h1 className="font-bold text-5xl -mt-20"> Nature and Trip</h1>
      <div className="flex flex-col items-center justify-start mt-10">
        <img src={shop1Img} width="480" height="360" alt="pic1"></img>
        <p className="text-xl py-2 font-bold">pic1</p>
        {/* <label className="-mt-10 font-bold text-xl">pic1</label> */}
      </div>

      <div className="flex flex-col items-center justify-start mt-10">
        <img src={shop2Img} width="480" height="360" alt="pic2"></img>
        <p className="text-xl py-2 font-bold">pic2</p>
        {/* <label className="-mt-10 font-bold text-xl" >pic2</label> */}
      </div>
    </div>
  );
};

const GalleryPage = (props) => {
  return <PersonalPage children={<GalleryComp />} />;
};

export default GalleryPage;