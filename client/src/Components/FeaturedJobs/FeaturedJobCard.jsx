import PropTypes from 'prop-types';
import { FaUsers, FaUserTie } from "react-icons/fa";
import { CiTimer } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";

const FeaturedJobCard = ({ job }) => {
    const { jobTitle, salaryRange, displayName, category, photoURL, postingDate, deadline, jobApplicationNumber } = job;
    return (
        <div className="card card-compact  rounded border border-gray-200">
            <figure>
                <img
                    src={photoURL}
                    alt="Shoes" />
            </figure>
            <div className="card-body ">
                <div className='flex justify-between items-center'>
                    <h2 className="text-2xl font-bold">{jobTitle}</h2>
                    <button className='py-1 px-2 bg-green-100 text-primary-c rounded' disabled>{category}</button>
                </div>

                <div className='text-gray-500 dark:text-white space-y-1'>
                    <p className='flex items-center gap-1 text-sm'><IoTimeOutline /><span>Posting Date: {postingDate.split("T")[0]}</span></p>
                    <p className='flex items-center gap-1 text-sm'><CiTimer /><span>Deadline: {deadline}</span></p>
                    <p className='flex items-center gap-1 text-sm'><FaUsers /><span>Job Applicants Number: {jobApplicationNumber}</span></p>
                    <p className='flex items-center gap-1 text-sm'><FaUserTie /><span>Posted By: {displayName}</span></p>
                </div>
                <div className="flex items-center justify-between">
                    <h3 className='text-xl'><span className='font-bold'>{salaryRange}</span>{category == 'Part-Time' || <span>\Yrs.</span>}</h3>
                    <button className='px-3 py-2 bg-green-100 text-primary-c rounded border-primary-c border hover:bg-primary-c hover:text-white'>View Details</button>
                </div>
            </div>
        </div>
    );
};

FeaturedJobCard.propTypes = {
    job: PropTypes.object
};

export default FeaturedJobCard;