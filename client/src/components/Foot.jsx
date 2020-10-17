import React from 'react';
import yer from '../Images/Yer.jpg';

const Foot = () => {
    return (
        <div className='flex-1 flex flex-col bg-blue-600 w-full items-center'>
            <div className='flex flex-col sm:flex-row w-full text-center items-center justify-between'>
                <div className='flex-1 flex flex-col'>
                    Contact Us
                    <form className='flex-1 flex flex-row items-center'>
                        <div className='flex-1 flex flex-col'>
                            <label className='flex-1 px-2'>
                                <span className='text-sm'> Full Name</span>
                                <input placeholder='Full Name'></input>
                            </label>
                            <label className='flex-1 px-2'>
                                <span className='text-sm'>Email</span>
                                <input className = 'w-36' placeholder='example@gmail.com'></input>
                            </label>
                            <div className='flex-1 py-4 px-2'>
                                <input type='submit' className='bg-black text-white text-base px-4 rounded border-2 border-black hover:bg-gray-600' value='Submit'/>
                            </div>
                        </div>
                        <div className='flex-1 items-center'>
                            <textarea className='form-textarea h-full pb-8' rows='3' placeholder='Enter your question here...'></textarea>
                        </div>
                    </form>
                </div>
                <div className='flex-1 flex flex-col w-full py-2 items-center'>
                    <img src={yer} alt="logo" className='rounded-full h-16 w-16 border-2 border-black'/>
                    <div className='flex-1 flex flex-row text-xs text-left'>
                        <div className='flex-1'>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                            </svg>
                        </div>
                        <span className='py-1'>
                            (717)387-0539
                        </span>
                    </div>
                    <div className='flex-1 flex flex-row text-xs text-left'>
                        <div className='flex-1'>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                            </svg>
                        </div>
                        <span className='flex-1'>
                            GroupFindPSU@gmail.com
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Foot;

