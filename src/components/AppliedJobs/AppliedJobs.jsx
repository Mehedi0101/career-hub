import { useLoaderData } from "react-router-dom";
import { getDataFromLS } from "../../utils/localStorage";
import AppliedJob from "../AppliedJob/AppliedJob";
import { createContext, useState } from "react";

export const AppliedJobContext = createContext('');

const AppliedJobs = () => {

    const allJobs = useLoaderData();
    const appliedId = getDataFromLS();
    const appliedJobs = allJobs.filter( job => appliedId.includes(job.job_id));
    const [displayJobs, setDisplayJobs] = useState(appliedJobs);

    const handleDropdown = e => {
        const option = e.target.value;
        if(option === 'All'){
            setDisplayJobs(appliedJobs);
        } else if(option === 'Full Time'){
            setDisplayJobs(appliedJobs.filter(job => job.type.includes('Full Time')));
        } else if(option === 'Part Time'){
            setDisplayJobs(appliedJobs.filter(job => job.type.includes('Part Time')));
        } else if(option === 'Onsite'){
            setDisplayJobs(appliedJobs.filter(job => job.type.includes('Onsite')));
        } else if(option === 'Remote'){
            setDisplayJobs(appliedJobs.filter(job => job.type.includes('Remote')));
        }
    }


    return (
        <div className="w-11/12 mx-auto mb-20">
            <h2 className="text-2xl md:text-3xl font-extrabold text-center mt-10 md:mt-20 mb-5 md:mb-10">Applied Jobs</h2>

            <select defaultValue={`Filter By`} className="text-right block ml-auto outline-none border-none bg-transparent text-dark2 font-semibold">
                <option disabled className="hidden">Filter By</option>
                <option onClick={handleDropdown}>All</option>
                <option onClick={handleDropdown}>Full Time</option>
                <option onClick={handleDropdown}>Part Time</option>
                <option onClick={handleDropdown}>Onsite</option>
                <option onClick={handleDropdown}>Remote</option>
            </select>

            {
                appliedJobs.length === 0 && <div className="h-[40vh] text-xl md:text-2xl font-extrabold text-dark1 flex items-center justify-center"><p>You haven&apos;t applied for any jobs yet</p></div>
            }

            <div className="mt-10">
                {
                    displayJobs.map( appliedJob =><AppliedJobContext.Provider value={appliedJob} key={appliedJob.job_id}> <AppliedJob></AppliedJob> </AppliedJobContext.Provider>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;