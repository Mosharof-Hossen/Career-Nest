import { useQuery } from '@tanstack/react-query';
import getAppJobsApi from '../../api/getAllJobApi';
import FeaturedJobCard from './FeaturedJobCard';

const FeaturedJobs = () => {

    const { data, isLoading } = useQuery({
        queryKey: ['all-jobs'],
        queryFn: getAppJobsApi,
    })

    console.log(data);

    return (
        <div className="my-14 ">
            <div className="text-center space-y-5 mb-5">
                <h2 className="text-3xl font-bold">Featured Jobs</h2>
                <p className="max-w-3xl mx-auto">Explore our top job listings that are trending now. Find your next career move with these handpicked opportunities tailored to your skills and interests.</p>
            </div>

            <div className="p-5 space-y-10">
                <div role="tablist" className="tabs tabs-bordered max-w-3xl mx-auto">
                    <input type="radio" name="my_tabs_1" role="tab" className="tab dark:text-white" aria-label="Remote" />
                    <input type="radio" name="my_tabs_1" role="tab" className="tab dark:text-white" aria-label="Part-Time" />

                    <input
                        type="radio"
                        name="my_tabs_1"
                        role="tab"
                        className="tab dark:text-white "
                        aria-label="All Jobs"
                        defaultChecked />


                    <input type="radio" name="my_tabs_1" role="tab" className="tab dark:text-white" aria-label="Hybrid" />

                    <input type="radio" name="my_tabs_1" role="tab" className="tab dark:text-white" aria-label="On Site" />
                </div>
                <div>
                    {
                        isLoading && <div className='text-center mt-20'><span className='loading loading-bars loading-lg'></span></div>
                    }
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                        {
                            data?.map(job => <FeaturedJobCard job={job} key={job._id}></FeaturedJobCard>)
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FeaturedJobs;