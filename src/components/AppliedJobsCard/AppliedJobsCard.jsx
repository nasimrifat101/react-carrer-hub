/* eslint-disable react/prop-types */
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const AppliedJobsCard = ({ job }) => {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    
    <div>
      <div className="card card-compact bg-base-100 border-2 border-sky-50">
        <div className="flex">
          {/* img */}
          <div className="flex justify-center items-center bg-[#F4F4F4] m-5">
            <img className="max-h-20 max-w-20 p-5" src={logo} />
          </div>
          {/* card */}
          <div className="card-body space-x-4">
            <h2 className="card-title text-2xl ml-4 my-3">{job_title}</h2>
            <p className="text-lg text-left text-gray-500">{company_name}</p>
            <div className="flex justify-start">
              <button className="btn btn-outline mr-4 text-violet-400">
                {remote_or_onsite}
              </button>
              <button className="btn btn-outline text-violet-400">
                {job_type}
              </button>
            </div>
            <div className="mt-2 flex space-x-3 my-2 text-gray-500">
              <h1 className="flex items-center">
                <CiLocationOn className="text-2xl"></CiLocationOn> {location}
              </h1>
              <h1 className="flex items-center">
                <AiOutlineDollarCircle className="text-2xl"></AiOutlineDollarCircle>
                {salary}
              </h1>
            </div>
          </div>
          {/* btn */}
          <div className="card-actions items-center p-10">
            <Link to={`/job/${job.id}`}>
              <button className="btn bg-gradient-to-r from-[#6573CB] to-[#7A5CCC] ... text-gray-200">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppliedJobsCard;
