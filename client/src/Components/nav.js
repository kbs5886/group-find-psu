import React, {useState} from 'react';
import yer from '../Images/Yer.jpg';

function NavElement(props){
    
    return(
        <li>
            <a href={props.page} className='lg:p-4 py-3 px-0 block border b-2 border-transparent hover:text-black'>
                {props.pageName}
            </a>
        </li>
    );
}

function Nav(){
    return(
    <nav>
        <ul className='lg:flex items-center justify-between underline text-base text-white pt-4 lg:pt-0'>
            <NavElement page='/groups' pageName='Groups'/>
            <NavElement page='/projects' pageName='Projects'/>
            <NavElement page='/aboutus' pageName='About Us'/>
            <NavElement page='/signup' pageName='Sign Up'/>
            <NavElement page='/login' pageName='Log In'/>
            <a href='/' className='lg:ml-4 flex items-center justify-start lg:mb-0 mb-4 cursor pointer'>
                    <img src={yer} className='rounded-full w-10 h-10 border-2 border-transparent hover:border-indigo-400'></img>
            </a>
        </ul>
    </nav>
    );
}
export default Nav