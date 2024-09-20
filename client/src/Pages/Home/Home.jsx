import Banner from "../../Components/Banner/Banner";
import ExploreCategory from "../../Components/ExploreCategory/ExploreCategory";
import JobFeaturesSection from "../../Components/FeaturedJobs/JobFeaturesSection";
import Stat from "../../Components/Stat/Stat";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Stat></Stat>
            <JobFeaturesSection></JobFeaturesSection>
            <ExploreCategory></ExploreCategory>
        </div>
    );
};

export default Home;