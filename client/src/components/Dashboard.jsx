import React from "react";
import Table from "./Dashboard/Table";
import Nav from "./Dashboard/Nav";
import CreateGroup from "./Dashboard/CreateGroup";

const Dashboard = () => {
    const [showModal, setShowModal] = React.useState(true);

    return (
        <div className="bg-gray-200">
            <Nav />
            <CreateGroup showModal={showModal} setShowModal={setShowModal}  />
            <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between mx-4 mt-8 md:mx-24">
                <div className="flex">
                    <div className="h-12 w-12 rounded-full bg-gray-500">
                        <img
                            className="h-12 w-12 rounded-full"
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                            alt=""
                        />
                    </div>
                    <div className="ml-2">
                        <h1 className="text-xl">John Doe</h1>
                        <p className="font-light uppercase text-xs text-dark-gray">
                            Student
                        </p>
                    </div>
                </div>
                <div className="mt-3">
                    <div className="relative rounded-r md:w-108 w-84 mr-1 md:mr-0">
                        <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                            <svg
                                viewBox="0 0 24 24"
                                className="h-4 w-4 fill-current text-gray-500"
                            >
                                <path d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"></path>
                            </svg>
                        </span>
                        <input
                            placeholder="Search"
                            className="rounded border w-full border-gray-400 border-b block pl-8 pr-6 py-2 bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
                        />
                    </div>{" "}
                </div>
                <div className="mt-4 md:ml-2 flex flex-col">
                    <button className="uppercase md:hidden mb-2 bg-gray-500 px-5 text-black text-sm py-1">
                        Search
                    </button>
                    <button onClick={() => setShowModal(true)} className="uppercase bg-black px-5 text-white text-sm py-1">
                        Create group
                    </button>
                </div>
            </div>
            <Table />
        </div>
    );
};

export default Dashboard;
