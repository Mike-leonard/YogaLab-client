import axios from "axios"
import useAuth from "./useAuth"
import { useQuery } from "@tanstack/react-query"

const useClassRule = () => {
    const { user } = useAuth()

    const { data: isRule, isLoading: isRouteLoading } = useQuery({
        queryKey: ['isRule', user?.email],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:3000/users/${user?.email}`)
            if(res.data?.role === undefined){
                return null
            } else {
                return res.data?.role
            }
            
        }
    })

    return [isRule, isRouteLoading]
}

export default useClassRule;