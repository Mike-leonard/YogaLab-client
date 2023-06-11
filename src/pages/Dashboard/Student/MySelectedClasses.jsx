import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const MySelectedClasses = () => {

    const [cart, refetch] = useCart()
    const [axiosSecure] = useAxiosSecure()
    // calculating total
    let totalAmount
    if (cart !== null) {
        totalAmount = cart.reduce((sum, item) => item.price + sum, 0)
    }
    console.log(cart)
    const handleDeleteCart = course => {
        console.log(course)
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to delete this item from cart? ",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${course._id}`)
                    .then(data => {
                        if (data.data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your cart item has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    return (
        <div>
            <h3 className="text-3xl my-5 text-center font-semibold">Your Selected Classes At YogaLab</h3>
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
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {
                            cart?.map((course, index) => <tr key={index}>
                                <th>{index + 1}</th>
                                <td><img className="w-24 rounded-xl" src={course.coursePhoto} alt="" /></td>
                                <td>{course.courseName}</td>
                                <td>{course.instructorName}</td>
                                <td>{course.totalSeat - course.enrollStudent}</td>
                                <td className="text-right">${course.price}</td>
                                <td>

                                    <button onClick={() => handleDeleteCart(course)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button>

                                </td>
                            </tr>)
                        }


                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="5"></td>
                            <td>Total Amount :</td>
                            <td className="text-xl">${totalAmount}.00</td>
                        </tr>
                        <tr>
                            <td colSpan="6"></td>
                            <td>
                                {totalAmount > 0 ? <Link to="/dashboard/payment" className="btn btn-primary px-8">Pay</Link> : ""

                                }

                            </td>
                        </tr>
                    </tfoot>
                </table>

            </div>
        </div>
    );
};

export default MySelectedClasses;