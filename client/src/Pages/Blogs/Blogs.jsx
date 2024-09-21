import { Link } from "react-router-dom";
import blog1 from "../../assets/blogs/blog1.png"

const Blogs = () => {

    return (
        <div className="mt-10 ">
            <div className="text-center space-y-5 mb-5">
                <h2 className="text-3xl font-bold">Career Insights and Tips</h2>
                <p className="max-w-3xl mx-auto">Stay updated with the latest career advice, industry trends, and job search tips through our curated blogs.</p>
            </div>


            <div className="flex justify-center gap-10  mt-10">
                <Link to={'/blog-one'} >
                    <div className="card rounded card-compact  dark:bg-gray-800 w-96 shadow-xl">
                        <figure>
                            <img
                                src={blog1}
                                alt="blog1" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-justify">what is access token and refresh token? how to they work and where should we store them  on the client side?</h2>

                        </div>
                    </div>
                </Link>

                <div className="flex justify-center mt-10">
                    <Link to={'/blog-two'} >
                        <div className="card rounded card-compact h-full dark:bg-gray-800 w-96 shadow-xl">
                            <figure>
                                <img
                                    src={blog1}
                                    alt="blog1" />
                            </figure>
                            <div className="card-body ">
                                <h2 className="card-title text-justify">what is express js?</h2>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>


        </div>
    );
};

export default Blogs;