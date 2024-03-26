import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/localStorage";
const JobDetails = () => {
    const jobs = useLoaderData();
    const  {id} = useParams();
    const intId = parseInt(id);
    const job = jobs.find(job => job.id == intId); 
    const handleApplyJob = () => {
        saveJobApplication(intId);
        toast("Successfully Applied");
    }
    return (
        <div>
            <div className="grid  gap-4 grid-cols-4">
                <div className="border col-span-3">
                    <h2 className="text-4xl">Details Coming</h2>
                    <h2>Job Details of: {job.job_title}</h2>
                    <p>{job.company_name}</p>
                    <p>{job.job_description}</p>
                </div>
                <div className="border">
                    <h2 className="text-4xl">Details Coming</h2>
                    <button onClick={handleApplyJob} className="btn btn-primary w-full">Apply Now</button>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default JobDetails;