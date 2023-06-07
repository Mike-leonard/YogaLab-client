import Carousal from "./Carousal";
import MobileApplication from "./MobileApplication";
import PopularClasses from "./PopularClasses";
import PopularInstructor from "./PopularInstructor";
import PracticeYoga from "./PracticeYoga";

const Home = () => {

    return (
        <div>
            <Carousal />
            <PopularClasses />
            <div className="divider w-5/6 mx-auto"></div>
            <PracticeYoga />
            <div className="divider w-5/6 mx-auto"></div>
            <PopularInstructor />
            <div className="divider w-5/6 mx-auto"></div>
            <MobileApplication />
            <div className="divider w-5/6 mx-auto"></div>
        </div>
    );
};

export default Home;