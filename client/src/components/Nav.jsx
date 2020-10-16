import React from "react";

const Nav = () => {
    return (
        <header className="bg-blue-600 px-12 lg:px-16 flex flex-wrap items-center lg:py-0 py-2">
            <div className="mx-10 flex-1 flex justify-items-auto items-center">
                <a href="index.html">
                    {/* <img
                        src="Images/uh-oh.png"
                        className="rounded-full w-32 h-36 cursor-pointer"
                    ></img> */}
                </a>
                <a href="index.html" className="text-center text-white uppercase">
                    Group Find PSU
                </a>
            </div>
            <label for="menu-toggle" className="cursor-pointer lg:hidden block">
                <img
                    className="w-10 h-10 border-2 border-transparent"
                    src="Images/Hamburger.png"
                    alt="ham"
                ></img>
            </label>
            <input type="checkbox" className="hidden" id="menu-toggle"></input>
            <div
                className="hidden lg:flex lg:items-center lg:w-auto w-full"
                id="menu"
            >
                <nav>
                    <ul className="lg:flex items-center justify-between text-base text-white pt-4 lg:pt-0">
                        <li>
                            <a
                                href="groups.html"
                                classNameName="lg:p-4 py-3 px-0 block border b-2 border-transparent hover:underline"
                            >
                                Groups
                            </a>
                        </li>
                        <li>
                            <a
                                href="projects.html"
                                className="lg:p-4 py-3 px-0 block border b-2 border-transparent hover:underline"
                            >
                                Projects
                            </a>
                        </li>
                        <li>
                            <a
                                href="aboutus.html"
                                className="lg:p-4 py-3 px-0 block border b-2 border-transparent hover:underline"
                            >
                                About Us
                            </a>
                        </li>
                        <li>
                            <a
                                href="signup.html"
                                className="lg:p-4 py-3 px-0 block border b-2 border-transparent hover:underline"
                            >
                                Sign Up
                            </a>
                        </li>
                        <li>
                            <a
                                href="login.html"
                                className="lg:p-4 py-3 px-0 block border b-2 border-transparent hover:underline"
                            >
                                Log In
                            </a>
                        </li>
                    </ul>
                </nav>
                <a
                    href="#"
                    className="lg:ml-4 flex items-center justify-start lg:mb-0 mb-4 cursor pointer"
                >
                    <img
                        src="Images/Yer.jpg"
                        className="rounded-full w-10 h-10 border-2 border-transparent hover:border-indigo-400"
                    ></img>
                </a>
            </div>
        </header>
    );
};

export default Nav;
