import React from "react";
import Header from "./Header";
import Main from './Home/Main';
import Foot from './Foot';

const Home = () => {
    return (
        <div className='flex flex-col w-full h-full font-titillium'>
            <Header/>
            <Main />
            <Foot />
        </div>
    );
};

export default Home;
