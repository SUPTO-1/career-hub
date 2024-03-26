import Banner from "../Banner/Banner";
import Catergoery from "./Categoery/Catergoery";
import FeaturedJobs from "./FeaturedJobs/FeaturedJobs";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Catergoery></Catergoery>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;