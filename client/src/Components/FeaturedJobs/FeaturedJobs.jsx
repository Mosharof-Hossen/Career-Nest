import { useQuery } from '@tanstack/react-query';
import FeaturedJobCard from './FeaturedJobCard';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import getAllJobApi from '../../api/getAllJobApi';

const FeaturedJobs = () => {
    const [selectedJob, setSelectedJob] = useState("All")
    const location = useLocation()
    
    const { data, isLoading } = useQuery({
        queryKey: ['all-jobs-homePage'],
        queryFn: getAllJobApi,
    })
    if (isLoading) {
        return <div className='text-center mt-20'><span className='loading loading-bars loading-lg'></span></div>
    }

    const filteredData = data.filter((job) => {
        if (selectedJob == "All") return true;
        if (selectedJob == "Remote") return job.category === "Remote";
        if (selectedJob == "Part-Time") return job.category === "Part-Time";
        if (selectedJob == "Hybrid") return job.category === "Hybrid";
        if (selectedJob == "On-Site") return job.category === "On-Site";
    })

    return (
        <div className="p-5 space-y-10">
            <div role="tablist" className="tabs tabs-bordered max-w-3xl mx-auto">
                <input onClick={() => setSelectedJob("Remote")} type="radio" name="my_tabs_1" role="tab" className="tab dark:text-white" aria-label="Remote" />
                <input onClick={() => setSelectedJob("Part-Time")} type="radio" name="my_tabs_1" role="tab" className="tab dark:text-white" aria-label="Part-Time" />
                <input onClick={() => setSelectedJob("All")} type="radio" name="my_tabs_1" role="tab" className="tab dark:text-white " aria-label="All Jobs" defaultChecked />
                <input onClick={() => setSelectedJob("Hybrid")} type="radio" name="my_tabs_1" role="tab" className="tab dark:text-white" aria-label="Hybrid" />
                <input onClick={() => setSelectedJob("On-Site")} type="radio" name="my_tabs_1" role="tab" className="tab dark:text-white" aria-label="On Site" />
            </div>
            <div>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        filteredData?.map(job => <FeaturedJobCard job={job} key={job._id}></FeaturedJobCard>)
                    }
                </div>
            </div>

        </div>

    );
};

export default FeaturedJobs;