import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageUsers = () => {

    const [axiosSecure] = useAxiosSecure()

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data
    })
    console.log(users)

    const handleMakeAdmin = user => { }
    const handleMakeInstructor = user => { }
    const handleDelete = user => {

    }
    return (
        <div>
            <h3 className="text-3xl font-semibold my-4">Total Users: {users.length}</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Admin Action</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>{(user.role === 'admin' || user.role === 'instructor') ?
                                    <div className="flex flex-col gap-2">
                                        <button onClick={() => handleMakeAdmin(user)} className="w-36 btn btn-ghost bg-orange-600  text-white" disabled>Make Admin</button>
                                        <button onClick={() => handleMakeInstructor(user)} className="w-36 btn btn-ghost bg-orange-600  text-white" disabled>Make Instructor</button>
                                    </div> :
                                    <div className="flex flex-col gap-2">
                                        <button onClick={() => handleMakeAdmin(user)} className="w-36 btn btn-ghost bg-orange-600  text-white">Make Admin</button>
                                        <button onClick={() => handleMakeInstructor(user)} className="w-36 btn btn-ghost bg-orange-600  text-white">Make Instructor</button>
                                    </div>
                                }</td>
                                <td><button onClick={() => handleDelete(user)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button></td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;