import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localStorage";

const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs , setAppliedJobs] = useState([]);
    useEffect( () =>{
        const storedJobIds = getStoredJobApplication();
        if(jobs.length>0)
        {

            const jobsApplied = [];
            for(const id of storedJobIds)
            {
                const exist = jobs.find(job => job.id === id);
                if(exist)
                {
                    jobsApplied.push(exist);
                }
            }
            // const jobsApplied = jobs.filter(job =>storedJobIds.includes(job.id));
            setAppliedJobs(jobsApplied);
        }
    },[])
    return (
        <div>
            <h2>This Is Applied Jobs : {appliedJobs.length}</h2>
        </div>
    );
};

export default AppliedJobs;