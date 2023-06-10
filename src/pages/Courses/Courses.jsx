import { useQuery } from "@tanstack/react-query";
import useTheme from "../../hooks/useTheme";
import axios from "axios";
import { FaChair } from "react-icons/fa";

const Courses = () => {

    const { theme } = useTheme()

    const { data: classes = [], isLoading } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:3000/classes?status=approved')
            return res.data
        }
    });


    console.log(classes)

    // TODO: follow this for other routes to loading
    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="w-5/6 mx-auto">
            <div className="mt-4 mb-6">
                <h1 className="text-3xl lg:text-4xl font-extrabold text-center">
                    Our Courses
                </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    classes.map((cls, index) => <div key={index} className={` cursor-pointer w-80 mx-auto mb-10 rounded-lg p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300  ${theme === 'light' ? 'bg-[#DC2C5C]' : 'bg-[#030508]'}`}>
                        <figure className="mb-2">
                            <img src={cls.imgURL ? cls.imgURL : "https://srv-cdn.onedio.com/store/988bccbdb9ca395f581f98faa9ce3a55123f12bfcef608c838532b813646e557.png"} alt="" className="h-64 ml-auto mr-auto" />
                        </figure>
                        <div className="rounded-lg p-4 bg-gray-700 flex flex-col">
                            <div className="flex justify-between items-center">
                                <div>
                                    <h5 className="text-white text-2xl font-bold leading-none">
                                        {cls.class_name}
                                    </h5>
                                    <span className="text-xs text-gray-400 leading-none"> {cls.instructor_name}</span>
                                </div>
                                <div className="flex items-center text-xl">
                                    <FaChair /> &nbsp; {cls?.available_seat - cls?.enroll_student}
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="text-lg text-white font-light">
                                    ${cls.price}.00
                                </div>
                                <button className="rounded-full bg-gray-900 text-white hover:bg-white hover:text-purple-900 hover:shadow-xl focus:outline-none w-10 h-10 flex ml-auto transition duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stroke-current m-auto">
                                        <line x1="12" y1="5" x2="12" y2="19"></line>
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Courses;