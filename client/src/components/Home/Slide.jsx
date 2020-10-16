import React from 'react'
import Test from '../../static/images/test.jpg'
const Slide = () => {
    return (
        <>
            <slideshow class='flex-grow-0 w-full bg-gray-400 h-72'>
            <img src={Test} class='w-full h-72'></img>
        </slideshow>
        </>
    )
}

export default Slide
