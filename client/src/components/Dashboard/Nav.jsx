import React, { useState } from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";

const Nav = () => {
    const [open, setOpen] = useState(false);
    const [hidden, setHidden] = useState("hidden");
    const history = useHistory();
    const handleOpen = () => {
        if (open) {
            setOpen(false);
            setHidden("hidden");
        } else {
            setOpen(true);
            setHidden("");
        }
    };

    const handleLogout = () => {
        axios.get("https://psugroupfind.herokuapp.com/auth/logout").then(() => {
            history.push("/");
        });
    }
    return (
        <>
            <nav className="bg-white shadow" role="navigation">
                <div className="container mx-auto w-full p-4 flex flex-wrap items-center md:flex-no-wrap">
                    <div className="mr-4 md:mr-8">
                        <a href="/dashboard" rel="dashboard">
                            <h1 className="uppercase text-dark-gray font-bold">
                                Groupfind
                            </h1>
                        </a>
                    </div>
                    <div className="ml-auto  md:hidden">
                        <button
                            className="flex items-center px-3 py-2 border rounded"
                            type="button"
                            onClick={() => handleOpen()}
                        >
                            <svg
                                className="h-3 w-3"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <title>Menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                            </svg>
                        </button>
                    </div>
                    <div
                        className={`${hidden} w-full md:w-auto md:flex-grow md:flex md:items-center md:justify-between`}
                    >
                        <ul className="flex flex-col mt-4 -mx-4 pt-4 border-t md:flex-row md:items-center md:mx-0 md:mt-0 md:pt-0 md:mr-4 lg:mr-8 md:border-0">
                            <li>
                                <a
                                    className="block px-4 py-1 md:p-2 lg:px-4"
                                    href="/dashboard"
                                >
                                    Dashboard
                                </a>
                            </li>
                            {/* <li>
                                <a
                                    className="block px-4 py-1 md:p-2 lg:px-4"
                                    href="/profile"
                                >
                                    Profile
                                </a>
                            </li>
                            <li>
                                <a
                                    className="block px-4 py-1 md:p-2 lg:px-4"
                                    href="/groups"
                                >
                                    My Groups
                                </a>
                            </li> */}
                        </ul>
                        {/* <button onClick={() => handleLogout()} className="px-4 py-1 font-semibold rounded bg-black text-white">
                            Log Out
                        </button> */}
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Nav;
