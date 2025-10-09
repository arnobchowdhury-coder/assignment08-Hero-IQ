import React from "react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-4 my-16">
      <img src="/error-404.png" alt="" />
      <h1 className="text-5xl font-semibold">Oops, page not found!</h1>
      <p className="text-[15px] font-bold text-center text-[#627382] opacity-80">
        The page you are looking for is not available
      </p>
      <Link to="/">
        <div className="px-4 py-3 rounded-[4px] bg-[linear-gradient(125deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] text-white font-semibold flex justify-between items-center gap-2.5 w-fit">
          Go Back
        </div>
      </Link>
    </div>
  );
};

export default NotFound;
