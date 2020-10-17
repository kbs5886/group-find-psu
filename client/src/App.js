<<<<<<< HEAD
import React from 'react';
import './index.css';
import Header from './Components/Header';
import EyeCatcher from './Components/EyeCatcher';

function App() {
  return (
    <div>
        <Header/>
        <EyeCatcher/>
    </div>  
  );
=======
import React from "react";
import "./index.css";
import { Switch, Route } from "react-router-dom";
// import Header from './Components/Header';
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
    return (
        <>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/register">
                    <SignUp />
                </Route>
            </Switch>
        </>
    );
>>>>>>> 7a482f361f4ba2eea5ee79cf1738362bdb5fdabe
}

export default App;
