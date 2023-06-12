import { FaGooglePlay, FaAppStore } from 'react-icons/fa';
import { motion } from "framer-motion";
const MobileApplication = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
        <div className="w-5/6 mx-auto">
            <div className="flex flex-col md:flex-row justify-center items-center md:items-start ">
                <div>
                    <img src="https://doyoga.ancorathemes.com/wp-content/uploads/2017/03/phone.png" alt="" />
                </div>
                <div className="w-4/6 mx-auto">
                    <h3 className="text-3xl text-center font-semibold my-3">Get Mobile Application & Do <br /> Yoga Online</h3>
                    <p className="text-sm italic text-center my-2">YogaLab Application</p>
                    <p className="w-5/6 mx-auto">A great app for beginners, app gives users short sessions that they can fit in anywhere, anytime. Each pose includes an animated illustration plus instructions to make sure you’re training safely. They are perfect for when you feel crunched for time respectively.</p>
                    <div className="flex flex-col md:flex-row gap-5 md:gap-14 my-12  justify-center">
                        <button className="btn btn-primary rounded-full">
                            <div className='text-4xl'>
                                <FaAppStore />
                            </div>
                            <div>
                                <span className="italic text-xs ml-5"> download on the</span> <br />
                                <span className="text-lg ml-5">

                                    App Store
                                </span>

                            </div>
                        </button>
                        <button className="btn btn-primary rounded-full">
                            <div className='text-4xl'>
                                <FaGooglePlay />
                            </div>
                            <div>
                                <span className="italic text-xs ml-5"> download on the</span> <br />
                                <span className="text-lg ml-5">

                                    Google Play
                                </span>

                            </div>
                        </button>

                    </div>
                </div>
            </div>
        </div>
        </motion.div>

    );
};

export default MobileApplication;