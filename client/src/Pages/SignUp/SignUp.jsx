import { useForm } from "react-hook-form";
import signupImage from "../../assets/login/login.png"
import { FaGithub, FaGoogle } from 'react-icons/fa6';
import { Link } from "react-router-dom";
import { useState } from "react";
import useAuthContext from "../../Hooks/useAuthContext";

const SignUp = () => {
    const { signUpUsingEmailPassword } = useAuthContext();
    const [err, setErr] = useState("")
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        signUpUsingEmailPassword(data.email, data.password)
            .then(res => {
                console.log(res);
            })
            .catch(() => {
                setErr("Email Already in use.")
            })
    };
    console.log(errors);

    return (
        <div className="hero min-h-screen">
            <div className="flex flex-col lg:flex-row lg:gap-20 items-center">
                <div className="text-center lg:text-left flex-1">
                    <img src={signupImage} alt="" className="w-fit" />
                </div>
                <div className="w-full max-w-sm shrink-0 flex-1">
                    <div className="my-8 text-center space-y-3">
                        <h3 className="text-4xl font-semibold text-primary-c">Career Nest</h3>
                        <h4 className="text-xl">Welcome Back!</h4>
                    </div>
                    <div className=" w-full border-2 rounded border-green-200  dark:bg-gray-800">
                        <h3 className=" text-3xl text-center my-4">Sign Up</h3>
                        <form onSubmit={handleSubmit(onSubmit)} className="p-5">
                            <label htmlFor="">
                                <p className="text-xl font-semibold my-2">Name</p>
                                <input className="px-2 py-2 bg-white dark:bg-gray-500 dark:text-white text-black border rounded w-full" type="text" placeholder="Enter Your Name" {...register("name", { required: true })} />
                                {
                                    errors?.name?.type == "required" && (
                                        <p className="text-sm mt-1 text-red-500">Name is Required</p>
                                    )
                                }
                            </label>

                            <label htmlFor="">
                                <p className="text-xl font-semibold my-2">PhotoURL</p>
                                <input className="px-2 py-2 bg-white dark:bg-gray-500 dark:text-white text-black border rounded w-full" type="text" placeholder="Enter Your PhotoURL" {...register("photoURL", { required: true })} />
                                {
                                    errors?.photoURL?.type == "required" && (
                                        <p className="text-sm mt-1 text-red-500">PhotoURL is Required</p>
                                    )
                                }
                            </label>
                            <label htmlFor="">
                                <p className="text-xl font-semibold my-2">Email</p>
                                <input className="px-2 py-2 bg-white dark:bg-gray-500 dark:text-white text-black border rounded w-full" type="email" placeholder="Enter Your Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                                {
                                    errors?.email?.type == "required" && (
                                        <p className="text-sm mt-1 text-red-500">Email is Required</p>
                                    )
                                }
                            </label>
                            <label htmlFor="">
                                <p className="text-xl font-semibold my-2">Password</p>
                                <input className="px-2 py-2 bg-white dark:bg-gray-500 dark:text-white text-black border rounded w-full" type="Password" placeholder="Enter Your Password" {...register("password", { required: true ,pattern:/^[A-Za-z\d]{6,}$/ })} />
                                {
                                    errors?.password?.type == "required" && (
                                        <p className="text-sm mt-1 text-red-500">Password is Required</p>
                                    )
                                }
                                {
                                    errors?.password?.type == "pattern" && (
                                        <p className="text-sm mt-1 text-red-500">Password must be at least 6 character</p>
                                    )
                                }
                            </label>
                            <input className="w-full mt-8 px-3 py-2 text-2xl rounded cursor-pointer bg-primary-c text-white" type="submit" value={"Sign Up"} />
                            <p className="text-red-500 text-center mt-4">{err && err}</p>
                            <p className="text-xl my-8 text-center font-bold">Have An Account?<Link to={'/login'} className="text-red-500"> Sign In</Link></p>
                            <div className="divider my-8 divider-success">Or</div>
                            <div className=" flex justify-center space-x-5">
                                <button className="px-3 py-2 bg-primary-c text-white  flex items-center text-2xl rounded space-x-1"><FaGoogle></FaGoogle> <span>Google</span></button>
                                <button className="px-3 py-2 bg-primary-c text-white  flex items-center text-2xl rounded space-x-1"><FaGithub></FaGithub> <span>Github</span></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;