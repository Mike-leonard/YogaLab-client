import Header from '../components/shared/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/shared/Footer';
import FooterAboveMap from '../components/FooterAvobe';
import { useEffect, useState } from 'react';
import LoadingAnimation from '../components/LoadingAnimation';



const Main = () => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulating a delay of 2 seconds to showcase loading state
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer); // Clean up the timer on component unmount
    }, []);

    return (
        <div>
            <Header></Header>
            {isLoading ? (
                <div className="flex justify-center items-center h-screen">
                    <LoadingAnimation />
                </div>
            ) : (
                <Outlet />
            )}
            <FooterAboveMap />
            <Footer></Footer>
        </div>
    );
};

export default Main;