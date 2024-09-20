import Banner from "../../Components/Banner/Banner";
import ExploreCategory from "../../Components/ExploreCategory/ExploreCategory";
import JobFeaturesSection from "../../Components/FeaturedJobs/JobFeaturesSection";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <JobFeaturesSection></JobFeaturesSection>
            <ExploreCategory></ExploreCategory>
        </div>
    );
};

export default Home;