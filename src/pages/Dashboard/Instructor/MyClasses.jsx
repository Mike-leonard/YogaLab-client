import { FaEdit } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const MyClasses = () => {
    const { user } = useAuth()
    const [axiosSecure] = useAxiosSecure()

    const { data: classes = [] } = useQuery({
        queryKey: ['classes', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/classes/${user?.email}`)
            return res.data.classes
        }
    })

    const handleUpdate = (course) => {
        console.log(course)
    }
    return (
        <div>
            <h3 className="text-3xl my-5 text-center font-semibold">Instructor Classes</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead className="text-center">
                        <tr>
                            <th>#</th>
                            <th>Course Name</th>
                            <th>Status</th>
                            <th>Enrolled</th>
                            <th>Available Seats</th>
                            <th>Feedback</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {
                            classes.map((course, index) => <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{course.class_name}</td>
                                <td>{course.status}</td>
                                <td>{course.enroll_student}</td>
                                <td>{course.available_seat - course.enroll_student}</td>
                                <td>{course.feedback}</td>
                                <td><button onClick={() => handleUpdate(course)} className="btn btn-ghost bg-red-600  text-white"><FaEdit></FaEdit></button></td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyClasses;