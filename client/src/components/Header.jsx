import React from 'react';
import Nav from './Nav'


function Header(){

    return(
        <header className='px-4 lg:px-32 flex flex-row flex-wrap items-center justify-between py-2 mb-20'>
            <a href='/' className='text-center text-xl uppercase text-dark-gray font-bold'>GroupFind</a>
            <Nav/>
            <div clasName='hidden md:flex-1 md:flex border-2 border-black'>
            <a href='/login' className='hidden md:block'>
                <button className='hidden md:block rounded-3xl px-8 py-1 bg-blue-600 text-white hover:bg-blue-400 hover:text-black'>
                    Log In
                </button>
            </a>
        </div>
        </header>
    );
}
export default Header