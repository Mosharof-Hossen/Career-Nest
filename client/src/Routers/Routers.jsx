import {
    createBrowserRouter,

} from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import AllJobs from "../Pages/AllJobs/AllJobs";
import AppliedJobs from "../Pages/AppliedJobs/AppliedJobs";
import MyJobs from "../Pages/MyJobs/MyJobs";
import AddAJob from "../Pages/AddAJob/AddAJob";
import Blogs from "../Pages/Blogs/Blogs";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRouter from "./PrivateRouter";
import JobDetails from "../Pages/JobDetails/JobDetails";
import ErroPage from "../Pages/ErroPage/ErroPage";
import BlogOne from "../Pages/Blogs/BlogOne";
import BlogTwo from "../Pages/Blogs/BlogTwo";
import BlogThree from "../Pages/Blogs/BlogThree";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement: <ErroPage></ErroPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/all-jobs",
                element: <AllJobs></AllJobs>
            },
            {
                path: "/applied-jobs",
                element: <PrivateRouter><AppliedJobs></AppliedJobs></PrivateRouter>
            },
            {
                path: "/my-jobs",
                element: <PrivateRouter><MyJobs></MyJobs></PrivateRouter>
            },
            {
                path: "/add-job",
                element: <PrivateRouter><AddAJob></AddAJob></PrivateRouter>
            },
            {
                path: "/blogs",
                element: <Blogs></Blogs>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: "/job-details/:id",
                element: <PrivateRouter><JobDetails></JobDetails></PrivateRouter>
            },
            {
                path: "/blog-one",
                element: <BlogOne></BlogOne>
            },
            {
                path: "/blog-two",
                element: <BlogTwo></BlogTwo>
            },
            {
                path: "/blog-three",
                element: <BlogThree></BlogThree>
            }

        ]
    }
])

export default router;