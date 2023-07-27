import React from "react";
import Hero from "../../components/hero/Hero";
import JobCategoryList from "../../components/jobCategoryList/JobCategoryList";
import JobRoles from "../../components/Jobroles/JobRoles";
import LatestJobs from "../../components/LatestJobs/LatestJobs";
import Learning from "../../components/learning/Learning";


const Home = () => {
  return (
    <div>
      <Hero />
      <JobCategoryList />
      <LatestJobs />
      <JobRoles />
      <Learning />
    </div>
  );
};

export default Home;
