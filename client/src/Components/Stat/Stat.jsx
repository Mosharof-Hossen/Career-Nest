
const Stat = () => {
    return (
        <div className="mt-14 text-center">
            <div className="stats shadow dark:bg-gray-800 ">
                <div className="stat place-items-center space-y-2 p-12 text-center">
                    <div className="stat-value text-primary-c">20K</div>
                    <div className="stat-desc dark:text-white">Happy Employer</div>
                </div>

                <div className="stat place-items-center space-y-2  p-12 text-center">
                    <div className="stat-value text-primary-c">11K</div>
                    <div className="stat-desc dark:text-white">Opening Position</div>
                </div>

                <div className="stat place-items-center space-y-2  p-12 text-center">
                    <div className="stat-value text-primary-c" >1K</div>
                    <div className="stat-desc dark:text-white"> Daily Active User</div>
                </div>
                <div className="stat place-items-center space-y-2  p-12 text-center">
                    <div className="stat-value text-primary-c" >5K</div>
                    <div className="stat-desc dark:text-white"> Job Categories</div>
                </div>
            </div>
        </div>
    );
};

export default Stat;