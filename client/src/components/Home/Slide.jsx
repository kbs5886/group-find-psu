import React from "react";
import SVG from '../../static/images/main.svg'
const Slide = () => {
    return (
        <div className="flex flex-row px-8 py-20 sm:py-24">
            <div className="w-full overflow-hidden md:w-1/2 flex flex-col justify-between">
                <div className="flex-1 text-center md:text-left">
                    <h1 className="text-3xl md:text-5xl w-full md:w-2/3 leading-tight">Find groups easily.</h1>
                    <p className="text-gray-600 w-full md:text-xl md:w-2/3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at hendrerit enim. Vivamus lobortis magna odio, vel auctor magna vulputate at.</p>
                    <button className="mt-3 px-4 py-1 text-white rounded-lg bg-blue-600 uppercase hover:px-6 hover:py-2">
                        Sign Up
                    </button>
                </div>         
            </div>
            <div className="flex w-full md:mt-0 overflow-hidden md:w-1/2 items-center">
                <img src={SVG} alt="main"/>
            </div>
        </div>
    );
};

export default Slide;
