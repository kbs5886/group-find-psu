import React, {useState} from 'react';
import {useTransition, animated} from 'react-spring';

function NavElement(props){
    
    return(
        <a href={props.page} className='py-5 px-4 block sm:hover:text-blue-500 active:text-blue-500 border-black border-b'>
            {props.pageName}
        </a>
    );
}

function Nav(){
    const [menuToggle, setMenuToggle] = useState(false);

    const transitionMenu = useTransition(menuToggle, null, {
        from: {transform: 'translateX(-100%)', opacity: 0},
        enter: {transform: 'translateX(0%)', opacity: 1},
        leave: {transform: 'translateX(-100%)', opacity: 0,},
        unique: true,
        })
        
    
    const transitionMask = useTransition(menuToggle, null, {
        from: {transform: 'translateX(-100%)'},
        enter: {transform: 'translateX(0%)'},
        leave: {transform: 'translateX(-100%)'},
        unique: true,
        })    
    
    return(
    <nav>
        <svg className="lg:hidden w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" 
        onClick={() => setMenuToggle(!menuToggle)}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
            { transitionMenu.map(({item, key, props}) => 
                            item&& 
                            <animated.div 
                                key={key} 
                                style={props}
                                className='fixed top-0 left-0 bg-white h-full w-1/2 shadow-lg text-xl z-50'>
                                <NavElement page='/home' pageName='Home'/>
                                <NavElement page='/dashboard' pageName='Dashboard'/>
                                <NavElement page='/aboutus' pageName='About Us'/>
                            </animated.div>
                            )
                        }
            { transitionMask.map(({item, key, props}) => 
                            item&& 
                            <animated.div 
                                key={key} 
                                style={props}
                                className='fixed top-0 left-0 h-full w-full bg-gray-900 opacity-50'
                                onClick={()=> setMenuToggle(false)}/>
                            )
                        }
    </nav>
        
    );
}
export default Nav