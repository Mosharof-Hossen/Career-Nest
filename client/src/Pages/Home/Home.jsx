import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Banner/Banner";
import ExploreCategory from "../../Components/ExploreCategory/ExploreCategory";
import JobFeaturesSection from "../../Components/FeaturedJobs/JobFeaturesSection";
import Review from "../../Components/Review/Review";
import Stat from "../../Components/Stat/Stat";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Career Nest || Home</title>
            </Helmet>
            <Banner></Banner>
            <Stat></Stat>
            <JobFeaturesSection></JobFeaturesSection>
            <ExploreCategory></ExploreCategory>
            <Review></Review>
        </div>
    );
};

export default Home;