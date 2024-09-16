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
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRouter from "./PrivateRouter";


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
                element: <PrivateRouter><AppliedJobs></AppliedJobs></PrivateRouter>
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
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    }
])

export default router;