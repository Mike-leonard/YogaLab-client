import { useQuery } from "@tanstack/react-query";
import useTheme from "../../hooks/useTheme";
import axios from "axios";
import { FaPeopleArrows } from "react-icons/fa";

import { motion } from "framer-motion";


const PopularClasses = () => {
    const { theme } = useTheme()
    const { data: classes = [], isLoading } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:3000/classes?status=approved&sort=top')
            return res.data
        }
    });

    return (
        <motion.div
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            exit={{ x: -1000 }}
            transition={{ duration: 0.9 }}
        >
            <div className="w-5/6 mx-auto mt-10 mb-10">
                <h3 className="text-4xl text-center mt-10 font-semibold">Popular Classes</h3>
                <p className="text-lg text-center mt-4 mb-10">Join Our Popular Classes</p>
                <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-y-10">

                    {
                        classes.map((singleClass, index) => <div className="sm:w-96 md:w-72 sm:mx-auto cursor-pointer flex flex-col justify-center items-center" key={index}>
                            <div className={`w-full transition-width duration-500 hover:scale-110 glass`}>
                                <div className={`border-4  ${theme === 'light' ? 'hover:border-[#DC2C5C]' : 'hover:border-[#030508]'}`}>

                                    <figure><img src={singleClass?.imgURL} alt="car!" /></figure>
                                    <div className="card-body ">
                                        <h2 className="card-title">{singleClass?.class_name}</h2>
                                        <p>{singleClass?.instructor_name}</p>
                                        <div className="card-actions justify-between items-center">
                                            <div className="flex items-center gap-2 text-2xl">
                                                <FaPeopleArrows />{singleClass?.enroll_student}

                                            </div>
                                            <button className="btn btn-primary">Learn now!</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>)
                    }
                </div>

            </div>
        </motion.div>
    );
};

export default PopularClasses;