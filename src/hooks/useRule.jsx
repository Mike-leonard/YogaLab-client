import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useRule = () => {
    // TODO: new add
    const { user,loading } = useAuth()
    const [axiosSecure] = useAxiosSecure()

    const { data: isRule, isLoading: isRouteLoading } = useQuery({
        queryKey: ['isRule', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/${user?.email}`)
            return res.data.role
        }
    })

    return [isRule, isRouteLoading]
}

export default useRule;