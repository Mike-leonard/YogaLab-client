import { useQuery } from "@tanstack/react-query";
import useTheme from "../../hooks/useTheme";
import axios from "axios";
import { FaChair } from "react-icons/fa";
import useRule from "../../hooks/useRule";
import ClassesButton from "../../components/ClassesButton";
import DisabledClassesButton from "../../components/DisabledClassesButton";

const Courses = () => {

    const { theme } = useTheme()
    const [isRule, isRouteLoading] = useRule()

    const { data: classes = [], isLoading } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:3000/classes?status=approved')
            return res.data
        }
    });


    console.log(classes)
    console.log(isRule)

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
                    classes.map((cls, index) => <div key={index} className={` cursor-pointer w-80 mx-auto mb-10 rounded-lg p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300  ${theme === 'light' ? 'bg-[#DC2C5C]' : 'bg-[#030508]'} ${cls?.available_seat - cls?.enroll_student === 0 ? 'bg-red-800': ''}`}>
                        <figure className="mb-2">
                            <img src={cls.imgURL ? cls.imgURL : "https://srv-cdn.onedio.com/store/988bccbdb9ca395f581f98faa9ce3a55123f12bfcef608c838532b813646e557.png"} alt="" className="h-64 ml-auto mr-auto" />
                        </figure>
                        <div className={`rounded-lg p-4 bg-gray-700 flex flex-col  ${cls?.available_seat - cls?.enroll_student === 0 ? 'bg-red-800' : ''}`}>
                            <div className="flex justify-between items-center">
                                <div>
                                    <h5 className="text-white text-2xl font-bold leading-none">
                                        {cls.class_name}
                                    </h5>
                                    <span className="text-xs text-gray-400 leading-none"> {cls.instructor_name}</span>
                                </div>
                                <div className="flex items-center text-xl text-gray-400">
                                    <FaChair /> &nbsp; {cls?.available_seat - cls?.enroll_student}
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="text-lg text-white font-light">
                                    ${cls.price}.00
                                </div>
                                {
                                    (isRule === 'student' && cls?.available_seat - cls?.enroll_student > 0) ? <ClassesButton /> : <DisabledClassesButton />
                                }
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Courses;