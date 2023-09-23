import { useLoaderData, useParams } from "react-router-dom";
import { BiBriefcase } from "react-icons/bi";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { MdOutlineLocationOn } from "react-icons/md";
import { getDataFromLS, setDataToLS } from "../../utils/localStorage";
import { useState } from "react";

const JobDetails = () => {

    const allJobs = useLoaderData();
    const { id } = useParams();

    const job = allJobs.find(job => job.job_id === Number(id));

    const { job_id, job_description, job_responsibility, educational_requirements, required_experience, salary_range, designation, phone, email, full_address } = job;

    const [localData, setLocalData] = useState(getDataFromLS());
    

    const handleApply = () => {
        setDataToLS(job_id);
        setLocalData(getDataFromLS());
    }

    return (
        <div className="w-11/12 mx-auto mb-20">
            <h2 className="text-2xl md:text-3xl font-extrabold text-center mt-10 md:mt-20 mb-5 md:mb-10">Job Details</h2>
            <div className="flex flex-col md:flex-row gap-10">
                <div className="w-full md:w-1/2 lg:w-3/5 xl:w-2/3">
                    <p className="text-dark3 font-medium text-sm lg:text-base mb-6"><span className="text-dark1 font-extrabold text-sm lg:text-base mb-10">Job Description: </span>{job_description}</p>
                    <p className="text-dark3 font-medium text-sm lg:text-base mb-6"><span className="text-dark1 font-extrabold text-sm lg:text-base">Job Responsibility: </span>{job_responsibility}</p>
                    <div className="text-dark3 font-medium text-sm lg:text-base mb-6"><p className="text-dark1 font-extrabold text-sm lg:text-base pb-2">Educational Requirements: </p>{educational_requirements}</div>
                    <div className="text-dark3 font-medium text-sm lg:text-base"><p className="text-dark1 font-extrabold text-sm lg:text-base pb-2">Experience: </p>At least {required_experience} years in this field</div>
                </div>
                <div className="w-full md:w-1/2 lg:w-2/5 xl:w-1/3 md:px-7">
                    <h3 className="text-xl font-extrabold">Details</h3>
                    <hr className="border border-primary2 my-6" />
                    <div className="flex items-center gap-2 mb-2 text-sm lg:text-base">
                        <AiOutlineDollarCircle className="text-primary2 text-xl" />
                        <p className="text-dark3 font-medium"><span className="text-dark2 font-extrabold">Salary : </span>{salary_range} (Per Year)</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm lg:text-base">
                        <BiBriefcase className="text-primary2 text-xl" />
                        <p className="text-dark3 font-medium"><span className="text-dark2 font-extrabold">Job Title : </span>{designation}</p>
                    </div>
                    <h3 className="text-xl font-extrabold mt-8">Contact Information</h3>
                    <hr className="border border-primary2 my-6" />
                    <div className="flex items-center gap-2 text-sm lg:text-base">
                        <BsTelephone className="text-primary2 text-xl" />
                        <p className="text-dark3 font-medium"><span className="text-dark2 font-extrabold">Phone : </span>{phone}</p>
                    </div>
                    <div className="flex items-center gap-2 mt-2 text-sm lg:text-base">
                        <AiOutlineMail className="text-primary2 text-xl" />
                        <p className="text-dark3 font-medium"><span className="text-dark2 font-extrabold">Email : </span>{email}</p>
                    </div>
                    <div className="mt-2 text-sm lg:text-base">
                        <p><span className="text-dark2 font-extrabold items-center gap-2 w-1/2"><MdOutlineLocationOn className="text-primary2 text-xl inline -mt-1 mr-2" />Address : <span className="inline text-dark3 font-medium">{full_address}</span></span></p>
                    </div>
                    <button onClick={handleApply} className="w-full mt-10 px-5 py-3 lg:text-sm xl:text-base bg-gradient-to-r from-primary1 to-primary2 text-white font-extrabold rounded-lg active:scale-95 transition-transform">{localData.includes(job_id) ? 'Cancel Application' : 'Apply Now'}</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;