const getStoredJobApplication = () =>
{
    const storeJobApplication = localStorage.getItem('job-applications');
    if(storeJobApplication)
    {
        return JSON.parse(storeJobApplication);
    }
    else
    {
        return [];
    }
}
const saveJobApplication = id =>
{
    const storeJobApplication = getStoredJobApplication();
    const exist = storeJobApplication.find(job => job.id === id);
    if(!exist)
    {
        storeJobApplication.push({id});
        localStorage.setItem('job-applications',JSON.stringify(storeJobApplication));
    }
}
export {getStoredJobApplication , saveJobApplication}