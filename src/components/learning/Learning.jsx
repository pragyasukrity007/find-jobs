import React from "react";

const Learning = () => {
  return (
    <div className="py-5">
      <div>
        <h1 className="text-2xl text-indigo-800/100">
          Grow your career through yorbit learning
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 ">
        <div className="flex flex-col p-5">
          <img
            alt=""
            src="https://whatfix.com/blog/wp-content/uploads/2021/09/change-management-checklist-26.png"
            style={{ width: "750px" }}
          />
        </div>

        <div className="flex flex-col">
          <div className="mb-3 items-center w-full h-auto rounded-lg p-5">
            <div className="bg-lime-400 rounded-tr-lg rounded-tl-lg">
              <div className="flex items-center justify-center text-white text-3xl">
                201
              </div>
              <h3 className="flex items-center justify-center text-s font-semibold p-2">
                Build Responsive Real-World Websites With HTML And CSS
              </h3>
            </div>
            <div className="bg-white border border-lime-400 p-2">
              <p className="text-[#A3A3A3] text-xs">
                How to use common components and layout patterns for
                professional website design and development Developer skills
                such as reading documentation, debugging, and using professional
                tools
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="mb-3 items-center w-full h-auto rounded-lg p-6">
            <div className="bg-sky-400 rounded-tr-lg rounded-tl-lg">
              <div className="flex items-center justify-center text-white text-3xl">
                201
              </div>
              <h3 className="flex items-center justify-center text-s font-semibold p-2">
                Microsoft Certified Azure Fundamentals - AZ-900
              </h3>
            </div>
            <div className="bg-white border border-sky-400 p-2">
            <p className="text-[#A3A3A3] text-xs">
              How to use common components and layout patterns for
                professional website design and development Developer skills
                such as reading documentation, debugging, and using professional
                tools
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="mb-3 items-center w-full h-auto rounded-lg p-6">
            <div className="bg-orange-400 rounded-tr-lg rounded-tl-lg">
              <div className="flex items-center justify-center text-white text-3xl">
                101
              </div>
              <h3 className="flex items-center justify-center text-s font-semibold p-2">
               React JS Basic
              </h3>
            </div>
            <div className="bg-white border border-orange-400 p-2">
            <p className="text-[#A3A3A3] text-xs">
              How to use common components and layout patterns for
                professional website design and development Developer skills
                such as reading documentation, debugging, and using professional
                tools
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learning;
