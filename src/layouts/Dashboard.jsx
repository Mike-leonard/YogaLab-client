import { useState } from 'react';
import { FaBars, FaBookOpen, FaTachometerAlt, FaChalkboardTeacher, FaPeopleCarry, FaWallet, FaCalendarAlt, FaHome, FaUsers } from 'react-icons/fa';
import useTheme from '../hooks/useTheme';
import { Link, NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    const { theme } = useTheme();
    const [showSidebar, setShowSidebar] = useState(true);
    const isRule = 'admin';


    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div
                className={`${showSidebar ? 'w-3/12' : 'w-0'} ${theme === 'light' ? 'bg-[#DC2C5C] text-white' : 'bg-[#030508]'
                    } transition-all duration-300 ${showSidebar ? 'opacity-100' : 'opacity-0'}`}
            >
                {/* Sidebar Content */}
                <div className="mt-20">
                    <ul className="menu p-4">
                        <li>
                            <Link to="/dashboard" exa>
                                <FaTachometerAlt /> Home
                            </Link>
                        </li>
                        {isRule === 'admin' ? (
                            <>
                                <li>
                                    <NavLink to="/dashboard/manage-classes">
                                        <FaBookOpen /> Manage Classes
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/manage-users">
                                        <FaUsers /> Manage Users
                                    </NavLink>
                                </li>
                            </>
                        ) : isRule === 'instructor' ? (
                            <>
                                <li>
                                    <NavLink to="/dashboard/add-a-class">
                                        <FaCalendarAlt /> Add a Class
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/my-classes">
                                        <FaBookOpen /> My Classes
                                    </NavLink>
                                </li>
                            </>
                        ) : (
                            <>
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

            <div className={`${showSidebar ? 'w-9/12' : 'w-full'} transition-all duration-300`}>
                {/* Main Content Header */}
                <div
                    className={`fixed w-full py-4 text-center ${theme === 'light' ? 'bg-[#DC2C5C] text-white' : 'bg-[#030508]'
                        }`}
                >
                    <h1 className="text-xl font-semibold text-center">{isRule.toUpperCase()}</h1>
                </div>
                <div className="bg-red-700 mt-14">
                    <Outlet />
                </div>
            </div>
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
