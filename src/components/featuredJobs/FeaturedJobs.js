import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { HiLocationMarker } from "react-icons/hi";
import { BiDollarCircle } from "react-icons/bi";

const FeaturedJobs = () => {
  const data = useLoaderData();
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    // show first 4 jobs
    setJobs(data.slice(0, 5));
  }, [data]);

  return (
    <div className="py-10">
      {/* grid jobs, 2 in a row for desktop devices */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mt-10 ">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="flex flex-col items-start p-6 bg-[#7E90FE0D] rounded-lg bg-slate-100 border-slate-400"
          >
            <img
              src={job.imageUrl}
              className="company-logo h-[50px] mb-3 m-auto"
              alt={job.jobTitle}
            />
            <div class=" m-auto relative w-12 h-12 bg-purple-200 rounded-full flex justify-center items-center text-center p-5 shadow-xl">
              {job.jobOpenings}
            </div>
            <h3 className="text-base font-medium mb-2 mt-2">{job.jobTitle}</h3>
            <Link
              className="btn gradient-btn  m-auto"
              to={`/job-details?id=${job.id}`}
              state={{ id: job.id }}
            >
              View Jobs
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedJobs;
