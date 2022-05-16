import React from "react";
import PersonalPage from "../template/PersonalPage";

const BlogComp = (props) => {
  return (
    <div className="flex flex-col items-center justify-start my-32">
      <h2 className="text-3xl font-bold " >Blog</h2>
      <p className="text-xl py-5">Nothing here just yet</p>
      
    </div>
  );
};

const BlogPage = (props) => {
  return <PersonalPage children={<BlogComp />} />;
};

export default BlogPage;