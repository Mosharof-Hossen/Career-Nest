import { useForm } from "react-hook-form";
import useAuthContext from "../../Hooks/useAuthContext";
import { useMutation, } from '@tanstack/react-query';
import addJobApi from "../../api/addJobApi";
import Swal from "sweetalert2";

const AddAJob = () => {
    const { user } = useAuthContext();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();


    const mutation = useMutation({
        mutationFn: addJobApi,
        onSuccess: () => {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Successfully Created",
                showConfirmButton: false,
                timer: 1000
            })
                .then(() => {
                    reset()
                })
        },
        onError: (err => {
            console.log(err);
        })
    })

    const onSubmit = data => {
        data.email = user.email;
        data.displayName = user.displayName;
        data.postingDate = new Date();
        data.jobApplicationNumber = 0
        console.log(data);
        mutation.mutate(data);
    }
    return (
        <div className="md:p-10 p-5 mt-10 space-y-7 ">
            <div className="text-center space-y-5">
                <h2 className="text-4xl font-bold">Add A New Job</h2>
                <p className="text-sm  text-center max-w-xl mx-auto">Easily create and publish your job listing by filling out key details like job title, category, salary, and description. Upload a banner and set application deadlines to attract the best candidates. Preview and submit in just a few clicks!</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="border p-5 rounded">
                <label htmlFor="">
                    <p className="text-xl font-semibold my-2">Name</p>
                    <input defaultValue={user?.displayName} disabled className="px-2 py-2 bg-white dark:bg-gray-500 dark:text-white text-black border rounded w-full" type="text" placeholder="Enter Your Name" {...register("displayName",)} />
                    {
                        errors?.name?.type == "required" && (
                            <p className="text-sm mt-1 text-red-500">Name is Required</p>
                        )
                    }
                </label>

                <label htmlFor="">
                    <p className="text-xl font-semibold my-2">Email</p>
                    <input defaultValue={user?.email} disabled className="px-2 py-2 bg-white dark:bg-gray-500 dark:text-white text-black border rounded w-full" type="email" placeholder="Enter Your Email" {...register("email", {})} />
                </label>

                <label htmlFor="">
                    <p className="text-xl font-semibold my-2">Job Title</p>
                    <input className="px-2 py-2 bg-white dark:bg-gray-500 dark:text-white text-black border rounded w-full" type="text" placeholder="Enter Job Title" {...register("jobTitle", { required: true })} />
                    {
                        errors?.jobTitle?.type == "required" && (
                            <p className="text-sm mt-1 text-red-500">Job Title is Required</p>
                        )
                    }
                </label>

                <label className="text-xl font-semibold">Job Category:</label>
                <select {...register("category")} className="text-xl border-2 border-black px-2 py-1 rounded ml-3 my-3  bg-white dark:bg-gray-500 dark:text-white text-black">
                    <option value="On-Side">On-Side</option>
                    <option value="Remote">Remote</option>
                    <option value="Part-Time">Part-Time</option>
                    <option value="Hybrid">Hybrid</option>
                </select>

                <label htmlFor="">
                    <p className="text-xl font-semibold my-2">Salary Range</p>
                    <input className="px-2 py-2 bg-white dark:bg-gray-500 dark:text-white text-black border rounded w-full" type="text" placeholder="Enter Salary Range" {...register("salaryRange", { required: true })} />
                    {
                        errors?.salaryRange?.type == "required" && (
                            <p className="text-sm mt-1 text-red-500">Salary Range is Required</p>
                        )
                    }
                </label>

                <label htmlFor="">
                    <p className="text-xl font-semibold my-2">Cover Image Url</p>
                    <input className="px-2 py-2 bg-white dark:bg-gray-500 dark:text-white text-black border rounded w-full" type="text" placeholder="Enter Your PhotoURL" {...register("photoURL", { required: true })} />
                    {
                        errors?.photoURL?.type == "required" && (
                            <p className="text-sm mt-1 text-red-500">PhotoURL is Required</p>
                        )
                    }
                </label>

                <label htmlFor="">
                    <p className="text-xl font-semibold my-2">Deadline</p>
                    <input className="px-2 py-2 bg-white dark:bg-gray-500 dark:text-white text-black border rounded w-full" type="date"  {...register("deadline", { required: true })} />
                    {
                        errors?.deadline?.type == "required" && (
                            <p className="text-sm mt-1 text-red-500">Deadline is Required</p>
                        )
                    }
                </label>

                <label htmlFor="">
                    <p className="text-xl font-semibold my-2">Job Description</p>
                    <textarea className="px-2 py-2 text-justify bg-white dark:bg-gray-500 dark:text-white text-black border rounded w-full" type="text" placeholder="Write Job Description...." rows={4} {...register("description", { required: true })} />
                    {
                        errors?.description?.type == "required" && (
                            <p className="text-sm mt-1 text-red-500">Description is Required</p>
                        )
                    }
                </label>


                <input className="w-full mt-8 px-3 py-2 text-2xl rounded cursor-pointer bg-primary-c text-white" type="submit" value={"Add A Job"} />
                {/* <p className="text-red-500 text-center mt-4">{err && err}</p> */}
            </form>
            <div>
            </div>
        </div>
    );
};

export default AddAJob;