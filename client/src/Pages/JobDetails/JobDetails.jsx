import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import fetchJobDetails from "../../api/fetchJobDetails";


const JobDetails = () => {
    const { id } = useParams();

    const { data, isLoading } = useQuery({
        queryKey: ["job-details", id],
        queryFn: () => fetchJobDetails(id)

    })
    console.log(data);
    return (
        <div>
            Job Details
        </div>
    );
};

export default JobDetails;