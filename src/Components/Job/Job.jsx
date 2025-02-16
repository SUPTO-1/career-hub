import { TiLocationOutline } from "react-icons/ti";
import { LuCircleDollarSign } from "react-icons/lu";
import { Link } from "react-router-dom";
const Job = ({job}) => {
    const {logo , job_title , company_name , remote_or_onsite , location , job_type , salary , id} = job;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
  <figure><img src={logo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{job_title}</h2>
    <p>{company_name}</p>
    <div>
        <button className="px-5 py-2 font-extrabold border-[1px] rounded border-[#7E90FE] mr-4 text-[#7E90FE]">{remote_or_onsite}</button>
        <button className="px-5 py-2 font-extrabold border-[1px] rounded border-[#7E90FE] text-[#7E90FE]">{job_type}</button>
    </div>
    <div className="mt-4 flex mr-4">
        <h2 className="flex mr-2"><TiLocationOutline className="text-[#7E90FE] text-2xl" />{location}</h2>
        <h2 className="flex mr-2"><LuCircleDollarSign className="text-[#7E90FE] text-2xl" />{salary}</h2>
    </div>
    <div className="card-actions">
      <Link to={`/job/${id}`}>
      <button className="btn btn-primary">View Details</button>
      </Link>
    </div>
  </div>
</div>
    );
};

export default Job;