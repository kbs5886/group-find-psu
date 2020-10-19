import React from 'react';
import Nav from './Nav'


function Header(){

    return(
        <header className='px-4 lg:px-16 flex flex-row flex-wrap items-center justify-between lg:py-0 py-2'>
            <a href='index.html' className='text-center text-gray-500 text-xl'>Group Find</a>
            <Nav className='flex-1'/>
        </header>
    );
}
export default Header