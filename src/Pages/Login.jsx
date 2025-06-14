import Lottie, { LottiePlayer } from "lottie-react";
import React, { use } from "react";
import animation from "../assets/A1.json";
import { Link } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
  const { login ,setUser  } = use(AuthContext);

  const handelLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    login(email, password)
      .then((result) => {
        toast.success("Login Successful");
        console.log(result);
        setUser(result.user)
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handelGoogleLogin =()=>{
    alert('clicked')
  }


  return (
    <div className="bg-5 pb-20 pt-14 md:pt-32">
      <div className="md:w-[70%] w-[90%] md:h-auto mx-auto flex flex-col-reverse md:flex-row justify-between items-center gap-4 md:gap-48 nav-bg p-4 rounded-2xl">
        <div className="md:pl-20 md:py-20">
          <div className="mb-10">
            <h1 className="text-4xl font-semibold">Hello,</h1>
            <h1 className="text-4xl font-semibold">Welcome Back</h1>
          </div>
          <form onSubmit={handelLogin} className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              className="input w-[300px]"
              placeholder="Email"
              name="email"
            />
            <label className="label">Password</label>
            <input
              type="password"
              className="input w-[300px]"
              placeholder="Password"
              name="password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button type="submit" className="btn btn-neutral mt-4 w-[100px]">
              Login
            </button>
          </form>
          <div className="divider">OR</div>
          <div onClick={handelGoogleLogin} className="card btn bg-base-300 rounded-box w-20 h-10 ml-24">
            <Link>
              <FcGoogle size={25} />
            </Link>
          </div>
          <div className="mt-3">
            <h1 className="text-base font-medium">
              Don't Have an Account{" "}
              <Link to={"/signup"}>
                <span className="text-purple-600">Sign Up</span>
              </Link>
            </h1>
          </div>
        </div>
        <div className="p-3 bg-gray-700 rounded-2xl md:h-[580px] md:w-[520px]">
          <Lottie animationData={animation} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default Login;
