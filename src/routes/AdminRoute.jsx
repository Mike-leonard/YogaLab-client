import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";

const AdminRoute = ({ children, type }) => {
    const { user, loading } = useAuth()
    const location = useLocation();
    const [isAdmin, isAdminLoading] = useAdmin()
    console.log("is Admin",isAdmin)
    console.log("is type",type)

    if (loading || isAdminLoading) {
        return <progress className="progress w-56"></progress>
    }

    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default AdminRoute;