import { useState } from 'react';
import { FaBars, FaBookOpen, FaTachometerAlt, FaChalkboardTeacher, FaPeopleCarry, FaWallet, FaCalendarAlt, FaHome, FaUsers } from 'react-icons/fa';
import useTheme from '../hooks/useTheme';
import { NavLink, Outlet } from 'react-router-dom';


const Dashboard = () => {
    const { theme } = useTheme()
    const [showSidebar, setShowSidebar] = useState(true);
    const isRule = "instructor"
    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div className={`w-${showSidebar ? '1/3' : '0'}  ${theme === 'light' ? 'bg-[#DC2C5C] text-white' : 'bg-[#030508]'} transition-all duration-300 ${showSidebar ? 'opacity-100' : 'opacity-0'}`} style={{ minWidth: '0' }}>
                {/* Sidebar Content */}
                {/* Add your sidebar content here */}
                <div className="mt-20">
                    <ul className="menu p-4 w-80">
                        {
                            isRule === 'admin' ?
                                <>
                                    <li><NavLink to="/dashboard/home"><FaTachometerAlt></FaTachometerAlt>Admin Home</NavLink></li>
                                    <li><NavLink to="/dashboard/addItem"><FaBookOpen></FaBookOpen>Manage Classes</NavLink></li>
                                    <li><NavLink to="/dashboard/allusers"><FaUsers></FaUsers> Manage Users</NavLink></li>

                                </> :
                                <> {
                                    isRule === 'instructor' ?
                                        <>
                                            <li><NavLink to="/dashboard/home"><FaHome></FaHome> Instructor Home</NavLink></li>
                                            <li><NavLink to="/dashboard/reservations"><FaCalendarAlt></FaCalendarAlt> Add a Class</NavLink></li>
                                            <li><NavLink to="/dashboard/history"><FaBookOpen></FaBookOpen> My Classes</NavLink></li>
                                        </> :
                                        <>

                                            <li><NavLink to="/dashboard/home"><FaHome></FaHome> Student Home</NavLink></li>
                                            <li><NavLink to="/dashboard/selected-classes"><FaCalendarAlt></FaCalendarAlt> My Selected Classes</NavLink></li>
                                            <li><NavLink to="/dashboard/enrolled-classes"><FaChalkboardTeacher></FaChalkboardTeacher> My Enrolled Classes</NavLink></li>
                                            <li><NavLink to="/dashboard/payment-history"><FaWallet></FaWallet> Payment History</NavLink></li>
                                        </>
                                }
                                </>
                        }

                        <div className="my-4 border-t border-white"></div>
                        <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                        <li><NavLink to="/instructors"><FaPeopleCarry />Instructors</NavLink></li>
                        <li><NavLink to="/classes"><FaChalkboardTeacher />Classes</NavLink></li>
                    </ul>
                </div>
            </div>


            <div className={`w-${showSidebar ? 'full' : 'full'} mx-auto transition-all duration-300`}>
                {/* Main Content Header */}
                <div className={`py-4 text-center  ${theme === 'light' ? 'bg-[#DC2C5C] text-white' : 'bg-[#030508]'}`}>
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
            {/*    {showSidebar ? 'Hide Sidebar' : 'Show Sidebar'} */}
        </div>
    );
};

export default Dashboard;
