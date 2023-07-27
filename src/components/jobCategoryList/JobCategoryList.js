import React from "react";
import FeaturedJobs from "../featuredJobs/FeaturedJobs";
import LatestJobs from "../LatestJobs/LatestJobs";

const JobCategoryList = () => {

  return (
    <div className="py-10">
      <div
        id="main"
        className="grid grid-flow-row px-20
      sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6
      "
      >
        <div className="bg-white border border-[#D9D9D9] rounded-lg m-4 h-12">
          <p className="text-center font-semibold mt-2 text-indigo-800/100">User Interface</p>
        </div>
        <div className="bg-white border border-[#D9D9D9] rounded-lg m-4 h-12">
          <p className="text-center font-semibold  mt-2 text-indigo-800/100">Node JS</p>
        </div>
        <div className="bg-white border border-[#D9D9D9] rounded-lg m-4 h-12">
          <p className="text-center font-semibold  mt-2 text-indigo-800/100">
            Web Development
          </p>
        </div>
        <div className="bg-white border border-[#D9D9D9] rounded-lg m-4 h-12">
          <p className="text-center font-semibold  mt-2 text-indigo-800/100">Microservices</p>
        </div>
        <div className="bg-white border border-[#D9D9D9] rounded-lg m-4 h-12">
          <p className="text-center font-semibold  mt-2 text-indigo-800/100">React</p>
        </div>
        <div className="bg-white border border-[#D9D9D9] rounded-lg m-4 h-12">
          <p className="text-center font-semibold  mt-2 text-indigo-800/100">DevOps</p>
        </div>
        <div className="bg-white border border-[#D9D9D9] rounded-lg m-4 h-12">
          <p className="text-center font-semibold  mt-2 text-indigo-800/100">Angular</p>
        </div>
        <div className="bg-white border border-[#D9D9D9] rounded-lg m-4 h-12">
          <p className="text-center font-semibold  mt-2 text-indigo-800/100">
            Cloud Computing
          </p>
        </div>
        <div className="bg-white border border-[#D9D9D9] rounded-lg m-4 h-12">
          <p className="text-center font-semibold  mt-2 text-indigo-800/100">Mean</p>
        </div>
        <div className="bg-white border border-[#D9D9D9] rounded-lg m-4 h-12">
          <p className="text-center font-semibold  mt-2 text-indigo-800/100">Docker</p>
        </div>
        <div className="bg-white border border-[#D9D9D9] rounded-lg m-4 h-12">
          <p className="text-center font-semibold  mt-2 text-indigo-800/100">MERN</p>
        </div>
        <div className="bg-white border border-[#D9D9D9] rounded-lg m-4 h-12">
          <p className="text-center font-semibold  mt-2 text-indigo-800/100">Web Designer</p>
        </div>
      </div>

      <FeaturedJobs />
     
      
    </div>
  );
};

export default JobCategoryList;
