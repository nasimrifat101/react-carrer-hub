import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);

  //   this is not the best practise
  const [dataLength, setDataLength] = useState(4);

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
      <div className="grid grid-cols-2 gap-6">
        {jobs.slice(0, dataLength).map((job) => (
          <Job job={job} key={job.id}></Job>
        ))}
      </div>
      <div className={dataLength === jobs.length? "hidden" : " "}>
        <button
          onClick={() => setDataLength(jobs.length)}
          className="btn btn-primary"
        >
          Show All Jobs
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
