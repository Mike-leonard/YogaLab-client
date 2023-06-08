import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../layouts/Dashboard";
import PaymentHistory from "../pages/Dashboard/Student/PaymentHistory";
import MySelectedClasses from "../pages/Dashboard/Student/MySelectedClasses";
import MyEnrolledClasses from "../pages/Dashboard/Student/MyEnrolledClasses";
import AddAClass from "../pages/Dashboard/Instructor/AddAClass";
import MyClasses from "../pages/Dashboard/Instructor/MyClasses";
import ManageClasses from "../pages/Dashboard/Admin/ManageClasses";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers";
import GeneralHome from "../pages/Dashboard/GeneralHome";
import AdminRoute from "./AdminRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard />,
        children: [
            {
                index: true,
                element: <GeneralHome />,
            },
            /* Admin Route */
            {
                path: 'manage-classes',
                element: <AdminRoute type={'admin'}><ManageClasses /></AdminRoute>
            },
            {
                path: 'manage-users',
                element: <AdminRoute type={'admin'}><ManageUsers /></AdminRoute>
            },

            /* Instructor Routes */
            {
                path: 'add-a-class',
                element: <AddAClass />
            },
            {
                path: 'my-classes',
                element: <MyClasses />
            },
            /* Student Routes */
            {
                path: 'selected-classes',
                element: <MySelectedClasses />
            },
            {
                path: 'enrolled-classes',
                element: <MyEnrolledClasses />
            },
            {
                path: 'payment-history',
                element: <PaymentHistory />
            }
        ]
    }
])

export default router;