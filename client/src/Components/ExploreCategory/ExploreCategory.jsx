import { FaAccessibleIcon, FaAndroid, FaBookReader, FaBriefcaseMedical, FaCalculator, FaPhone, FaTrain } from "react-icons/fa";
import { IoRestaurantSharp } from "react-icons/io5";

const ExploreCategory = () => {
    return (
        <div className="p-5">
            <div className="text-center space-y-5 mb-5">
                <h2 className="text-3xl font-bold">Explore Top Categories</h2>
                <p className="max-w-3xl mx-auto">Discover the most popular job categories tailored to your expertise and career goals.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                <div className="text-center bg-slate-100 rounded space-y-3 dark:bg-gray-800 p-10">
                    <FaCalculator className="text-primary-c mx-auto text-5xl" />
                    <h5 className="text-2xl font-bold">Accounting & Finance</h5>
                    <p>122 Active Jobs</p>
                </div>
                <div className="text-center bg-slate-100 rounded space-y-3 dark:bg-gray-800 p-10">
                    <FaAccessibleIcon  className="text-primary-c mx-auto text-5xl" />
                    <h5 className="text-2xl font-bold">Automotive Jobs</h5>
                    <p>78 Active Jobs</p>
                </div>
                <div className="text-center bg-slate-100 rounded space-y-3 dark:bg-gray-800 p-10">
                    <FaAndroid  className="text-primary-c mx-auto text-5xl" />
                    <h5 className="text-2xl font-bold">Business & Tech</h5>
                    <p>25 Active Jobs</p>
                </div>
                <div className="text-center bg-slate-100 rounded space-y-3 dark:bg-gray-800 p-10">
                    <FaBookReader  className="text-primary-c mx-auto text-5xl" />
                    <h5 className="text-2xl font-bold">Education Training</h5>
                    <p>212 Active Jobs</p>
                </div>
                <div className="text-center bg-slate-100 rounded space-y-3 dark:bg-gray-800 p-10">
                    <FaBriefcaseMedical  className="text-primary-c mx-auto text-5xl" />
                    <h5 className="text-2xl font-bold">Healthcare</h5>
                    <p>90 Active Jobs</p>
                </div>
                <div className="text-center bg-slate-100 rounded space-y-3 dark:bg-gray-800 p-10">
                    <IoRestaurantSharp  className="text-primary-c mx-auto text-5xl" />
                    <h5 className="text-2xl font-bold">Restaurant & Food</h5>
                    <p>65 Active Jobs</p>
                </div>
                <div className="text-center bg-slate-100 rounded space-y-3 dark:bg-gray-800 p-10">
                    <FaTrain  className="text-primary-c mx-auto text-5xl" />
                    <h5 className="text-2xl font-bold">Transportation</h5>
                    <p>160 Active Jobs</p>
                </div>
                <div className="text-center bg-slate-100 rounded space-y-3 dark:bg-gray-800 p-10">
                    <FaPhone className="text-primary-c mx-auto text-5xl" />
                    <h5 className="text-2xl font-bold">Tele- communications</h5>
                    <p>80 Active Jobs</p>
                </div>
            </div>
        </div>
    );
};

export default ExploreCategory;