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
      <div className="text-center pt-20">
        <h2 className="text-4xl mb-4 font-bold">Featured Jobs</h2>
        <p className="text-gray-400 mb-6">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6">
        {jobs.slice(0, dataLength).map((job) => (
          <Job job={job} key={job.id}></Job>
        ))}
      </div>
     <div className="flex justify-center">
     <div className={dataLength === jobs.length? "hidden" : " "}>
        <button
          onClick={() => setDataLength(jobs.length)}
          className="btn bg-gradient-to-r from-[#6573CB] to-[#7A5CCC] ... text-gray-100 mt-5"
        >
          Show All Jobs
        </button>
      </div>
     </div>
    </div>
  );
};

export default FeaturedJobs;
