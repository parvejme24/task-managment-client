import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import google from "../../assets/google.png";
import github from "../../assets/github.png";

const Login = () => {
  const [show, setShow] = useState(true);
  return (
    <div className="container mx-auto min-h-screen flex justify-center items-center">
      <Helmet>
        <title>HomeFixi | Login</title>
      </Helmet>

      <div className="grid grid-cols-1 md:grid-cols-2 gap- items-center">
        <div className="hidden md:flex">
          <img
            className="max-w-[400px] w-[400px] -mr-4"
            // src={loginPage}
            alt=""
          />
        </div>

        <div className="max-w-[400px] w-[400px] m-4 border p-10 border-blue-100 shadow-md">
          <form className="space-y-3">
            <div>
              <h2 className="text-4xl text-center font-bold mb-5 text-blue-500">
                Sign In
              </h2>
            </div>

            <div className="form-control shadow-md">
              <div className="flex items-center border border-blue-300">
                <span className="bg-blue-400 p-3 text-xl">
                  <FaEnvelope />
                </span>
                <input
                  className="p-2 w-full"
                  type="text"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
            </div>

            <div className="form-control shadow-md">
              <div className="flex items-center border border-blue-300 relative">
                <span className="bg-blue-400 p-3 text-xl">
                  <FaLock />
                </span>
                <input
                  className="p-2 w-full"
                  type={show ? "password" : "text"}
                  name="password"
                  placeholder="*******"
                  required
                />
                <p
                  onClick={() => setShow(!show)}
                  className="cursor-pointer absolute right-3"
                >
                  <small>{show ? "Show" : "Hide"}</small>
                </p>
              </div>
            </div>

            <input
              type="submit"
              value="Sign In"
              className="shadow-md py-2 rounded-none w-full bg-blue-400 hover:bg-blue-600 hover:text-white text-xl capitalize"
            />
          </form>

          <div>
            <div className="flex gap-4 justify-center py-4">
              <button>
                <img className="w-8" src={google} alt="" />
              </button>
              <button>
                <img className="w-8" src={github} alt="" />
              </button>
            </div>

            <p className="text-center">
              <small>
                New to this website?{" "}
                <Link
                  to="/register"
                  className="text-blue-500 font-semibold hover:underline"
                >
                  Sign Up
                </Link>
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
