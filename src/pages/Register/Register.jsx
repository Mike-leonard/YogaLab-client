import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useTheme from "../../hooks/useTheme";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import axios from "axios";

const Register = () => {
    const { theme } = useTheme()
    const { register, watch, formState: { errors }, handleSubmit, reset } = useForm()
    const { createUser, updateUserProfile } = useAuth()
    const [registerError, setRegisterError] = useState("")
    const navigate = useNavigate()

    const handleRegister = (data) => {
        setRegisterError("")
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser)
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const saveUser = { name: data.name, email: data.email, role: 'student' }
                        axios.post('http://localhost:3000/users', saveUser, {
                            headers: { 'Content-Type': 'application/json'}
                        })
                            .then(data => {
                                console.log(data)
                                if (data.data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'User created successfully.',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/')
                                }
                            })
                    })
                    .catch(error => setRegisterError(error.message))
            }).catch(error => setRegisterError(error.message))
    }

    return (
        <div className=" mt-12 h-[700px] flex justify-center items-center">
            <div className="w-96 p-7 border rounded-md">
                <h2 className={`text-4xl text-center font-semibold ${theme === 'light' ? 'text-[#DC2C5C]' : 'text-[#ffffff]'}`}>Register</h2>
                <form onSubmit={handleSubmit(handleRegister)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text-alt">Name</span>
                        </label>

                        <input
                            type="text"
                            {...register("name", { required: "Name is required" })}
                            className="input input-bordered w-full max-w-xs"
                        />
                        {errors.name && (
                            <p className="text-red-400" role="alert">
                                {errors.name?.message}
                            </p>
                        )}
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text-alt">Email</span>
                        </label>

                        <input
                            type="text"
                            {...register("email", { required: "Email address is required" })}
                            className="input input-bordered w-full max-w-xs"
                        />
                        {errors.email && (
                            <p className="text-red-400" role="alert">
                                {errors.email?.message}
                            </p>
                        )}
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text-alt">Photo URL</span>
                        </label>

                        <input
                            type="text"
                            {...register("photoURL", { required: "Photo URL is required" })}
                            className="input input-bordered w-full max-w-xs"
                        />
                        {errors.photoURL && (
                            <p className="text-red-400" role="alert">
                                {errors.photoURL?.message}
                            </p>
                        )}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text-alt">Password</span>
                        </label>
                        <input
                            type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: 6,
                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/
                            })}
                            className="input input-bordered w-full max-w-xs"
                        />
                        {errors.password && (
                            <p className="text-red-400" role="alert">
                                {errors.password?.message}
                            </p>
                        )}
                        {errors.password?.type === 'minLength' && <p className="text-red-400">Password must be 6 characters</p>}
                        {errors.password?.type === 'pattern' && <p className="text-red-400">Password must have one Uppercase and one special character.</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text-alt">Confirm Password</span>
                        </label>
                        <input
                            type="password"
                            {...register("confirm_password", {
                                required: "Confirm Password is required",
                                validate: (value) => value === watch("password") || "Passwords do not match"
                            })}
                            className="input input-bordered w-full max-w-xs"
                        />
                        {errors.confirm_password && (
                            <p className="text-red-400" role="alert">
                                {errors.confirm_password?.message}
                            </p>
                        )}
                    </div>

                    <input
                        className={`btn w-full mt-5 ${theme === 'light' ? 'bg-[#DC2C5C] text-white' : 'bg-[#030508]'}`}
                        value="Register"
                        type="submit"
                    />
                    {registerError && <p className="text-red-400">{registerError}</p>}
                </form>
                <p className={`${theme === 'light' ? 'text-[#DC2C5C]' : 'text-[#ffffff]'} mt-3`}>
                    Already have an account ?{" "}
                    <Link to="/login" className="text-blue-700">
                        login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;