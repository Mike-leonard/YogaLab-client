import { useEffect, useState } from "react";
import Carousal from "./Carousal";
import MobileApplication from "./MobileApplication";
import PopularClasses from "./PopularClasses";
import PopularInstructor from "./PopularInstructor";
import { AnimatePresence } from "framer-motion";

const Home = () => {
    const [isPopularClassesVisible, setPopularClassesVisible] = useState(false)
    const [isPopularInstructorVisible, setPopularInstructorVisible] = useState(false)
    const [isMobileApplicationVisible, setMobileApplicationVisible] = useState(false)
    useEffect(() => {
        setPopularClassesVisible(true);
        setPopularInstructorVisible(true);
        setMobileApplicationVisible(true);
    }, []);
    return (
        <div>
            <Carousal />
            <AnimatePresence>
                {isPopularClassesVisible && (
                    <PopularClasses key="popular-classes" />
                )}
            </AnimatePresence>
            <div className="divider w-5/6 mx-auto"></div>
            {/*  <PracticeYoga /> */}
            {/* <div className="divider w-5/6 mx-auto"></div> */}
            <AnimatePresence>
                {isPopularInstructorVisible && (
                    <PopularInstructor key="popular-instructor" />
                )}
            </AnimatePresence>
            <div className="divider w-5/6 mx-auto"></div>
            <AnimatePresence>
                {isMobileApplicationVisible && (
                    <MobileApplication key="mobile-application" />
                )}
            </AnimatePresence>
            <div className="divider w-5/6 mx-auto"></div>
        </div>
    );
};

export default Home;