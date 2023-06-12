import { useQuery } from "@tanstack/react-query";
import useTheme from "../../hooks/useTheme";
import axios from "axios";
import { motion } from "framer-motion";
const PopularInstructor = () => {
    const { theme } = useTheme()

    const { data: instructors = [], isLoading } = useQuery({
        queryKey: ['role'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:3000/users/instructor?limit=6')
            return res.data
        }
    });
    console.log(instructors)

    return (
        <motion.div
            initial={{ y: 1000 }}
            animate={{ y: 0 }}
            exit={{ y: 1000 }}
            transition={{ duration: 0.8 }}
        >
            <div className="w-5/6 mx-auto mt-10 mb-10">
                <h3 className="text-4xl text-center mt-10 font-semibold">Popular Instructors</h3>
                <p className="text-lg text-center mt-4 mb-10">Our Popular Instructors Are Here</p>
                <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-y-10">

                    {
                        instructors.map((singleClass, index) => <div className=" flex flex-col justify-center items-center " key={index}>
                            <div className="avatar cursor-pointer">
                                <div className={` image-container w-[200px]  overflow-hidden rounded-full ring ring-offset-base-100 ring-offset-2  ${theme === 'light' ? 'ring-[#DC2C5C]' : 'ring-[#030508]'}`}>
                                    <img src={singleClass.photoURL} className="object-center w-full transition-width duration-500 hover:scale-125 " />
                                </div>
                            </div>
                            <div className="">
                                <h2 className=" text-2xl text-center my-3">{singleClass.name}</h2>
                                <p className="text-center capitalize">{singleClass?.role}</p>
                            </div>
                        </div>
                        )
                    }
                </div>

            </div>
        </motion.div>
    );
};

export default PopularInstructor;