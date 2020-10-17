import axios from "axios";
import React, { useState } from "react";
import Nav from "./Nav";

const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () => {
        axios
            .post(
                "http://localhost:5000/auth/register",
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
                console.log(err);
            });
    };
    return (
        <div className="bg-gray-200">
            <Nav />
            <div className="flex h-screen justify-center flex-col items-center">
                <div className="bg-white rounded-lg md:w-4/12 w-8/12 shadow-xl pb-12">
                    <div className="text-center py-4 px-8">
                        <h1 className="text-3xl pt-2 text-black opacity-50 xs:text-sm">
                            Sign Up
                        </h1>
                    </div>
                    <div className="text-gray-700">
                        <div className="flex flex-col mt-1 px-8">
                            <label for="input1">Name</label>
                            <input
                                id="input1"
                                type="text"
                                className="bg-gray-200 pl-4 rounded h-12"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col mt-1 px-8">
                            <label for="input1">Email</label>
                            <input
                                id="input1"
                                type="text"
                                className="bg-gray-200 pl-4 rounded h-12"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col mt-2 px-8">
                            <label for="input2">Password</label>
                            <input
                                id="input2"
                                type="password"
                                className="bg-gray-200 pl-4 rounded h-12"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="flex mt-8 px-8">
                            <button
                                onClick={() => handleSubmit()}
                                className="bg-blue-600 rounded text-white w-full font-extrabold h-12"
                            >
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
                <div clas="flex mt-12">
                    <div className="flex px-8 pb-6 pt-4 flex-col justify-between">
                        <a href="/register" className="text-blue-600">
                            Already have an account?
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
