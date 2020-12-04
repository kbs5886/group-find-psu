import React, { useState } from "react";
import axios from "axios";

const CreateGroup = (props) => {
    let showModal = props.showModal;
    let setShowModal = props.setShowModal;

    const [name, setGroupName] = useState("");
    const [tags, setTag] = useState("");
    const [category, setCategory] = useState("");
    const [requirements, setRequirements] = useState("");
    const [contact, setContact] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post(
            "/group/create",
            { name, tags, category, requirements, contact },
            {
                headers: {
                    "content-type": "application/json",
                },
            }
        );
        props.setShowModal(false);
    };

    return (
        <>
            {/* <button
                className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                type="button"
                style={{ transition: "all .15s ease" }}
                onClick={() => setShowModal(true)}
            >
                Open regular modal
            </button> */}
            {showModal ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <form onSubmit={(e) => handleSubmit(e)}>
                                    {/*header*/}
                                    <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                                        <h3 className="text-3xl font-semibold">
                                            Create Group
                                        </h3>
                                        <button
                                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                            onClick={() => setShowModal(false)}
                                        >
                                            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                                ×
                                            </span>
                                        </button>
                                    </div>
                                    {/*body*/}
                                    <div className="relative p-6 flex-auto mx-12">
                                        <div class="mb-3 pt-0">
                                            <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                                                Enter group name
                                            </p>
                                            <input
                                                onChange={(e) =>
                                                    setGroupName(e.target.value)
                                                }
                                                required
                                                type="text"
                                                placeholder="Ex. Tennis Club"
                                                class="px-2 py-1 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"
                                            />
                                        </div>
                                        <div class="mb-3 pt-0">
                                            <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                                                Enter a tag
                                            </p>
                                            <input
                                                onChange={(e) =>
                                                    setTag(e.target.value)
                                                }
                                                required
                                                type="text"
                                                placeholder="Ex. Music"
                                                class="px-2 py-1 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"
                                            />
                                        </div>
                                        <div class="mb-3 pt-0">
                                            <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                                                Enter a category.
                                            </p>
                                            <input
                                                onChange={(e) =>
                                                    setCategory(e.target.value)
                                                }
                                                required
                                                type="text"
                                                placeholder="Ex. Outdoors"
                                                class="px-2 py-1 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"
                                            />
                                        </div>
                                        <div class="mb-3 pt-0">
                                            <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                                                Enter any requirements. If none,
                                                enter "N/A"
                                            </p>
                                            <input
                                                onChange={(e) =>
                                                    setRequirements(
                                                        e.target.value
                                                    )
                                                }
                                                required
                                                type="text"
                                                placeholder="Ex. JavaScipt/Python"
                                                class="px-2 py-1 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"
                                            />
                                        </div>
                                        <div class="mb-3 pt-0">
                                            <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                                                Enter contact information.
                                            </p>
                                            <input
                                                onChange={(e) =>
                                                    setContact(e.target.value)
                                                }
                                                required
                                                type="text"
                                                placeholder="Ex. email@example.com, +1 999 444 5555"
                                                class="px-2 py-1 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                                        <button
                                        
                                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                                            type="button"
                                            style={{
                                                transition: "all .15s ease",
                                            }}
                                            onClick={() => setShowModal(false)}
                                        >
                                            Close
                                        </button>
                                        <button
                                            className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                            type="submit"
                                            style={{
                                                transition: "all .15s ease",
                                            }}
                                            // onClick={() => handleSubmit(false)}
                                        >
                                            Save Changes
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
};

export default CreateGroup;
