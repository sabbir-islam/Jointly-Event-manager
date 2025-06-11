import Lottie, { LottiePlayer } from "lottie-react";
import React from "react";
import animation from "../assets/A2.json";
import { Link } from "react-router";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
  return (
    <div>
      <div className="bg-5 pb-20 pt-14 md:pt-32">
        <div className="md:w-[70%] w-[90%] md:h-auto mx-auto flex flex-col-reverse md:flex-row justify-between items-center gap-4 md:gap-48 nav-bg p-4 rounded-2xl">
          <div className="md:pl-20 md:py-20">
            <div className="mb-10">
              <h1 className="text-4xl font-semibold">Hello,</h1>
              <h1 className="text-4xl font-semibold">Create an Account</h1>
            </div>
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input
                type="text"
                className="input w-[300px]"
                placeholder="Enter Name"
              />
              <label className="label">Photo</label>
              <input
                type="text"
                className="input w-[300px]"
                placeholder="Enter Photo URL"
              />
              <label className="label">Email</label>
              <input
                type="email"
                className="input w-[300px]"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                className="input w-[300px]"
                placeholder="Password"
              />

              <button className="btn btn-neutral mt-4 w-[100px]">
                Sign Up
              </button>
            </fieldset>
            <div className="divider">OR</div>
            <div className="card btn bg-base-300 rounded-box w-20 h-10 ml-24">
              <Link>
                <FcGoogle size={25} />
              </Link>
            </div>
            <div className="mt-3">
              <h1 className="text-base font-medium">
                Already Have an Account{" "}
                <Link to={"/login"}>
                  <span className="text-purple-600">Login</span>
                </Link>
              </h1>
            </div>
          </div>
          <div className="p-3 bg-white rounded-2xl md:h-[580px] md:w-[520px]">
            <Lottie animationData={animation} loop={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
