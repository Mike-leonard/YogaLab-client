import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import CurriculumTab from "../../components/SingleCourseCompo/CurriculumTab";
import AboutTab from "../../components/SingleCourseCompo/AboutTab";
import TabHeader from "../../components/SingleCourseCompo/TabHeader";
import MembersTab from "../../components/SingleCourseCompo/MembersTab";
import ReviewTab from "../../components/SingleCourseCompo/ReviewTab";
import NewsTab from "../../components/SingleCourseCompo/NewsTab";
import useTheme from "../../hooks/useTheme";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";
import Swal from "sweetalert2";



const SingleCourse = () => {

    const { theme } = useTheme()
    const { user } = useAuth()
    const [axiosSecure] = useAxiosSecure()
    const [, refetch] = useCart()
    const navigate = useNavigate()

    const [activeTab, setActiveTab] = useState('curriculum');
    const params = useParams()
    /* TODO: later make a single route in database with courseID */
    const { data: classes = [] } = useQuery({
        queryKey: ['classes', params?.courseId],
        queryFn: async () => {
            const res = await axios.get(`https://yogalab-server.vercel.app/classes?status=approved&course=${params?.courseId}`)
            return res.data
        }
    });
    console.log(classes)
    const { class_name, price, enroll_student, available_seat, instructor_name, imgURL, _id } = classes

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const renderTabContent = () => {
        switch (activeTab) {
            case 'curriculum':
                return <CurriculumTab />;
            case 'about':
                return <AboutTab />;
            case 'members':
                return <MembersTab />;
            case 'news':
                return <NewsTab />;
            case 'reviews':
                return <ReviewTab />
            default:
                return null;
        }
    };

    const handleAddToCart = () => {
        //console.log(item);
        if (user && user.email) {
            const cartItem = {
                courseItemId: _id,
                courseName: class_name, instructorName: instructor_name, coursePhoto: imgURL,
                totalSeat: available_seat, enrollStudent: enroll_student, price, email: user.email
            }
            axiosSecure.post('/carts', cartItem)
                .then(data => {
                    if (data.data.insertedId) {
                        refetch()
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Course added on the cart. Go to Dashboard to find your Cart Item',
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
        <div className="relative text-white">

            <div className="background">
                <img src={classes?.imgURL} alt="" className="h-[500px] w-full" />
            </div>
            <div className={`w-4/6 mx-auto relative -top-24 p-5 rounded-xl ${theme === 'light' ? 'bg-[#DC2C5C] ' : 'bg-[#030508]'} rounded-lg px-8 py-6`}>
                <h1 className="text-3xl font-semibold">{classes.class_name}</h1>

                <div className="flex justify-between my-5">
                    {/* Left Side */}
                    <div className="flex items-center justify-center gap-5">
                        {/* Image */}
                        <img src="https://cutewallpaper.org/24/image-placeholder-png/person-placeholder-image-free-hd-png-download-vhv.png" alt="Product" className="w-16 h-16 rounded-full" />

                        {/* Instructor Info */}
                        <div>
                            <p className="font-medium">Instructor</p>
                            <p className="font-bold text-xl">{classes.instructor_name}</p>
                        </div>

                        {/* Curricular */}
                        <div className="border-s-2 border-e-2 px-5">
                            <h3 className="font-medium">Curricular</h3>
                            <p className="font-bold">7 Items</p>

                        </div>

                        {/* Reviews */}
                        <div>
                            <h3 className="font-medium -mt-1">Reviews</h3>
                            <div className="flex text-sm">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaRegStar />
                                <span className="-mt-1 ml-3">( 0 )</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="flex items-center gap-5">
                        {/* Price */}
                        <p className="text-2xl font-bold mt-3">${classes.price}</p>
                        {/* Add to Cart Button */}
                        <button onClick={handleAddToCart} className=" btn text-white px- py-2 rounded-xl mt-4 text-xl font-bold">
                            Add to Cart
                        </button>
                    </div>
                </div>
                <div className="divider h-1 bg-gray-300 rounded-md"></div>
            </div>

            <div className="grid grid-cols-4 w-4/6 mx-auto -mt-10 gap-6">
                <div className="col-span-3">

                    <TabHeader activeTab={activeTab} handleTabClick={handleTabClick} />

                    <div className={`mt-4 rounded-xl px-5 pt-5 pb-12  ${theme === 'light' ? 'bg-[#DC2C5C] ' : 'bg-[#030508]'}`}>{renderTabContent()}</div>
                </div>
                <div className={`col-span-1 px-5 pt-5 pb-12 rounded-xl  ${theme === 'light' ? 'bg-[#DC2C5C] ' : 'bg-[#030508]'}`}>
                    <h3 className="text-2xl font-medium mb-2">COURSE INFO</h3>
                    <p className="font-extrabold">Lessons: <span className="font-medium">4</span></p>
                    <p className="font-extrabold">Quizzes: <span className="font-medium">1</span></p>
                    <p className="font-extrabold">Assignments: <span className="font-medium">1</span></p>
                    <p className="font-extrabold">Duration: <span className="font-medium">77Hrs 15Mins</span></p>
                </div>
            </div>
        </div>
    );
};

export default SingleCourse;