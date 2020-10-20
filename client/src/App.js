import React from "react";
import "./index.css";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";

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

                <Route path="/dashboard">
                    <Dashboard />
                </Route>
            </Switch>
        </>
    );
}

export default App;
