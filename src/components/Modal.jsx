import { useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import useTheme from "../hooks/useTheme";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const Modal = ({ isOpen, onClose, children, course, refetch }) => {

    const [axiosSecure] = useAxiosSecure()
    const [text, setText] = useState('')
    const { theme } = useTheme()

    if (!isOpen) return null

    const handleChange = (e) => {
        setText(e.target.value)
    };

    const handleSubmit = async () => {
        console.log('Submitted:', text)
        console.log('Course:', course)

        await axiosSecure.patch(`classes/${course._id}?statusType=denied&feedback=${text}`, {
            headers: { 'Content-Type': 'application/json' }
        }).then(data => {
            console.log(data)
            if (data.data.modifiedCount) {
                refetch()
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `Course Status is Changed Now!`,
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })

        onClose();
    };

    // TODO: need to check when many data modals is same or not

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className={` ${theme === 'light' ? 'bg-[#DC2C5C] ' : 'bg-[#030508]'} rounded-lg px-8 py-6`}>
                <div className="flex justify-between">
                    <h2 className="text-2xl">Feedback</h2>
                    <button className="text-4xl" onClick={onClose}>
                        <FaWindowClose />
                    </button>
                </div>
                {children}

                <div className="flex flex-col">

                    <textarea
                        className="w-full h-40 mt-4 p-2 border border-gray-300"
                        placeholder="Enter feedback message..."
                        value={text}
                        onChange={handleChange}
                        required
                    />
                    <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded" onClick={handleSubmit}>
                        Deny With this Message
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal