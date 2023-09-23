import { createContext, useContext, useState } from "react";
import { JobContext } from "../Home/Home";
import Job from "../Job/Job";

export const IndividualJobContext = createContext('');

const Jobs = () => {

    const [jobsNumber, setJobsNumber] = useState(4);
    const jobs = useContext(JobContext);

    const displayJobs = jobs.slice(0, jobsNumber);

    const handleShowMore = () => {
        jobsNumber+4 >= jobs.length ? setJobsNumber(jobs.length) : setJobsNumber(jobsNumber+4);
    }
    return (
        <>
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-x-40 gap-y-20 mt-10">
                {
                    displayJobs.map(job => <IndividualJobContext.Provider value={job} key={job.job_id}><Job></Job></IndividualJobContext.Provider>)
                }
            </div>
            <button onClick={handleShowMore} className={`px-5 py-2 lg:text-sm xl:text-base bg-gradient-to-r from-primary1 to-primary2 text-white font-extrabold rounded-lg active:scale-95 transition-transform block mx-auto mt-10 ${jobsNumber === jobs.length && 'hidden'}`}>Show More</button>
        </>
    );
};

export default Jobs;