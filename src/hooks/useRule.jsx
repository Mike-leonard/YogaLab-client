import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useRule = () => {
    const { user } = useAuth()
    const [axiosSecure] = useAxiosSecure()

    const { data: isRule, isLoading: isRouteLoading } = useQuery({
        queryKey: ['isRule', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/${user?.email}`)
            console.log("from use admin", res.data.role)
            return res.data.role
        }
    })

    return [isRule, isRouteLoading]
}

export default useRule;