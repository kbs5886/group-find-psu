import React from 'react';
import yer from '../../Images/Yer.jpg';

function Person({name, description, picture, picDesc}){
    return(
    <div className='flex flex-row items-center px-4 pb-2 w-48'>
        <div>
            <img src = {picture}  alt={picDesc} className='rounded-full w-12 h-12 border-2 border-black'/>
        </div>
        <div className='flex flex-col w-24'>
            <div className='text-base text-left h-6 px-2'>
                {name}
            </div>
            <div className='flex-1 text-xs text-left h-full px-2 w-full '>
                {description}
            </div>
        </div>
    </div>
    );
}

const Main = () => {
    return (
          <div className='flex flex-row bg-white justify-center'>
            <div className='flex-grow flex flex-col text-center text-xl justify-around'>
            Why Use Group Find?
                <div className='flex flex-row'>
                    <div className='flex-1 flex flex-col items-center'>
                        <span className='h-15 sm:h-8 text-base'>What Can Group Find Do For You?</span>
                        <span className='flex px-4 text-xs max-w-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam eveniet aspernatur nihil quam expedita, ad illum libero impedit voluptatum doloremque, cupiditate neque doloribus nobis harum rem. Accusamus minima nesciunt rem?</span>
                    </div>
                    <div className='hidden md:flex-1 md:flex md:flex-col items-center'>
                        <div className='flex h-15 sm:h-8 text-base'>How Can You Get Started?</div>
                        <div className='flex px-4 text-xs max-w-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione debitis possimus minus temporibus quasi tempora beatae corporis facere, fugit at asperiores, delectus officia magnam quibusdam provident! Autem ut voluptate voluptatem!</div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col w-64 text-center text-xl items-center justify-center'>
            About Us
                <Person name='Kartik S' description='the realest in the game rn'/>
                <Person name='Brock D' description='runner up' picture={yer} picDesc="He's alright I guess"/>
            </div>
        </div> 
    );
}

export default Main
