
const Stat = () => {
    return (
        <div className="mt-14 text-center p-5">
            <div className=" grid grid-cols-2 md:grid-cols-4 gap-2  dark:bg-gray-800 ">
                <div className="border rounded place-items-center space-y-2 p-12 text-center">
                    <div className="text-5xl font-bold text-primary-c">20K</div>
                    <div className=" dark:text-white">Happy Employer</div>
                </div>

                <div className="border rounded place-items-center space-y-2  p-12 text-center">
                    <div className="text-5xl font-bold text-primary-c">11K</div>
                    <div className=" dark:text-white">Opening Position</div>
                </div>

                <div className="border rounded place-items-center space-y-2  p-12 text-center">
                    <div className="text-5xl font-bold text-primary-c" >1K</div>
                    <div className=" dark:text-white"> Daily Active User</div>
                </div>
                <div className="border rounded place-items-center space-y-2  p-12 text-center">
                    <div className="text-5xl font-bold text-primary-c" >5K</div>
                    <div className=" dark:text-white"> Job Categories</div>
                </div>
            </div>
        </div>
    );
};

export default Stat;