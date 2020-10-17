import React from 'react';
import Uhoh from '../Images/uh-oh.png'
import Nav from './Nav'


function Header(){

    return(
        <header className='bg-blue-600 px-6 lg:px-16 flex flex-wrap items-center lg:py-0 py-2'>
            <div className='flex-1 flex justify-items-auto items-center'>
                <a href="/">
                    <img src={Uhoh} className='rounded-full w-32 h-36 cursor-pointer' alt='logo'></img>
                </a>
                <a href='index.html' className='text-center text-white w-20 '> Group Find PSU</a>
            </div>
            <Nav/>
        </header>
    );
}
export default Header