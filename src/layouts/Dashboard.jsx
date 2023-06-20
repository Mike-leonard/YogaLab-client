import { useState } from 'react';
import { FaBars, FaBookOpen, FaTachometerAlt, FaChalkboardTeacher, FaPeopleCarry, FaWallet, FaCalendarAlt, FaHome, FaUsers } from 'react-icons/fa';
import useTheme from '../hooks/useTheme';
import { Link, NavLink, Outlet } from 'react-router-dom';
import useClassRule from '../hooks/useClassRule';

const Dashboard = () => {
    const { theme } = useTheme();
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    // const isRule = 'admin';

    // warning changed useRule to useClassRule
    const [isRule, isRouteLoading] = useClassRule()

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (

        <>
            {isRouteLoading ? <progress className="progress w-56"></progress> :
                <div className="flex h-screen">
                    {/* Sidebar */}
                    <div
                        className={`${theme === 'light' ? 'bg-[#DC2C5C] text-white' : 'bg-[#030508]'
                            } ${isSidebarOpen ? 'w-64' : 'w-0'}  flex-shrink-0 sidebar`}
                    >
                        {/* Sidebar Content */}
                        <div className={`mt-20 ${isSidebarOpen ? 'show-menu' : 'hidden-menu'}`}>
                            <ul className={`menu p-4 w-64 ${isSidebarOpen ? 'show-menu' : 'hidden-menu'}`}>
                                <li>
                                    <Link to="/dashboard">
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

                    <div className={`flex flex-col flex-1`}>
                        {/* Main Content Header */}
                        <div
                            className={` py-4 ${theme === 'light' ? 'bg-[#DC2C5C] text-white' : 'bg-[#030508]'
                                }`}
                        >
                            <h1 className="text-xl font-semibold text-center">{isRule?.toUpperCase()}</h1>
                        </div>
                        <div className="flex-1 overflow-y-auto p-4">
                            <Outlet />
                        </div>
                    </div>
                    <button
                        className="fixed top-1 left-4 py-2 btn btn-outline px-4 rounded transition-all duration-300"
                        onClick={toggleSidebar}
                    >
                        <FaBars />
                    </button>
                </div>}
        </>


    );
};

export default Dashboard;