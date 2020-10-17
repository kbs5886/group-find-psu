import React from "react";
import SVG from '../../static/images/main.svg'
const Slide = () => {
    return (
        <>
            {/* <slideshow class='flex-grow-0 w-full bg-gray-400 h-72'>
            <img src={Test} class='w-full h-72'></img>
        </slideshow> */}
            <div class="flex flex-wrap mx-24 my-12 mb-40 mt-24">
                <div class="w-full overflow-hidden md:w-1/2 flex flex-col justify-center">
                    <div class="text-center md:text-left">
                        <h1 class="text-3xl text-center md:text-5xl md:text-left md:w-2/3 leading-tight">Find groups easily.</h1>
                        <p class="text-lg text-center md:text-left text-gray-600 md:w-2/3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at hendrerit enim. Vivamus lobortis magna odio, vel auctor magna vulputate at.</p>
                        <button class="mt-3 px-4 py-1 text-white rounded-lg bg-blue-600 uppercase hover:px-6 hover:py-2">
                            Sign Up
                        </button>
                    </div>

                        
                </div>
                <div class="w-full md:mt-0 mt-8 overflow-hidden md:w-1/2 flex h-auto justify-center items-center">
                    <img class="" src={SVG} alt="main"></img>
                </div>
            </div>
        </>
    );
};

export default Slide;
