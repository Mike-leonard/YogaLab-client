import { Link } from 'react-router-dom';
import useTheme from '../../hooks/useTheme';


const Header = () => {
    const { theme, toggleTheme } = useTheme()
    const user = {}
    user.email = 'aa@aa.aa'
    const navItems = <>
        <li><Link to="/">Home</Link> </li>
        <li> <Link to="/instructors">Instructors</Link> </li>
        <li> <Link to="/classes">Classes</Link> </li>

        {user?.email ?
            <>
                <li>  <Link to="/dashboard">Dashboard</Link> </li>
            </> :
            <>
            </>
        }
    </>

    return (
        <div className={`navbar ${theme === 'light' ? 'bg-[#DC2C5C] text-white' : 'bg-[#030508]'}`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to="/"> <img className="w-48" src="labga.png" alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="form-control w-16">
                    <input type="checkbox" className="toggle " defaultChecked onClick={toggleTheme} />
                </div>
                {user?.email ?
                    <>
                        <div className="avatar mr-4 cursor-pointer">
                            <div className="w-12 rounded-full">
                                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" />
                            </div>
                        </div>
                        <button className="btn"/*  onClick={'handleLogout'} */>Log out</button>
                    </> :
                    <Link to="/login"><button className="btn">Login</button></Link>

                }
            </div>
        </div>
    );
};

export default Header;