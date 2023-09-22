/* eslint-disable react/prop-types */
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
    job_description,
  } = job;

  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img src={logo} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{job_title}</h2>
          <p>{company_name}</p>
          <div className="">
            <button className="btn btn-outline mr-4 text-violet-400">
              {remote_or_onsite}
            </button>
            <button className="btn btn-outline text-violet-400">
              {job_type}
            </button>
          </div>
          <div className="mt-2 flex space-x-3">
            <h1 className="flex items-center">
              <CiLocationOn className="text-2xl"></CiLocationOn> {location}
            </h1>
            <h1 className="flex items-center">
              <AiOutlineDollarCircle className="text-2xl"></AiOutlineDollarCircle>
              {salary}
            </h1>
          </div>
          <p>{job_description}</p>
          <div className="card-actions">
           <Link to ={`/job/${job.id}`} > 
           <button className="btn btn-primary">View Details</button>
           </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
