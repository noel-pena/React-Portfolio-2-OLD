import React from "react";
import Footer from './footer';
import Header from './header';
import Body from './body';
import { Route, Router, Routes } from "react-router-dom";
import { Switch } from "@mui/material";

function App(){

    return(
        <Router>

            {/* <Header /> */}
            <Routes>
            <Route exact path="/" element={<Body />}/>
            </Routes>
            {/* <Footer /> */}
        </Router>   
    )
}

export default App