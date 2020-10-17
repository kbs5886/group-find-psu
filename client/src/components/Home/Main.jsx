import React from 'react'

const Main = () => {
    return (
          <div className='flex flex-row h-64 bg-white'>
            <div className='flex-1 h-full text-center text-xl'>
            Why Use Group Find?
                <div className='flex flex-row'>
                    <div className='flex-1 flex flex-col items-center'>
                        <div className='flex h-16 text-base'>What Can Group Find Do For You?</div>
                        <div className='flex px-4 h-full text-xs max-w-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam eveniet aspernatur nihil quam expedita, ad illum libero impedit voluptatum doloremque, cupiditate neque doloribus nobis harum rem. Accusamus minima nesciunt rem?</div>
                    </div>
                    <div className='hidden md:flex md:flex-col md:flex-1 w-full items-center'>
                        <div className='flex px-4 h-12 text-base'>How Can You Get Started?</div>
                        <div className='flex px-8 h-full text-xs text-center w-full'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione debitis possimus minus temporibus quasi tempora beatae corporis facere, fugit at asperiores, delectus officia magnam quibusdam provident! Autem ut voluptate voluptatem!</div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col w-64 h-full text-center text-xl items-center'>
            About Us
                <div className='flex flex-row justify-between px-4 pb-2'>
                    <div className='rounded-full w-12 h-12 border-2 border-black'>
                    </div>
                    <div className='flex-1 w-full flex flex-col '>
                        <div className='text-base text-left h-6 px-2'>
                            Persona #1
                        </div>
                        <div className='flex-1 text-xs text-left h-full px-2 w-full '>
                            Lorem ipsum dolor
                        </div>
                    </div>
                </div>
                <div className='pb-2 flex flex-row justify-between px-4 '>
                    <div className='rounded-full w-12 h-12 border-2 border-black'>
                    </div>
                    <div className='flex-1 w-full flex flex-col '>
                        <div className='text-base text-left h-6 px-2'>
                            Persona #2
                        </div>
                        <div className='flex-1 text-xs text-left h-full px-2 w-full '>
                            Lorem ipsum dolor
                        </div>
                    </div>
                </div>
                <div className='pb-2 flex flex-row justify-between px-4'>
                    <div className='rounded-full w-12 h-12 border-2 border-black'>
                    </div>
                    <div className='flex-1 w-full flex flex-col '>
                        <div className='text-base text-left h-6 px-2'>
                            Persona #3
                        </div>
                        <div className='flex-1 text-xs text-left h-full px-2 w-full '>
                            Lorem ipsum dolor
                        </div>
                    </div>
                </div>
                <div className='pb-2 flex flex-row justify-between px-4'>
                    <div className='rounded-full w-12 h-12 border-2 border-black'>
                    </div>
                    <div className='flex-1 w-full flex flex-col '>
                        <div className='text-base text-left h-6 px-2'>
                            Persona #4
                        </div>
                        <div className='flex-1 text-xs text-left h-full px-2 w-full '>
                            Lorem ipsum dolor
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    );
}

export default Main
