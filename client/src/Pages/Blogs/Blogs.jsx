import { Link } from "react-router-dom";
import blog1 from "../../assets/blogs/blog1.png"
import blog3 from "../../assets/blogs/blog3.png"
import blog2 from "../../assets/blogs/blog2.jpg"

const Blogs = () => {

    return (
        <div className="mt-10 ">
            <div className="text-center space-y-5 mb-5">
                <h2 className="text-3xl font-bold">Career Insights and Tips</h2>
                <p className="max-w-3xl mx-auto">Stay updated with the latest career advice, industry trends, and job search tips through our curated blogs.</p>
            </div>


            <div className="flex justify-center flex-wrap gap-10  mt-10">
                <Link to={'/blog-one'} >
                    <div className="card rounded card-compact  dark:bg-gray-800 w-80 shadow-xl">
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


                <Link to={'/blog-two'} >
                    <div className="card rounded card-compact h-full dark:bg-gray-800 w-80 shadow-xl">
                        <figure>
                            <img
                                src={blog2}
                                alt="blog1" />
                        </figure>
                        <div className="card-body ">
                            <h2 className="card-title text-justify">what is express js?</h2>
                        </div>
                    </div>
                </Link>

                <Link to={'/blog-three'} >
                    <div className="card rounded card-compact h-full dark:bg-gray-800 w-80 shadow-xl">
                        <figure>
                            <img
                                src={blog3}
                                alt="blog1" />
                        </figure>
                        <div className="card-body ">
                            <h2 className="card-title text-justify">what is Nest js?</h2>
                        </div>
                    </div>
                </Link>

            </div>


        </div>
    );
};

export default Blogs;