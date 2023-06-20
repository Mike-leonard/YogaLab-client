import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Swal from "sweetalert2";
import Modal from "../../../components/Modal";

const ManageClasses = () => {


    const [axiosSecure] = useAxiosSecure()

    const { data: classes = [], refetch } = useQuery(['classes'], async () => {
        const res = await axiosSecure.get('/classes')
        return res.data
    })

    const [showModal, setShowModal] = useState(false)
    const [selectedCourse, setSelectedCourse] = useState(null)

    const openModal = (course) => {
        setSelectedCourse(course)
        setShowModal(true)
    };

    const closeModal = () => {
        setSelectedCourse(null)
        setShowModal(false)
        console.log(selectedCourse)
    };

console.log(classes)
    const handleApprove = async course => {
        await axiosSecure.patch(`/classes/${course._id}?statusType=approved`, {
            headers: { 'Content-Type': 'application/json' }
        }).then(data => {
            if (data.data.modifiedCount) {
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `Course Status is Changed Now!`,
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })
    }

    const handleDeny = async course => {
        await axiosSecure.patch(`/classes/${course._id}?statusType=denied`, {
            headers: { 'Content-Type': 'application/json' }
        }).then(data => {
            if (data.data.modifiedCount) {
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `Course Status is Changed Now!`,
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })
    }
    const handleFeedbackDeny = course => {
        openModal(course)
    }

    return (
        <div>
            <h3 className="text-3xl my-5 text-center font-semibold">All Classes At YogaLab</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead className="text-center">
                        <tr>
                            <th>#</th>
                            <th>Course Image</th>
                            <th>Course Name</th>
                            <th>Instructor Info</th>
                            <th>Available Seats</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {
                            classes.map((course, index) => <tr key={index}>
                                <th>{index + 1}</th>
                                <td><img className="w-24 rounded-xl" src={course.imgURL} alt="" /></td>
                                <td>{course.class_name}</td>
                                <td><span>{course.instructor_name}</span> <br /> <span>{course.instructor_email}</span></td>
                                <td>{course.available_seat}</td>
                                <td>${course.price}</td>
                                <td>{course.status}</td>
                                <td>
                                    <div className="flex flex-col gap-2">
                                        {course.status === "approved" || course.status === "denied" ?

                                            <>
                                                <button onClick={() => handleApprove(course)} className="btn btn-ghost bg-red-600  text-white" disabled>Approve</button>
                                                <button onClick={() => handleDeny(course)} className="btn btn-ghost bg-red-600  text-white" disabled>Deny</button>
                                                <button onClick={() => handleFeedbackDeny(course)} className="btn btn-ghost bg-red-600  text-white" disabled>Deny with <br /> Feedback</button>
                                            </> : <>
                                                <button onClick={() => handleApprove(course)} className="btn btn-ghost bg-red-600  text-white">Approve</button>
                                                <button onClick={() => handleDeny(course)} className="btn btn-ghost bg-red-600  text-white">Deny</button>
                                                <button onClick={() => handleFeedbackDeny(course)} className="btn btn-ghost bg-red-600  text-white">Deny with <br /> Feedback</button>
                                                <Modal isOpen={showModal} onClose={closeModal} course={selectedCourse} refetch={refetch}></Modal>
                                            </>}
                                    </div>

                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default ManageClasses;