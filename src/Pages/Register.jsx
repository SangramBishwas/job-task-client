import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useAuth from "../Hooks/useContext";

const Home = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { creatUser } = useAuth();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleInputPassword = (data) => {
        console.log(data.password.target.value);
    }
    const Register = (data) => {
        const { email, password } = data;

        creatUser(email, password)
            .then(() => {
                navigate("/")
            })
            .catch((error) => console.error(error))
    }
    return (
        <div>
            <div className="hero bg-base-200 p-10">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleSubmit(Register)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text"
                                    placeholder="email"
                                    className="input input-bordered" required
                                    {...register("name", { required: true })} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required
                                    {...register("email", { required: true })} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={showPassword ? "text" : "password"}
                                    placeholder="password"
                                    className="input input-bordered"
                                    onChange={handleInputPassword}
                                    required  {...register("password", {
                                        required: true, minLength: 6, pattern: /^(?=.*[a-z])(?=.*[A-Z]).+$/
                                    })} />
                                <span onClick={() => setShowPassword(!showPassword)} className="absolute bottom-[185px] right-10">{showPassword ?
                                    <FaEye /> : <FaEyeSlash />}</span>
                                {errors.password && errors.password.type === "minLength" && (<span>Password must be atleast 6 digit.</span>)}
                                {errors.password && errors.password.type === "pattern" && (<span>Password must be atleast one uppercase and one lowercase letter.</span>)}

                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                                <p>Already have an account <Link>Login</Link></p>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;