import banner from "../../assets/Images/banner.jpg"

const Banner = () => {
    return (
        <div
            className="hero h-[550px] bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url(${banner})`,
            }}>
            <div className="hero-overlay "></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-2xl space-y-6">
                    <button className="bg-primary-c text-white px-3 py-1 rounded-2xl text-sm" disabled>Get Your Hot Jobs</button>
                    <h1 className=" text-5xl font-bold"><span className="text-primary-c">Find</span> Your Dream Job or Hire Top Talent Today!</h1>
                    <p className="">Join thousands of professionals and companies using <span className="text-primary-c font-bold">Career Nest</span> to connect and grow.</p>
                    <div className="join w-3/4">
                        <input className="input input-bordered join-item w-full rounded" placeholder="Email" />
                        <button className="btn join-item rounded-r- bg-primary-c border-none text-white">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;