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
import Profile from "../Pages/Profile/Profile";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
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
                element: <AppliedJobs></AppliedJobs>
            },
            {
                path: "/my-jobs",
                element: <MyJobs></MyJobs>
            },
            {
                path: "/add-job",
                element: <AddAJob></AddAJob>
            },
            {
                path: "/blogs",
                element: <Blogs></Blogs>
            },
            {
                path: "/profile",
                element: <Profile></Profile>
            }
        ]
    }
])

export default router;