import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useRule from "../hooks/useRule";


const SpecifyRoute = ({ children, type }) => {
    const { user, loading } = useAuth()
    const location = useLocation();
    const [isRule, isRouteLoading] = useRule()
    console.log("is Admin", isRule)
    console.log("is type", type)
    if (loading || isRouteLoading) {
        return <progress className="progress w-56"></progress>
    }

    if (user && isRule === type) {
        return children;
    }
    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default SpecifyRoute;