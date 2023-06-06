import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useTheme from "../../hooks/useTheme";

const Login = () => {
    const { theme } = useTheme()
    const { register, formState: { errors }, handleSubmit } = useForm()

    const [loginError, setLoginError] = useState('')

    const handleLogin = data => { 

    }

    const handleGoogleSignIn = () => { }
    return (
        <div className="h-[600px] flex justify-center items-center">
            <div className="w-96 p-7 border rounded-md">
                <h2 className={`text-4xl text-center font-semibold ${theme === 'light' ? 'text-[#DC2C5C]' : 'text-[#ffffff]'}`}>Login</h2>
                <form onSubmit={handleSubmit((handleLogin))}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text-alt">Email</span>
                        </label>
                        <input
                            type="text"
                            {...register("email", { required: "Email Address is required" })}
                            className="input input-bordered w-full max-w-xs"
                        />
                        {errors.email && <p className="text-red-400" role="alert">{errors.email?.message}</p>}

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text-alt">Password</span>
                        </label>
                        <input
                            type="password"
                            {...register("password",
                                {
                                    required: "Password is required",

                                })}
                            className="input input-bordered w-full max-w-xs"
                        />
                        {errors.password && <p className="text-red-400" role="alert">{errors.password?.message}</p>}
                    </div>
                    <input className={`btn w-full mt-5 ${theme === 'light' ? 'bg-[#DC2C5C] text-white' : 'bg-[#030508]'}` } value='Login' type="submit" />
                    <div>
                        {loginError && <p className="text-red-400">{loginError}</p>}
                    </div>
                </form>
                <p className={`${theme === 'light' ? 'text-[#DC2C5C]' : 'text-[#ffffff]'} mt-3`}>New to YogaLab ? <Link to='/register' className="text-blue-700">Create an account</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleSignIn} className={`btn btn-outline w-full ${theme === 'light' ? 'text-[#DC2C5C] btn-secondary' : 'text-[#ffffff]'}`}>CONTINUE WITH GOOGLE</button>
            </div>

        </div>
    );
};

export default Login;