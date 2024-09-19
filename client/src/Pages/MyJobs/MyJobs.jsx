import { useQuery } from '@tanstack/react-query';
import useAuthContext from '../../Hooks/useAuthContext';
import fetchMyJobs from '../../api/fetchMyJobs';
import { Link } from 'react-router-dom';
import { FaTrashAlt } from "react-icons/fa";

const MyJobs = () => {
    const { user } = useAuthContext();
    const { data, isLoading } = useQuery({
        queryKey: ["userData", user?.email],
        queryFn: () => fetchMyJobs(user.email),
        enabled: !!user?.email
    })
    if (isLoading) {
        return <div className='text-center mt-20'><span className='loading loading-bars loading-lg'></span></div>
    }
    const deleteHandle = (id) => {
        console.log(id);
    }
    console.log(data);
    return (
        <div className='p-5 mt-5'>
            <div className="text-center space-y-5 mb-5">
                <h2 className="text-3xl font-bold">My Posted Jobs</h2>
                <p className="max-w-3xl mx-auto">Manage and review the jobs you have created. Track application progress, update job details, and keep your listings up to date for prospective candidates.</p>
            </div>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="dark:text-white">
                            <th>Delete</th>
                            <th>Job Title</th>
                            <th>Job Posting Date</th>
                            <th>Salary Range</th>
                            <th>View</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            data?.map((job) => <tr key={job._id} className="hover dark:hover:text-black">
                                <th>
                                    <label>
                                        <button onClick={() => deleteHandle(job._id)}><FaTrashAlt className='text-2xl' /></button>
                                    </label>
                                </th>
                                <td>{job.jobTitle}</td>
                                <td>{job.postingDate.split("T")[0]}</td>
                                <td>{job.deadline}</td>
                                <td><Link to={`/job-details/${job._id}`}><button className="px-3 py2 text-primary-c border border-primary-c rounded">Details</button></Link></td>
                                <td>
                                    <Link to={`/update/${job._id}`}><button className="px-3 py2 text-primary-c border border-primary-c rounded">Update</button></Link>
                                </td>
                            </tr>



                            )
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyJobs;