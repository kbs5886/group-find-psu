import React from "react";
import Nav from "./Nav";
import Slide from './Home/Slide';
import Main from './Home/Main';
import Foot from './Foot';

const Home = () => {
    return (
        <>
            <Nav />
            <Slide />
            <Main />
            <Foot />
        </>
    );
};

export default Home;
