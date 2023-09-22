import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("jobs.json")
      .then((r) => r.json())
      .then((d) => setJobs(d));
  }, []);

  return (
    <div>
      <div className="text-center">
        <h2 className="text-4xl">Featured Jobs {jobs.length}</h2>
        <p className="">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div>
        {
            jobs.map(job =><Job job={job} key={job.id}></Job> )
        }
      </div>
    </div>
  );
};

export default FeaturedJobs;
