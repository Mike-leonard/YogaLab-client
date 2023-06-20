import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useTheme from "../../hooks/useTheme";
import Swal from "sweetalert2";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
    const { theme } = useTheme()
    const [showPassword, setShowPassword] = useState(false);
    const { register, formState: { errors }, handleSubmit, setValue } = useForm()
    const { signIn, googleSignIn } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/"
    const [loginError, setLoginError] = useState('')


    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = data => {
        setLoginError("")
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                Swal.fire({
                    title: `${user.displayName}, Welcome back to YogaLab.`,
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            })
            .catch(error => {
                setLoginError(error.message)
            })
    }

    const handleGoogleSignIn = () => {
        setLoginError("")
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user
                console.log(loggedInUser)
                const savedUser = { name: loggedInUser.displayName, email: loggedInUser.email, role: 'student' }
                axios.post('https://yogalab-server.vercel.app/users', savedUser, {
                    headers: { 'Content-Type': 'application/json' }
                })
                    .then(data => {
                        if (data.data.insertedId) {
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'User created successfully.',
                                showConfirmButton: false,
                                timer: 1500
                            });
                        } else {
                            Swal.fire({
                                title: `${loggedInUser.displayName}, Welcome back to YogaLab.`,
                                showClass: {
                                    popup: 'animate__animated animate__fadeInDown'
                                },
                                hideClass: {
                                    popup: 'animate__animated animate__fadeOutUp'
                                }
                            });
                        }
                        navigate(from, { replace: true });
                    })

            }).catch(error => setLoginError(error.message));
    }

    const adminFillOut = () => {
        setValue('email', 'aa@aa.aa');
        setValue('password', '123456A!');
    }
    const instructorFillOut = () => {
        setValue('email', 'tt@aa.aa');
        setValue('password', '123456A!');
    }
    const studentFillOut = () => {
        setValue('email', 'aq@aa.aa');
        setValue('password', '123456A!');
    }

    return (
        <div className="h-[600px] flex flex-col md:flex-row justify-center items-center gap-10">
            <div className="w-96 p-7 border rounded-md order-2 md:order-1">
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
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                {...register('password', { required: 'Password is required' })}
                                className="input input-bordered w-full max-w-xs"
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute inset-y-0 right-0 px-2 flex items-center focus:outline-none"
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                        {errors.password && (
                            <p className="text-red-400" role="alert">
                                {errors.password.message}
                            </p>
                        )}
                    </div>
                    <input className={`btn w-full mt-5 ${theme === 'light' ? 'bg-[#DC2C5C] text-white' : 'bg-[#030508]'}`} value='Login' type="submit" />
                    <div>
                        {loginError && <p className="text-red-400">{loginError}</p>}
                    </div>
                </form>
                <p className={`${theme === 'light' ? 'text-[#DC2C5C]' : 'text-[#ffffff]'} mt-3`}>New to YogaLab ? <Link to='/register' className="text-blue-700">Create an account</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleSignIn} className={`btn btn-outline w-full ${theme === 'light' ? 'text-[#DC2C5C] btn-secondary' : 'text-[#ffffff]'}`}>CONTINUE WITH GOOGLE</button>
            </div>

            <div className="flex flex-col gap-5 order-1 md:order-2 mt-32 md:mt-0">
                <button onClick={adminFillOut}  className={`btn btn-outline w-full ${theme === 'light' ? 'text-[#DC2C5C] btn-secondary' : 'text-[#ffffff]'}`}>Admin</button>
                <button onClick={instructorFillOut} className={`btn btn-outline w-full ${theme === 'light' ? 'text-[#DC2C5C] btn-secondary' : 'text-[#ffffff]'}`}>Instructor</button>
                <button onClick={studentFillOut} className={`btn btn-outline w-full ${theme === 'light' ? 'text-[#DC2C5C] btn-secondary' : 'text-[#ffffff]'}`}>Student</button>
            </div>

        </div>
    );
};

export default Login;