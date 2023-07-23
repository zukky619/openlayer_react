import * as React from 'react';
import {
    BrowserRouter,
    Switch,
    Routes,
    Route
  } from "react-router-dom";

import MyNavigator from './organisms/MyNavigator';
import Login from "./pages/Login";
import Home from "./pages/Home";

const Routers = () => {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={
                    <>
                        <MyNavigator>
                            <Home />
                        </MyNavigator>
                    </>
                } />
            </Routes>
        </BrowserRouter>
    )
}

export default Routers;