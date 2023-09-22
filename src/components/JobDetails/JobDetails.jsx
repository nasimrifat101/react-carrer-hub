import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../Utility/localStorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find((job) => job.id === idInt);
    console.log(job);

const handleApplyJob = () =>{
    saveJobApplication(idInt);
    toast('You have applied successfully')
}

  return (
    <div>
      <h1>Job Details of: {id}</h1>
      <div className="grid gap-4 md:grid-cols-4">
        <div className="border md:col-span-3">
          <h2 className="text-5xl">Details here</h2>
        </div>
        <div className="border">
          <h3 className="text-4xl">sidebar</h3>
          <button onClick={handleApplyJob} className="btn btn-primary w-full">Apply now</button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default JobDetails;
