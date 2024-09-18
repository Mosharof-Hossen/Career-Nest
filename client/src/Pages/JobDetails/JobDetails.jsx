import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import fetchJobDetails from "../../api/fetchJobDetails";
import { IoTimeOutline } from "react-icons/io5";
import { CiTimer } from "react-icons/ci";
import { FaUsers, FaUserTie } from "react-icons/fa";
import { GiBullseye } from "react-icons/gi";


const JobDetails = () => {
    const { id } = useParams();

    const { data, isLoading } = useQuery({
        queryKey: ["job-details", id],
        queryFn: () => fetchJobDetails(id)

    })
    if (isLoading) {
        return <div className='text-center mt-20'><span className='loading loading-bars loading-lg'></span></div>
    }

    const { _id, description, jobTitle, salaryRange, displayName, category, photoURL, postingDate, deadline, jobApplicationNumber } = data;
    console.log(data);
    return (
        <div className="p-5">
            <div className="flex items-center flex-col md:flex-row gap-4 md:px-14 my-10">
                <div className="space-y-2 flex-1 text-center md:text-left ">
                    <button className="text-primary-c bg-green-200  px-2 py-1 rounded" disabled>{category}</button>
                    <h2 className="text-4xl font-bold">{jobTitle}</h2>
                    <p className='flex items-center gap-1 text-sm'><IoTimeOutline /><span>Posting Date: {postingDate.split("T")[0]}</span></p>
                    <p className='flex items-center gap-1 text-sm'><CiTimer /><span>Deadline: {deadline}</span></p>
                    <p className='flex items-center gap-1 text-sm'><FaUsers /><span>Job Applicants Number: {jobApplicationNumber}</span></p>
                    <p className='flex items-center gap-1 text-sm'><FaUserTie /><span>Posted By: {displayName}</span></p>
                    <h3 className='flex text-xl'><span className='font-bold'>{salaryRange}</span>{category == 'Part-Time' || <span>\Yrs.</span>}</h3>
                    <button onClick={() => document.getElementById('my_modal_2').showModal()} className=" text-xl text-white bg-primary-c px-4 py-3 rounded">Apply Job</button>
                    <dialog id="my_modal_2" className="modal">
                        <div className="modal-box dark:bg-gray-800">
                            <h3 className="font-bold text-lg">Hello!</h3>
                            <p className="py-4">Press ESC key or click outside to close</p>
                        </div>
                        <form method="dialog" className="modal-backdrop">
                            <button>close</button>
                        </form>
                    </dialog>
                </div>
                <div className="flex-1">
                    <img src={photoURL} className="md:rounded-l-full" alt="" />
                </div>
            </div>

            <div className="space-y-5">
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold">Job Description</h2>
                    <p className="text-sm text-justify text-gray-500 dark:text-white">{description}</p>
                </div>
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold"> Job Requirements:</h2>
                    <div className="space-y-1">
                        <p className="flex items-center gap-2 text-sm text-gray-500 dark:text-white"><GiBullseye /><span>A relevant degree or certification in the field of work.</span></p>
                        <p className="flex items-center gap-2 text-sm text-gray-500 dark:text-white"><GiBullseye /><span>Prior experience in the related field (years of experience may vary depending on the position).</span></p>
                        <p className="flex items-center gap-2 text-sm text-gray-500 dark:text-white"><GiBullseye /><span>Proficiency in tools, software, or equipment specific to the job.</span></p>
                        <p className="flex items-center gap-2 text-sm text-gray-500 dark:text-white"><GiBullseye /><span>Strong written and verbal communication skills.</span></p>
                        <p className="flex items-center gap-2 text-sm text-gray-500 dark:text-white"><GiBullseye /><span>Ability to identify challenges and provide effective solutions.</span></p>
                        <p className="flex items-center gap-2 text-sm text-gray-500 dark:text-white"><GiBullseye /><span>Experience working both independently and collaboratively in a team environment.</span></p>
                        <p className="flex items-center gap-2 text-sm text-gray-500 dark:text-white"><GiBullseye /><span>Ability to manage multiple tasks and meet deadlines effectively.</span></p>
                        <p className="flex items-center gap-2 text-sm text-gray-500 dark:text-white"><GiBullseye /><span>Willingness to learn new skills and adapt to changes in work processes.</span></p>
                        <p className="flex items-center gap-2 text-sm text-gray-500 dark:text-white"><GiBullseye /><span>A positive attitude toward customer service and satisfaction.</span></p>
                        <p className="flex items-center gap-2 text-sm text-gray-500 dark:text-white"><GiBullseye /><span>Strong attention to accuracy and detail in performing tasks.</span></p>
                    </div>
                </div>
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold"> Job Responsibilities:</h2>
                    <div className="space-y-1">
                        <p className="flex items-center gap-2 text-sm text-gray-500 dark:text-white"><GiBullseye /><span>Perform daily tasks related to your role efficiently and accurately.</span></p>
                        <p className="flex items-center gap-2 text-sm text-gray-500 dark:text-white"><GiBullseye /><span>Work closely with team members, departments, or clients to achieve goals.</span></p>
                        <p className="flex items-center gap-2 text-sm text-gray-500 dark:text-white"><GiBullseye /><span>Address challenges or issues as they arise and work towards resolving them.</span></p>
                        <p className="flex items-center gap-2 text-sm text-gray-500 dark:text-white"><GiBullseye /><span>Maintain accurate records and provide reports on key activities, as required.</span></p>
                        <p className="flex items-center gap-2 text-sm text-gray-500 dark:text-white"><GiBullseye /><span>Continuously seek opportunities to improve processes and increase efficiency.</span></p>
                        <p className="flex items-center gap-2 text-sm text-gray-500 dark:text-white"><GiBullseye /><span>Ensure all tasks and operations are conducted in compliance with company policies and industry standards.</span></p>
                        <p className="flex items-center gap-2 text-sm text-gray-500 dark:text-white"><GiBullseye /><span>Provide excellent service or support to clients or customers when required.</span></p>
                        <p className="flex items-center gap-2 text-sm text-gray-500 dark:text-white"><GiBullseye /><span>Participate in training programs and professional development activities to stay updated with industry trends.</span></p>
                        <p className="flex items-center gap-2 text-sm text-gray-500 dark:text-white"><GiBullseye /><span>Manage or support project planning, execution, and delivery according to set timelines (if applicable).</span></p>
                        <p className="flex items-center gap-2 text-sm text-gray-500 dark:text-white"><GiBullseye /><span>Follow safety protocols and ensure quality standards are met in all tasks.</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;