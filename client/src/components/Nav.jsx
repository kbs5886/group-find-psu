import React from "react";

const Nav = () => {
    return (
        <header class="bg-blue-600 px-6 lg:px-16 flex flex-wrap items-center lg:py-0 py-2">
            <div class="flex-1 flex justify-items-auto items-center">
                <a href="index.html">
                    <img
                        src="Images/uh-oh.png"
                        class="rounded-full w-32 h-36 cursor-pointer"
                    ></img>
                </a>
                <a href="index.html" s="text-center text-white w-20 ">
                    {" "}
                    Group Find PSU
                </a>
            </div>
            <label for="menu-toggle" class="cursor-pointer lg:hidden block">
                <img
                    class="w-10 h-10 border-2 border-transparent"
                    src="Images/Hamburger.png"
                ></img>
            </label>
            <input type="checkbox" class="hidden" id="menu-toggle"></input>
            <div
                class="hidden lg:flex lg:items-center lg:w-auto w-full"
                id="menu"
            >
                <nav>
                    <ul class="lg:flex items-center justify-between underline text-base text-white pt-4 lg:pt-0">
                        <li>
                            <a
                                href="groups.html"
                                class="lg:p-4 py-3 px-0 block border b-2 border-transparent hover:text-black"
                            >
                                Groups
                            </a>
                        </li>
                        <li>
                            <a
                                href="projects.html"
                                class="lg:p-4 py-3 px-0 block border b-2 border-transparent hover:text-black"
                            >
                                Projects
                            </a>
                        </li>
                        <li>
                            <a
                                href="aboutus.html"
                                class="lg:p-4 py-3 px-0 block border b-2 border-transparent hover:text-black"
                            >
                                About Us
                            </a>
                        </li>
                        <li>
                            <a
                                href="signup.html"
                                class="lg:p-4 py-3 px-0 block border b-2 border-transparent hover:text-black"
                            >
                                Sign Up
                            </a>
                        </li>
                        <li>
                            <a
                                href="login.html"
                                class="lg:p-4 py-3 px-0 block border b-2 border-transparent hover:text-black"
                            >
                                Log In
                            </a>
                        </li>
                    </ul>
                </nav>
                <a
                    href="#"
                    class="lg:ml-4 flex items-center justify-start lg:mb-0 mb-4 cursor pointer"
                >
                    <img
                        src="Images/Yer.jpg"
                        class="rounded-full w-10 h-10 border-2 border-transparent hover:border-indigo-400"
                    ></img>
                </a>
            </div>
        </header>
    );
};

export default Nav;
