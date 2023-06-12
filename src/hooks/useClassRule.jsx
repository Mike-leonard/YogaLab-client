import axios from "axios"
import useAuth from "./useAuth"
import { useQuery } from "@tanstack/react-query"

const useClassRule = () => {
    const { user, loading } = useAuth()

    const { data: isRule, isLoading: isRouteLoading } = useQuery({
        queryKey: ['isRule', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axios.get(`https://yogalab-server.vercel.app/users/${user?.email}`)
            if (res.data?.role === undefined) {
                return null
            } else {
                return res.data?.role
            }

        }
    })

    return [isRule, isRouteLoading]
}

export default useClassRule;