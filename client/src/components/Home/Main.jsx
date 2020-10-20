import React, {useState} from 'react';
import {useTransition, animated} from 'react-spring';



const Main = () => {

    const [buttonArrow, setButtonArrow] = useState(false);

    const transitions = useTransition(buttonArrow, null, {
        from: {transform: 'scale(0) translateX(-25%)', opacity: 0},
        enter: {transform: 'scale(1) translateX(0%)', opacity: 1},
        leave: {transform: 'scale(0) translateX(-25%)', opacity: 0,},
        unique: true,
        })

    const arrow =(
        <svg 
        className='flex-1 h-6 w-6' 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24" 
        xmlns="http://www.w3.org/2000/svg">
            <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M17 8l4 4m0 0l-4 4m4-4H3"/>
        </svg>)

    return (
        <div className='contents'>
            <span className='block text-6xl font-bold py-4'>
                Finding Groups <br/>Made Easy
            </span>
            <span className='block max-w-2xl text-1xl'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae aliquam fuga tenetur dolores dolor quaerat magnam quae blanditiis, assumenda maiores in itaque, totam consectetur. Ipsam aperiam mollitia beatae ipsum dolorem.
            </span>
            <div className='flex flex-row w-full h-36 items-center justify-center py-4'>
                <a href="/register" className='px-4 ' onMouseEnter={() => setButtonArrow(true)} onMouseLeave={() => setButtonArrow(false)}>
                    <button className='flex flex-row bg-blue-600 text-white rounded-3xl px-4 h-10 items-center hover:bg-blue-400 hover:text-gray-800 box-border'>
                        <span className='px-4'>Get Started</span> 
                        { transitions.map(({item, key, props}) => 
                            item&& 
                            <animated.div 
                                key={key} 
                                style={props}
                            >
                                {arrow}
                            </animated.div>
                            )
                        }
                    </button>
                </a>
                <a href="/aboutus">
                    <button className='bg-light-gray font-semibold text-black rounded-3xl px-8 h-10 hover:bg-blue-400 hover:text-gray-800'>
                        About Us
                    </button>
                </a>
            </div>
        </div>
        
    );
}

export default Main

