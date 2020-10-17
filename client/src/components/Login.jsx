import React, { useState } from "react";
import Nav from "./Nav";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const handleSubmit = () => {
        axios
            .post(
                "http://localhost:5000/auth/login",
                { email, password },
                {
                    headers: {
                        "content-type": "application/json",
                    },
                }
            )
            .then((res) => {
                console.log("sadasdas");
                console.log(res);
                history.push("/");
            })
            .catch((err) => console.log(err));
    };
    return (
        <>
            <Nav />
            <div className="bg-gray-200">
                <div className="flex h-screen justify-center flex-col items-center">
                    <div className="bg-white rounded-lg md:w-4/12 w-8/12 shadow-xl">
                        <div className="text-center py-4 px-8">
                            <h1 className="text-3xl pt-2 text-black opacity-50 xs:text-sm">
                                Login
                            </h1>
                        </div>
                        <div className="text-gray-700">
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
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                            </div>
                            <div className="flex mt-8 px-8">
                                <button
                                    onClick={() => handleSubmit()}
                                    className="bg-blue-600 rounded text-white w-full font-extrabold h-12"
                                >
                                    Log In
                                </button>
                            </div>
                            <div clas="flex mt-12 w-full">
                                <hr className="border-t border-black opacity-25 w-full p-0 h-1 mt-12" />
                            </div>
                            <div className="flex mt-1 w-full">
                                <div className="flex w-full px-8 pb-6 pt-4 text-center">
                                    <a href="#" className="w-full">
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div clas="flex mt-12">
                        <div className="flex px-8 pb-6 pt-4 flex-col justify-between">
                            <a href="#" className="text-blue-600">
                                Don't have an account yet?
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
