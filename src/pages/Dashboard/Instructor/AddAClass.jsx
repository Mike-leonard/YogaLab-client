import axios from "axios";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";

const AddAClass = () => {
    const {user} = useAuth()
    const { register, handleSubmit, reset } = useForm()
    const [axiosSecure] = useAxiosSecure()
    const img_hosting_token = import.meta.env.VITE_IMAGE_HOSTING_KEY
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    console.log(user)

    const onSubmit = data => {
        const formData = new FormData()
        formData.append('image', data.image[0])
        axios.post(img_hosting_url, formData)
            .then(imgResponse => {
                if (imgResponse.data.success) {
                    console.log('success')
                    const imgURL = imgResponse.data.data.display_url
                    const { class_name, available_seat, price } = data
                    const addNewClass = {
                        class_name, imgURL, instructor_name: user?.displayName, instructor_email: user?.email,
                        available_seat: parseFloat(available_seat), enroll_student: 0,
                        price: parseFloat(price), feedback: null, status: "pending"
                    }
                    axiosSecure.post('/classes', addNewClass)
                        .then(data => {
                            console.log('after posting new menu item', data.data)
                            if (data.data.insertedId) {
                                reset()
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'New class added successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                }
            })
        console.log(data)
    }



    return (
        <div className="w-full px-10">
            <h3 className="text-3xl text-center my-6">Add a New Class</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex my-4">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Class Name*</span>
                        </label>
                        <input type="text" {...register("class_name", { required: true })} placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text">Class Image*</span>
                        </label>
                        <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full " />
                    </div>
                </div>
                <div className="flex my-4">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Instructor Name</span>
                        </label>
                        <input type="text" defaultValue={user?.displayName} {...register("instructor_name")} placeholder="Type here" className="input input-bordered w-full " disabled />
                    </div>
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text font-semibold">Instructor Email</span>
                        </label>
                        <input type="text" defaultValue={user?.email} {...register("instructor_email")} placeholder="Type here" className="input input-bordered w-full " disabled />
                    </div>
                </div>
                <div className="flex my-4">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Available Seat*</span>
                        </label>
                        <input type="text" {...register("available_seat", { required: true })} placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text font-semibold">Price*</span>
                        </label>
                        <input type="number" {...register("price", { required: true })} placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                </div>
                <input className="btn mt-4 w-full" type="submit" value="Add Class" />
            </form>
        </div>
    );
};

export default AddAClass;