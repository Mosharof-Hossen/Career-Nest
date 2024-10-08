import { useState } from "react";
import loginImage from "../../assets/login/login.png"
import { useForm } from 'react-hook-form';
import { FaGithub, FaGoogle } from 'react-icons/fa6';
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuthContext from "../../Hooks/useAuthContext";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const Login = () => {
    const { signInUsingEmailPassword, loginByGoogle, loginByGithub } = useAuthContext();
    const [err, setErr] = useState("")
    const navigate = useNavigate();
    const location = useLocation()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        signInUsingEmailPassword(data.email, data.password)
            .then(() => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Successfully Login",
                    showConfirmButton: false,
                    timer: 1500
                })
                    .then(() => {
                        navigate(location?.state ? location?.state : "/")
                    })
            })
            .catch(() => {
                setErr("Invalid Email or Password")
            })
    };

    const handleGoogleLogin = () => {
        loginByGoogle()
            .then(() => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Successfully Login",
                    showConfirmButton: false,
                    timer: 1500
                })
                    .then(() => {
                        navigate(location?.state ? location?.state : "/")
                    })
            })
    }

    const handleGithubLogin = () => {
        loginByGithub()
            .then(() => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Successfully Login",
                    showConfirmButton: false,
                    timer: 1500
                })
                    .then(() => {
                        navigate(location?.state ? location?.state : "/")
                    })
            })
    }
    return (
        <div className="hero min-h-screen">
            <Helmet>
                <title>Career Nest || Login</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row lg:gap-20 items-center">
                <div className="text-center lg:text-left">
                    <img src={loginImage} alt="" />
                </div>
                <div className="  w-full max-w-sm shrink-0 ">
                    <div className="my-8 text-center space-y-3">
                        <h3 className="text-4xl font-semibold text-primary-c">Career Nest</h3>
                        <h4 className="text-xl">Welcome Back!</h4>
                    </div>
                    <div className="card p-5 border-2 border-green-200  dark:bg-gray-800">
                        <h3 className=" text-3xl text-center my-4">Sign In</h3>
                        <form onSubmit={handleSubmit(onSubmit)} className="">
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
                                <input className="px-2 py-2 bg-white dark:bg-gray-500 dark:text-white text-black border rounded w-full" type="Password" placeholder="Enter Your Password" {...register("password", { required: true })} />
                                {
                                    errors?.password?.type == "required" && (
                                        <p className="text-sm mt-1 text-red-500">Password is Required</p>
                                    )
                                }
                            </label>
                            <input className="w-full mt-8 px-3 py-2 text-2xl rounded cursor-pointer bg-primary-c text-white" type="submit" value={"Sign In"} />
                            <p className="text-red-500 text-center mt-4">{err && err}</p>

                        </form>
                        <div>
                            <p className="text-xl my-4 text-center font-bold">Do Not Have An Account?<Link to={'/signup'} className="text-red-500"> Sign Up</Link></p>
                            <div className="divider my-8 divider-success">Or</div>
                            <div className=" flex justify-center space-x-5">
                                <button onClick={handleGithubLogin} className="px-3 py-2 bg-primary-c text-white  flex items-center text-2xl rounded space-x-1"><FaGithub></FaGithub> <span>Github</span></button>
                                <button onClick={handleGoogleLogin} className="px-3 py-2 bg-primary-c text-white  flex items-center text-2xl rounded space-x-1"><FaGoogle></FaGoogle> <span>Google</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;