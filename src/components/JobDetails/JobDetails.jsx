import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveJobApplication } from "../../Utility/localStorage";
import { AiOutlineDollar, AiOutlineCalendar, AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);
  console.log(job);

  const {
    job_title,
    salary,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    contact_information,
  } = job;

  const handleApplyJob = () => {
    saveJobApplication(idInt);
    toast("You have applied successfully");
  };

  return (
    <div>
       <div className="flex mb-12 justify-center items-center bg-[#e2e2f6] w-full h-[150px]">
        <div className="text-3xl text-black font-semibold">
          <h1>Job Details</h1>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="md:col-span-2 space-y-4 ">
          <h2 className="">
            <span className="font-bold">Job Description:</span>{" "}
            {job_description}
          </h2>
          <h2 className="">
            <span className="font-bold">Job Responsibility:</span>{" "}
            {job_responsibility}
          </h2>
          <h2 className="">
            <span className="font-bold">Educational Requirements:</span> <br />{" "}
            {educational_requirements}
          </h2>
          <h2 className="">
            <span className="font-bold">Experience:</span> <br /> {experiences}
          </h2>
        </div>
        <div>
          <div className="bg-[#F2F4FF] p-5">
            <div className="mb-4">
              <h3 className="text-xl font-bold">Job Details</h3>
              <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
              <div className="space-y-2">
              <p className="flex items-center">
                  <AiOutlineDollar className="text-2xl"></AiOutlineDollar>
                  <span className="text-sm font-semibold ml-1">Salary:</span> <span className="text-gray-400 ml-2 text-sm">{salary}</span>
                </p>

                <p className="flex items-center">
                  <AiOutlineCalendar className="text-2xl"></AiOutlineCalendar>
                  <span className="text-sm font-semibold ml-1">Job Title:</span> <span className="text-gray-400 ml-2 text-sm">{job_title}</span>
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold">Contact Information</h3>
              <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
              <div className="space-y-2">
                <p className="flex items-center">
                  <BsTelephone className="text-2xl"></BsTelephone>
                  <span className="text-sm font-semibold ml-1">Phone:</span> <span className="text-gray-400 ml-2 text-sm">{contact_information.phone}</span>
                </p>
                <p className="flex items-center">
                  <AiOutlineMail className="text-2xl"></AiOutlineMail>
                  <span className="text-sm font-semibold ml-1">Email:</span> <span className="text-gray-400 ml-2 text-sm">{contact_information.email}</span>
                </p>
                <p className="flex">
                  <CiLocationOn className="text-2xl"></CiLocationOn>
                  <span className="text-sm font-semibold ml-1">Address:</span> <span className="text-gray-400 ml-2 text-sm">{contact_information.address}</span>
                </p>

              
              </div>
            </div>
          </div>
        <div className="mt-4">
        <button onClick={handleApplyJob} className="btn bg-gradient-to-r from-[#6573CB] to-[#7A5CCC] ... text-gray-300 w-full">
            Apply now
          </button>
        </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default JobDetails;
