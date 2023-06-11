
import useEnrolledCourses from "../../../hooks/useEnrolledCourses";

const PaymentHistory = () => {

    const [enrolledClasses] = useEnrolledCourses()

    return (
        <div>
            <h3 className="text-3xl my-5 text-center font-semibold">Your Payment History At YogaLab</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead className="text-center">
                        <tr>
                            <th>#</th>

                            <th>Course Name</th>
                            <th>Transaction ID</th>
                            <th>Date </th>
                            <th>Price</th>
                            <th>Status</th>

                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {enrolledClasses?.map((course, index) => (
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>
                                    {Array.isArray(course?.paidItemsName) &&
                                        course?.paidItemsName.map((courseName, index) => (
                                            <p key={index}>{String(courseName)}</p>
                                        ))}
                                </td>
                                <td>{String(course.transactionId)}</td>
                                <td>{new Date(course.date).toLocaleString()}</td>
                                <td className="text-right">${String(course.price)}</td>
                                <td className="text-right">Paid</td>
                            </tr>
                        ))}
                    </tbody>

                </table>

            </div>
        </div>
    );
};

export default PaymentHistory;