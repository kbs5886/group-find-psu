import React from "react";
import Header from "./Header";
import Main from './Home/Main';
import Foot from './Foot';

const Home = () => {
    return (
        <div className='contents'>
                <Header className='mb-40'/>
            <div className='flex flex-col w-full h-full font-titillium items-center text-center'>
                <Main />
                <Foot />
            </div>
        </div>
    );
};

export default Home;
