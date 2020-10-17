import React, {useState} from 'react';
import yer from '../Images/Yer.jpg'

function EyeCatcher(){
    const [picture, setPicture] = useState(0);

    return(
        <div className='flex flex-row'>
            <div className='flex-1 flex flex-col text-center w-64'>
                <span className='text-2xl text-white h-16'>
                    Why should you try Group Find PSU?
                </span>
                <span className='text-white'>
                    Lorem
                </span>
            </div>
            <div className='flex items-center overflow-auto h-108'>
                <svg className="w-12 h-12 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
                <img src={yer} alt='yer' className='object-contain w-full'/>
            </div>
        </div>

    );
}
export default EyeCatcher