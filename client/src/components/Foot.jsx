import React from 'react';

const Register = (
    <svg
    className="w-8 md:w-12 h-12 md:h-12 rounded-full border-2 border-black" 
    fill="none" stroke="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg">
        <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="2" 
        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
    </svg>
);

const Search = (
    <svg 
    className="w-8 md:w-12 h-8 md:h-12 rounded-full border-2 border-black" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg">
        <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="2" 
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
    </svg>
);

const Like = (
    <svg 
    className="w-8 md:w-12 h-8 md:h-12 rounded-full border-2 border-black" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg">
        <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="2" 
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
    </svg>
);

const Users = (
    <svg 
    className="w-8 md:w-12 h-8 md:h-12 rounded-full border-2 border-black" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg">
        <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="2" 
        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
    </svg>
);

const StepsVert = (props) => {
    return(
        <div 
        className='flex flex-row justify-center'>
            <div 
            className='flex flex-col'>
                {props.icon}
                <svg 
                className='w-8 h-256' 
                fill='none' 
                stroke='currentColor'>
                    <path
                    strokeLinecap='round'
                    strokeLineJoin='round'
                    strokeWidth='2'
                    d='M16 0V256'/>
                </svg>
            </div>
            <div className='flex flex-col'>
                <svg 
                class="w-48 h-4" 
                fill="none" 
                stroke="currentColor" 
                xmlns="http://www.w3.org/2000/svg">
                    <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M0 16H48"/>
                </svg>
                <span className='px-2'>
                    {props.section}
                </span>
            </div>
        </div>
    )
}
const StepsHorizontal = (props) => {
    return(
        <div 
        className='flex flex-row justify-center text-left m-0'>
            <div 
            className='flex flex-col m-0'>
                <div>
                {props.icon}
                </div>
                <span>
                {props.section}
                </span>
            </div>
            <svg 
            className="h-5 m-0" 
            fill="none" 
            stroke="currentColor" 
            xmlns="http://www.w3.org/2000/svg">
                <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M0 16H300"/>
            </svg>
        </div>
    )
}

const Foot = () => {
    return (
        <div className='contents'>
            <div className='hidden md:flex md:flex-row m-40 justify-center'>
                <StepsHorizontal icon={Register} section='Register'/>
                <StepsHorizontal icon={Search} section='Search for Projects'/>
                <StepsHorizontal icon={Like} section='Save Interests'/>
                <div 
                className='flex flex-row justify-between'>
                    <div 
                    className='flex flex-col'>
                        {Users}
                        <span className='px-2'>
                        Find Groups
                        </span>
                    </div>
                </div>
            </div>
            <div className='md:hidden pt-20'>
                <StepsVert icon={Register} section='Register'/>
                <StepsVert icon={Search} section='Search for Projects'/>
                <StepsVert icon={Like} section='Save Interests'/>
                <div 
                className='flex flex-row justify-center'>
                    <div 
                    className='flex flex-col'>
                        {Users}
                    </div>
                    <div className='flex flex-col'>
                        <svg 
                        class="w-48 h-4" 
                        fill="none" 
                        stroke="currentColor" 
                        xmlns="http://www.w3.org/2000/svg">
                            <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="2" 
                            d="M0 16H48"/>
                        </svg>
                        <span className='px-2'>
                            Find Groups
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Foot;



