import { PDFViewer, } from '@react-pdf/renderer';
import AppliedJobsDetails from './AppliedJobsDetails';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import useAuthContext from '../../Hooks/useAuthContext';
import fetchGetAppliedJob from '../../api/FetchGetAppliedJob';
import { Link } from 'react-router-dom';

const AppliedJobs = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [generateSummary, setGenerateSummary] = useState(true);
    const { user } = useAuthContext()

    const { data, isLoading } = useQuery({
        queryKey: ["appliedJob"],
        queryFn: () => fetchGetAppliedJob(user?.email),
        enabled: !!user.email
    })
    if (isLoading) {
        return <div className='text-center mt-20'><span className='loading loading-bars loading-lg'></span></div>
    }
    const filteredData = data.filter(application => {
        return application.jobTitle.toLowerCase().includes(searchTerm.toLowerCase())
    })
    return (
        <div className='p-5'>
            <div className='space-y-10'>
                <div className="text-center space-y-5 mb-5">
                    <h2 className="text-3xl font-bold">Applied Job Listings</h2>
                    <p className="max-w-3xl mx-auto">View and manage the jobs you have applied for. Keep track of your application status and access detailed information about each job.</p>
                </div>

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
                                <th>Application Date</th>
                                <th>Category</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                filteredData?.map((job, i) => <tr key={job._id} className="hover dark:hover:text-black">
                                    <th>{i + 1}</th>
                                    <td>{job.jobTitle}</td>
                                    <td>{job.applicationDate.split("T")[0]}</td>
                                    <td>{job.category}</td>
                                    <td><Link to={`/job-details/${job.jobId}`}><button className="px-3 py2 text-primary-c border border-primary-c rounded">Details</button></Link></td>
                                </tr>



                                )
                            }


                        </tbody>
                    </table>
                </div>

            </div>

            {
                generateSummary ||
                <div className='mt-10'>
                    <PDFViewer style={{ width: '100%', height: '500px' }}>
                        <AppliedJobsDetails summery={data}></AppliedJobsDetails>
                    </PDFViewer>
                </div>
            }



            {
                generateSummary && <div className='text-center'><button onClick={() => setGenerateSummary(!generateSummary)} className='px-4 py-3 bg-green-200 text-primary-c rounded my-5 border border-primary-c '>Generate PDF Summary</button></div>
            }

            {/* {
                generateSummary ||
                <PDFDownloadLink document={<AppliedJobsDetails />} fileName="example.pdf">
                    {({ loading, }) =>
                        loading ? 'Loading document...' : <div className='text-center'><button className='px-4 py-3 bg-green-200 text-primary-c rounded my-5 border border-primary-c '>Download PDF</button></div>
                    }
                </PDFDownloadLink>
            } */}
        </div>
    )
};


export default AppliedJobs;