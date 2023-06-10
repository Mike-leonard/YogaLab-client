import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useCart from "../hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";

const ClassesButton = ({ cls }) => {
    const { class_name, price, enroll_student, available_seat, _id } = cls
    const { user } = useAuth()
    //const [, refetch] = useCart()
    const navigate = useNavigate()
    const location = useLocation()
    const [axiosSecure] = useAxiosSecure()

    const handleAddToCart = item => {
        console.log(item);
        if (user && user.email) {
            const cartItem = {
                courseItemId: _id,
                courseName: class_name, totalSeat: available_seat,
                enrollStudent: enroll_student, price, email: user.email
            }
            axiosSecure.post('/carts', cartItem)
            .then(data => {
                if (data.data.insertedId) {
                    //refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Course added on the cart.',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
        }
        else {
            Swal.fire({
                title: 'Please login to enroll classes',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }

    }

    return (
        <button onClick={() => handleAddToCart(cls)} className="rounded-full bg-gray-900 text-white hover:bg-white hover:text-purple-900 hover:shadow-xl focus:outline-none w-10 h-10 flex ml-auto transition duration-300" >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stroke-current m-auto">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
        </button>
    );
};

export default ClassesButton;