import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import useAuthContext from '../../Hooks/useAuthContext';
import fetchMyJobs from '../../api/fetchMyJobs';
import { Link } from 'react-router-dom';
import { FaTrashAlt } from "react-icons/fa";
import fetchDeleteMyJob from '../../api/fetchDeleteMyJob';
import Swal from 'sweetalert2';
import fetchJobDetails from '../../api/fetchJobDetails';
import { useEffect, useState } from 'react';

const MyJobs = () => {
    const queryClient = useQueryClient();
    const { user } = useAuthContext();
    const [selectedId, setSelectedId] = useState(null)


    const { data, isLoading } = useQuery({
        queryKey: ["userData", user?.email],
        queryFn: () => fetchMyJobs(user.email),
        enabled: !!user?.email,
    })
    const deleteMutation = useMutation({
        mutationFn: fetchDeleteMyJob,
        onSuccess: () => {
            queryClient.invalidateQueries(["my-job"]);
            queryClient.invalidateQueries(["userData"]);
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            });
        }
    })

    const { data: updatedData, isLoading: loading, refetch } = useQuery({
        queryKey: ['fetchedDataByID', selectedId],
        queryFn: () => fetchJobDetails(selectedId),
        // Disable automatic fetching
        enabled: !!selectedId,
    });

    useEffect(() => {
        if (selectedId !== null) {
            refetch();
        }
    }, [selectedId, refetch])

    if (isLoading) {
        return <div className='text-center mt-20'><span className='loading loading-bars loading-lg'></span></div>
    }
    if (loading) {
        return <div className='text-center mt-20'><span className='loading loading-bars loading-lg'></span></div>
    }


    const deleteHandle = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                deleteMutation.mutate({ id: id })
            }
        });
    }



    const handleUpdate = (id) => {
        console.log(id);
        setSelectedId(id);
    }
    console.log(updatedData);
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
                                    <button onClick={() => handleUpdate(job._id)} className="px-3 py2 text-primary-c border border-primary-c rounded">Update</button>
                                </td>
                            </tr>
                            )
                        }


                    </tbody>
                </table>
            </div>

            {/* <dialog id="my_modal_1" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box dark:bg-gray-800 dark:text-white text-gray-500" >
                    <h3 className="font-bold text-2xl">Ready To Apply?</h3>
                    <p className="py-2 text-sm">Complete the eligibities checklist now and get started with your online application</p>
                    <form onSubmit={handleSubmit(onSubmit)} method={errors} className="">
                        <label htmlFor="">
                            <p className="text-xl font-semibold my-2">Name</p>
                            <input defaultValue={displayName} disabled className="px-2 py-2 bg-white dark:bg-gray-500 dark:text-white text-black border rounded w-full" type="text" placeholder="Enter Your Name" {...register("name",)} />

                        </label>

                        <label htmlFor="">
                            <p className="text-xl font-semibold my-2">Email</p>
                            <input defaultValue={email} disabled className="px-2 py-2 bg-white dark:bg-gray-500 dark:text-white text-black border rounded w-full" type="email" placeholder="Enter Your Email" {...register("email",)} />
                        </label>

                        <label htmlFor="">
                            <p className="text-xl font-semibold my-2">Resume Link</p>
                            <input className="px-2 py-2 bg-white dark:bg-gray-500 dark:text-white text-black border rounded w-full" type="text" placeholder="Enter Your Resume DriveURL" {...register("resumeUrl", { required: true })} />
                            {
                                errors?.resumeUrl?.type == "required" && (
                                    <p className="text-sm mt-1 text-red-500">Resume is Required</p>
                                )
                            }
                        </label>

                        <input className=" w-full mt-8 px-3 py-2 text-2xl rounded cursor-pointer bg-primary-c text-white" type="submit" value={"Submit Application"} />
                    </form>
                    <div className="modal-action">

                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"><ImCross /></button>
                        </form>
                    </div>
                </div>
            </dialog> */}
        </div>
    );
};

export default MyJobs;