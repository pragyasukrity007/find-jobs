import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const LatestJobs = () => {
  const data = useLoaderData();
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    setJobs(data.slice(5, 10));
  }, [data]);

  return (
    <div className="py-10">
      <div>
        <h1 className="text-2xl text-indigo-800/100">Latest Jobs</h1>
      </div>
      {/* grid jobs, 2 in a row for desktop devices */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mt-5">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="flex flex-col items-start p-2 bg-[#7E90FE0D] rounded-lg bg-white"
          >
            <h3 className="text-xs font-bold text-red-500">
              {job.jobTitleLatest}
            </h3>
            <h2 className="text-xs font-bold text-indigo-800/100">
              {job.companyNameLatest}
            </h2>

            <p className="text-xs inline">
              <span className="font-bold inline text-indigo-800">Exp:</span>
              <span className="inline">&nbsp; {job.experiencesLatest} </span>
            </p>

            <p className="text-xs inline">
              <span className="font-bold inline text-indigo-800">
                Location:
              </span>
              <span className="inline">&nbsp; {job.locationLatest} </span>
            </p>

            <p className="text-xs inline">
              <span className="font-bold inline text-indigo-800">Skills:</span>
              <span className="inline">&nbsp; {job.skillsLatest} </span>
            </p>

            <div className="m-auto">
              <Link
                className="font-bold text-xs bg-white m-auto float-right mt-2 text-sky-500"
                // to={`/job-details?id=${job.id}`}
                state={{ id: job.id }}
              >
                View Jobs
              </Link>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default LatestJobs;
