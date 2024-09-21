import { useQuery } from "@tanstack/react-query";
import FeaturedJosDescription from "../../Components/FeaturedJobs/FeaturedJosDescription";
import getAllJobApi from "../../api/getAllJobApi";
import { useState } from "react";
import { Link } from "react-router-dom";


const AllJobs = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const { data, isLoading } = useQuery({
        queryKey: ["all-jobs"],
        queryFn: getAllJobApi
    })

    if (isLoading) {
        return <div className='text-center mt-20'><span className='loading loading-bars loading-lg'></span></div>
    }

    const filteredData = data.filter(job => {
        return job.jobTitle.toLowerCase().includes(searchTerm.toLowerCase())
    })
    return (

        <div className="my-7 p-5 space-y-10">
            <FeaturedJosDescription></FeaturedJosDescription>

            <div className="max-w-xl mx-auto">
                <label className="input input-bordered dark:text-black border-primary-c flex items-center gap-2">
                    <input onChange={e => setSearchTerm(e.target.value)} type="text" className="grow " placeholder="Search By Job Title" />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd" />
                    </svg>
                </label>
            </div>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="dark:text-white">
                            <th></th>
                            <th>Job Title</th>
                            <th>Job Posting Date</th>
                            <th>Salary Range</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            filteredData?.map((job, i) => <tr key={job._id} className="hover dark:hover:text-black">
                                <th>{i+1}</th>
                                <td>{job.jobTitle}</td>
                                <td>{job.postingDate.split("T")[0]}</td>
                                <td>{job.deadline}</td>
                                <td><Link to={`/job-details/${job._id}`}><button className="px-3 py2 text-primary-c border border-primary-c rounded">Details</button></Link></td>
                            </tr>



                            )
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllJobs;