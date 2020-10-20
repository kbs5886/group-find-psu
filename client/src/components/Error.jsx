import React from "react";

const Error = ({ message }) => {
    return (
        <div className='contents'>
            <div className="flex absolute w-full justify-center">
                <div class="alert-content ml-4 bg-red-200 p-5 rounded border-b-2 border-red-300">
                    <div className="flex">
                        <svg
                            class="w-6 h-6 mt-1 text-red-400 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            ></path>
                        </svg>
                        <div class="alert-title font-semibold text-lg text-red-800">
                            Error
                        </div>
                    </div>

                    <div class="alert-description text-sm text-red-600">
                        {message}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Error;
