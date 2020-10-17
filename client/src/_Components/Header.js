import React, {useState} from 'react';
import yer from '../Images/Yer.jpg'
import Nav from './nav'


function Header(){

    return(
        <header className='bg-blue-600 px-6 lg:px-16 flex flex-wrap items-center lg:py-0 py-2'>
            <div className='flex-1 flex justify-items-auto items-center'>
                <a href="/">
                    <img src={yer} className='rounded-full w-32 h-36 cursor-pointer'></img>
                </a>
                <a href='index.html' className='text-center text-white w-20 '> Group Find PSU</a>
            </div>
            <Nav/>
        </header>
    );
}
export default Header