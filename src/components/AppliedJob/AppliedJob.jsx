import { useContext } from "react";
import { AppliedJobContext } from "../AppliedJobs/AppliedJobs";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const AppliedJob = () => {
    const { job_id, company_logo, designation, company_name, type, location, salary_range } = useContext(AppliedJobContext);
    const navigate = useNavigate();
    const handleShowDetails = () => navigate(`/featured-jobs/${job_id}`);

    return (
        <div className="flex items-center mb-10">
            <div className="mr-20">
                <img src={company_logo} alt="" />
            </div>
            <div>
                <h3 className="text-dark2 text-2xl font-extrabold mb-1">{designation}</h3>
                <h4 className="text-dark3 font-semibold mb-2">{company_name}</h4>
                <div className="flex gap-3 mb-3 justify-center lg:justify-normal">
                    {
                        type.map((t, idx) => <div className="px-5 py-2 border border-primary2 text-primary2 font-extrabold rounded" key={idx}>{t}</div>)
                    }
                </div>
                <div className="flex max-[425px]:flex-col gap-x-10 gap-y-2 items-center text-dark3 font-semibold mb-4 justify-center lg:justify-normal">
                    <div className="flex items-center gap-1">
                        <CiLocationOn className="text-xl" />
                        <p>{location.city}, {location.country}</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <AiOutlineDollarCircle className="" />
                        <p>{salary_range}</p>
                    </div>
                </div>
            </div>
            <button onClick={handleShowDetails} className="ml-auto px-5 py-2 lg:text-sm xl:text-base bg-gradient-to-r from-primary1 to-primary2 text-white font-extrabold rounded-lg active:scale-95 transition-transform">View Details</button>
        </div>
    );
};

export default AppliedJob;