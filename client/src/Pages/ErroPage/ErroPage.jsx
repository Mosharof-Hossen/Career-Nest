import { Link } from "react-router-dom";
import error from "../../assets/error/404.gif"

const ErroPage = () => {
    return (
        <div className="text-center my-10">
            <Link to={"/"}><button className="px-4 py-2 text-xl rounded bg-green-200 text-primary-c border border-primary-c">Home</button></Link>
            <img src={error} alt="" className="w-3xl mx-auto"  />
        </div>
    );
};

export default ErroPage;