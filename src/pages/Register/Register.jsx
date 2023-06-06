import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useTheme from "../../hooks/useTheme";

const Register = () => {
    const { theme } = useTheme()
    const { register, formState: { errors }, handleSubmit } = useForm()
    const [registerError, setRegisterError] = useState("")

    const handleRegister = (data) => { }

    return (
        <div className="h-[600px] flex justify-center items-center">
            <div className="w-96 p-7 border rounded-md">
                <h2 className={`text-4xl text-center font-semibold ${theme === 'light' ? 'text-[#DC2C5C]' : 'text-[#ffffff]'}`}>Register</h2>
                <form onSubmit={handleSubmit(handleRegister)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text-alt">Name</span>
                        </label>

                        <input
                            type="text"
                            {...register("name", { required: "name is required" })}
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
                            {...register("email", { required: "Email Address is required" })}
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
                            {...register("email", { required: "Photo URL is required" })}
                            className="input input-bordered w-full max-w-xs"
                        />
                        {errors.email && (
                            <p className="text-red-400" role="alert">
                                {errors.email?.message}
                            </p>
                        )}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text-alt">Password</span>
                        </label>
                        <input
                            type="password"
                            {...register("password", { required: "Password is required" })}
                            className="input input-bordered w-full max-w-xs"
                        />
                        {errors.password && (
                            <p className="text-red-400" role="alert">
                                {errors.password?.message}
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