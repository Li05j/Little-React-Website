import React from "react";
import PersonalPage from "../template/PersonalPage";

const PageNotFoundComponent = (props) => {
  return (
    <div className="flex flex-col items-center justify-center my-32">
      <span className="text-center text-gray-700 text-4xl font-bold tracking-widest">
        404 not found
      </span>
    </div>
  );
};

const PageNotFound = (props) => {
  return <PersonalPage children={<PageNotFoundComponent />} />;
};

export default PageNotFound;
