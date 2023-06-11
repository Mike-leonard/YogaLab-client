import { useQuery } from "@tanstack/react-query"
import useAuth from "./useAuth"
import useAxiosSecure from "./useAxiosSecure"

const useEnrolledCourses = () => {
    const { user, loading } = useAuth()
    const [axiosSecure] = useAxiosSecure()
    const { refetch, data: enrolledClasses = [] } = useQuery({
        queryKey: ['enrolled', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/payments/done?email=${user?.email}`)
            return res.data
        }
    })

    return [enrolledClasses, refetch]

}

export default useEnrolledCourses;