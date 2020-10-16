import React from 'react'

const Foot = () => {
    return (
        <>
            <div className='flex-1 h-48 bg-blue-600 w-full flex-col'>
            <div className='flex flex-row h-48 w-full text-center'>
                <div className='flex-grow flex flex-col'>
                    Contact Us
                    <div className='flex-1 flex flex-row items-center'>
                        <div className='flex-1 flex flex-col'>
                            <div className='flex-1 py-2 px-2'>
                                <input></input>
                            </div>
                            <div className='flex-1 py-2 px-2'>
                                <input></input>
                            </div>
                            <div className='flex-1 py-2 px-2'>
                                <button className='bg-black text-white text-base px-4 rounded border-2 border-black hover:bg-gray-600'>
                                    submit
                                </button>
                            </div>
                        </div>
                        <div className='flex-1 items-center'>
                            <input className='pb-20 h-full'></input>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col w-64 items-center py-2'>
                    <div>
                        <img src='Images/Yer.jpg' alt="yer" className='rounded-full h-16 w-16 border-2 border-black'></img>
                    </div>
                    <div className='flex-1 flex flex-row text-xs text-left'>
                        <div className='flex rounded-full h-2 w-2'>
                            img
                        </div>
                        <div className='flex-1'>
                            (717) 387-0539
                        </div>
                    </div>
                    <div className='flex-1 flex flex-row text-xs text-left'>
                        <div className='flex-1 rounded-full h-4 w-4'>
                            img
                        </div>
                        <div className='flex-1'>
                            GroupFindPSU@gmail.com
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Foot;
