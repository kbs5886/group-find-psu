import React, { useState } from "react";
import axios from "axios";
import signupIllus from "../Images/signup_illus.svg";

const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post(
                "/auth/register",
                { name, email, password },
                {
                    headers: {
                        "content-type": "application/json",
                    },
                }
            )
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err.response);
            });
    };
    return (
        <section class="md:grid md:grid-cols-2 h-screen">
            <div className="md:hidden w-screen bg-blue-600 h-24"></div>
            <div className="flex flex-col mx-8 h-screen mt-4 md:mx-0 md:mt-0 md:bg-white">
                <div className="flex justify-between md:mx-4 md:mt-4">
                    <h2>GROUPFIND</h2>
                    <a href="/login">
                        <button className="text-blue-600 border border-gray-400 px-4">
                            Log In
                        </button>
                    </a>
                </div>
                <div className="flex flex-col mt-20 md:mt-32 h-108 items-center justify-center">
                    <div>
                        <h1 className="text-4xl font-bold">
                            Create an account
                        </h1>
                    </div>
                    <div className="flex">
                        <h1 className="text-gray-400 text-sm uppercase font-light">
                            Get started for free
                        </h1>
                    </div>
                    <div className="flex flex-col mt-4">
                        <form
                            onSubmit={(e) => handleSubmit(e)}
                            className="flex flex-col mt-4"
                        >
                            <input
                                className="w-64 h-8 border border-gray-400 pl-4 mb-3 rounded placeholder-gray-400 text-sm"
                                type="text"
                                placeholder="Name"
                                required
                                onChange={(e) => setName(e.target.value)}
                            ></input>
                            <input
                                name="email"
                                className="w-64 h-8 border border-gray-400 pl-4 mb-3 rounded placeholder-gray-400 text-sm"
                                type="email"
                                placeholder="Email"
                                required
                                onChange={(e) => setEmail(e.target.value)}
                            ></input>
                            <input
                                className="w-64 h-8 border border-gray-400 pl-4 mb-3 rounded placeholder-gray-400 text-sm"
                                type="password"
                                placeholder="Password"
                                required
                                minLength="6"
                                onChange={(e) => setPassword(e.target.value)}
                            ></input>
                            <button className="bg-blue-600 py-1 text-white rounded">
                                Sign Up
                            </button>
                            <p className="text-sm mt-2 ">
                                Already have an account?
                                <a
                                    className="text-blue-600 hover:underline"
                                    href="/login"
                                >
                                    Log in here
                                </a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
            <div className="hidden md:flex md:flex-col md:items-center md:justify-center w-screen md:w-full bg-blue-600 h-24 md:h-screen">
                <img className="hidden md:flex" src={signupIllus} alt="" />
                <h1 className="hidden md:block mt-2 text-white text-2xl">
                    Don't worry we keep your info safe.
                </h1>
            </div>
        </section>
    );
};

export default SignUp;
