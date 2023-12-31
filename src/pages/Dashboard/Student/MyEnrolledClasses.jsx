import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useEnrolledCourses from "../../../hooks/useEnrolledCourses";

const MyEnrolledClasses = () => {
    const [enrolledClasses] = useEnrolledCourses()
    const [axiosSecure] = useAxiosSecure()
    const enrolledClassesArray = JSON.stringify(enrolledClasses);

    const { data: classes = [] } = useQuery({
        queryKey: ['classes', enrolledClassesArray],
        queryFn: async () => {
            const res = await axiosSecure.get(`/enroll-courses?enrolled=${enrolledClassesArray}`)
            return res.data
        }
    })
    //console.log(classes)


    return (
        <div>
            <h3 className="text-3xl my-5 text-center font-semibold">Your Enrolled Classes At YogaLab</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead className="text-center">
                        <tr>
                            <th>#</th>
                            <th>Course Name</th>
                            <th>Instructor Info</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Course Image</th>

                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {classes?.map((course, index) => (
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{course.class_name}</td>
                                <td><span>{course.instructor_name}</span> <br /> <span>{course.instructor_email}</span></td>
                                <td>${course.price}</td>
                                <td className="text-right">Enrolled</td>
                                <td className="flex justify-center"><img className="w-24 rounded-xl" src={course.imgURL} alt="" /></td>
                            </tr>
                        ))}
                    </tbody>

                </table>

            </div>
        </div>
    );
};

export default MyEnrolledClasses;