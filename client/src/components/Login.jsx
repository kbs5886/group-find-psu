import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import loginSVG from "../Images/login_illus.svg";
import Error from "./Error";

const Login = () => {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isError, setIsError] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        axios.get("/auth/status").then(() => {
            console.log("Already logged in...redirecting...");
            history.push("/");
        });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post(
                "/auth/login",
                { email, password },
                {
                    headers: {
                        "content-type": "application/json",
                    },
                }
            )
            .then((res) => {
                history.push("/");
            })
            .catch((err) => {
                setError(err.response.data.err);
                setIsError(true);
            });
    };
    return (
        <>
            {isError && <Error message={error} />}
            <section className="md:grid md:grid-cols-2 h-screen">
                <div className="md:flex md:flex-col md:items-center md:justify-center w-screen md:w-full bg-blue-600 h-24 md:h-screen">
                    <img className="hidden md:flex" src={loginSVG} alt="" />
                    <h1 className="hidden md:block mt-2 text-white text-2xl">
                        Don't worry we keep your info safe.
                    </h1>
                </div>
                <div className="flex flex-col mx-8 h-screen mt-4 md:mx-0 md:mt-0 md:bg-white">
                    <div className="flex justify-between md:mx-4 md:mt-4">
                        <h2>GROUPFIND</h2>
                        <a href="/register">
                            <button className="text-blue-600 border border-gray-400 px-4">
                                Sign Up
                            </button>
                        </a>
                    </div>
                    <div className="flex flex-col mt-20 md:mt-32 h-108 items-center justify-center">
                        <div>
                            <h1 className="text-4xl font-bold">
                                Welcome back!
                            </h1>
                        </div>
                        <div className="flex">
                            <h1 className="text-gray-400 text-sm uppercase font-light">
                                Pick up where you left off
                            </h1>
                        </div>
                        <div className="flex flex-col mt-4">
                            <form
                                onSubmit={(e) => handleSubmit(e)}
                                className="flex flex-col mt-4"
                            >
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
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                ></input>
                                <button className="bg-blue-600 py-1 text-white rounded">
                                    Log In
                                </button>
                                <p className="text-sm mt-2 ">
                                    Don't have an account? {""}
                                    <a
                                        className="text-blue-600 hover:underline"
                                        href="/register"
                                    >
                                        Sign up here
                                    </a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;
