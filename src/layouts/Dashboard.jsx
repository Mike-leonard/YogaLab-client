import { useState } from 'react';
import { FaBars, FaBookOpen, FaTachometerAlt, FaChalkboardTeacher, FaPeopleCarry, FaWallet, FaCalendarAlt, FaHome, FaUsers } from 'react-icons/fa';
import useTheme from '../hooks/useTheme';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    const { theme } = useTheme();
    const [showSidebar, setShowSidebar] = useState(true);
    const isRule = "instructor";

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div
                className={`${showSidebar ? 'w-3/12' : 'w-0'
                    } ${theme === 'light' ? 'bg-[#DC2C5C] text-white' : 'bg-[#030508]'
                    } transition-all duration-300 ${showSidebar ? 'opacity-100' : 'opacity-0'
                    }`}
            >
                {/* Sidebar Content */}
                {/* Add your sidebar content here */}
                <div className="mt-20">
                    <ul className="menu p-4">
                        {isRule === 'admin' ? (
                            <>
                                <li>
                                    <NavLink to="/dashboard/home">
                                        <FaTachometerAlt /> Admin Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/addItem">
                                        <FaBookOpen /> Manage Classes
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/allusers">
                                        <FaUsers /> Manage Users
                                    </NavLink>
                                </li>
                            </>
                        ) : (
                            <>
                                {isRule === 'instructor' ? (
                                    <>
                                        <li>
                                            <NavLink to="/dashboard/home">
                                                <FaHome /> Instructor Home
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/dashboard/reservations">
                                                <FaCalendarAlt /> Add a Class
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/dashboard/history">
                                                <FaBookOpen /> My Classes
                                            </NavLink>
                                        </li>
                                    </>
                                ) : (
                                    <>
                                        <li>
                                            <NavLink to="/dashboard/home">
                                                <FaHome /> Student Home
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/dashboard/selected-classes">
                                                <FaCalendarAlt /> My Selected Classes
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/dashboard/enrolled-classes">
                                                <FaChalkboardTeacher /> My Enrolled Classes
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/dashboard/payment-history">
                                                <FaWallet /> Payment History
                                            </NavLink>
                                        </li>
                                    </>
                                )}
                            </>
                        )}
                        <div className="my-4 border-t border-white"></div>
                        <li>
                            <NavLink to="/">
                                <FaHome /> Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/instructors">
                                <FaPeopleCarry /> Instructors
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/classes">
                                <FaChalkboardTeacher /> Classes
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>

            <div
                className={`${showSidebar ? 'w-9/12' : 'w-full'
                    } transition-all duration-300`}
            >
                {/* Main Content Header */}
                <div
                    className={`fixed w-full py-4 text-center ${theme === 'light' ? 'bg-[#DC2C5C] text-white' : 'bg-[#030508]'
                        }`}
                >
                    {/* Add your main content header here */}
                    <h1 className="text-xl font-semibold">{isRule.toUpperCase()}</h1>
                </div>

                <Outlet />
            </div>

            {/* Button to show/hide sidebar */}
            <button
                className="fixed top-1 left-4 py-2 btn btn-outline px-4 rounded transition-all duration-300"
                onClick={toggleSidebar}
            >
                <FaBars />
            </button>
        </div>
    );
};

export default Dashboard;
