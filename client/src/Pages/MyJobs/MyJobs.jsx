import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import useAuthContext from '../../Hooks/useAuthContext';
import fetchMyJobs from '../../api/fetchMyJobs';
import { Link } from 'react-router-dom';
import { FaTrashAlt } from "react-icons/fa";
import fetchDeleteMyJob from '../../api/fetchDeleteMyJob';
import Swal from 'sweetalert2';
import fetchJobDetails from '../../api/fetchJobDetails';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ImCross } from 'react-icons/im';
import fetchUpdatePut from '../../api/fetchUpdatePut';

const MyJobs = () => {
    const queryClient = useQueryClient();
    const { user } = useAuthContext();
    const [selectedId, setSelectedId] = useState(null)
    const { register, handleSubmit, formState: { errors }, } = useForm();

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

    const updateMutation = useMutation({
        mutationFn: fetchUpdatePut,
        onSuccess: () => {
            queryClient.invalidateQueries(["update-job"])
            document.getElementById('updateModal').close()
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Update Successfully",
                showConfirmButton: false,
                timer: 1500
            });
        }
    })

    const { data: updatedData, refetch, } = useQuery({
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
    // if (loading) {
    //     return <div className='text-center mt-20'><span className='loading loading-bars loading-lg'></span></div>
    // }


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
        setSelectedId(id);
        document.getElementById('updateModal').showModal()
    }
    const onSubmit = data => {
        data.id = updatedData?._id
        updateMutation.mutate(data)

    }
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


            <dialog id="updateModal" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box dark:bg-gray-800 dark:text-white text-gray-500" >
                    <h3 className="font-bold text-2xl">Ready To Apply?</h3>
                    <p className="py-2 text-sm">Complete the eligibities checklist now and get started with your online application</p>
                    <form onSubmit={handleSubmit(onSubmit)} method={errors} className="">
                        <label htmlFor="">
                            <p className="text-xl font-semibold my-2">Name</p>
                            <input defaultValue={user?.displayName} disabled className="px-2 py-2 bg-white dark:bg-gray-500 dark:text-white text-black border rounded w-full" type="text" placeholder="Enter Your Name" {...register("displayName",)} />
                        </label>

                        <label htmlFor="">
                            <p className="text-xl font-semibold my-2">Email</p>
                            <input defaultValue={user?.email} disabled className="px-2 py-2 bg-white dark:bg-gray-500 dark:text-white text-black border rounded w-full" type="email" placeholder="Enter Your Email" {...register("email", {})} />
                        </label>

                        <label htmlFor="">
                            <p className="text-xl font-semibold my-2">Job Title</p>
                            <input defaultValue={updatedData?.jobTitle} className="px-2 py-2 bg-white dark:bg-gray-500 dark:text-white text-black border rounded w-full" type="text" placeholder="Enter Job Title" {...register("jobTitle", { required: true })} />
                            {
                                errors?.jobTitle?.type == "required" && (
                                    <p className="text-sm mt-1 text-red-500">Job Title is Required</p>
                                )
                            }
                        </label>

                        <label className="text-xl font-semibold">Job Category:</label>
                        <select {...register("category")} className="text-xl border-2 border-black px-2 py-1 rounded ml-3 my-3  bg-white dark:bg-gray-500 dark:text-white text-black">
                            <option disabled={true}>{updatedData?.category}</option>
                            <option value="On-Side">On-Site</option>
                            <option value="Remote">Remote</option>
                            <option value="Part-Time">Part-Time</option>
                            <option value="Hybrid">Hybrid</option>
                        </select>

                        <label htmlFor="">
                            <p className="text-xl font-semibold my-2">Salary Range</p>
                            <input defaultValue={updatedData?.salaryRange} className="px-2 py-2 bg-white dark:bg-gray-500 dark:text-white text-black border rounded w-full" type="text" placeholder="Enter Salary Range" {...register("salaryRange", { required: true })} />
                            {
                                errors?.salaryRange?.type == "required" && (
                                    <p className="text-sm mt-1 text-red-500">Salary Range is Required</p>
                                )
                            }
                        </label>

                        <label htmlFor="">
                            <p className="text-xl font-semibold my-2">Cover Image Url</p>
                            <input defaultValue={updatedData?.photoURL} className="px-2 py-2 bg-white dark:bg-gray-500 dark:text-white text-black border rounded w-full" type="text" placeholder="Enter Your PhotoURL" {...register("photoURL", { required: true })} />
                            {
                                errors?.photoURL?.type == "required" && (
                                    <p className="text-sm mt-1 text-red-500">PhotoURL is Required</p>
                                )
                            }
                        </label>

                        <label htmlFor="">
                            <p className="text-xl font-semibold my-2">Deadline</p>
                            <input defaultValue={updatedData?.deadline} className="px-2 py-2 bg-white dark:bg-gray-500 dark:text-white text-black border rounded w-full" type="date"  {...register("deadline", { required: true })} />
                            {
                                errors?.deadline?.type == "required" && (
                                    <p className="text-sm mt-1 text-red-500">Deadline is Required</p>
                                )
                            }
                        </label>

                        <label htmlFor="">
                            <p className="text-xl font-semibold my-2">Job Description</p>
                            <textarea defaultValue={updatedData?.description} value={updatedData?.description} className="px-2 py-2 text-justify bg-white dark:bg-gray-500 dark:text-white text-black border rounded w-full" type="text" placeholder="Write Job Description...." rows={4} {...register("description", { required: true })} />
                            {
                                errors?.description?.type == "required" && (
                                    <p className="text-sm mt-1 text-red-500">Description is Required</p>
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
            </dialog >
        </div >
    );
};

export default MyJobs;