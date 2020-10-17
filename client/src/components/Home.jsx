import React from "react";
import Header from "./Header";
import Slide from './Home/Slide';
import Main from './Home/Main';
import Foot from './Foot';
import { disconnect } from "mongoose";

const Home = () => {
    return (
        <>
            <Header/>
            <Slide />
            <Main />
            <Foot />
        </>
    );
};

export default Home;
