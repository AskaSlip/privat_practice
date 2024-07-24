import React from 'react';
import {Outlet} from "react-router-dom";
import MainComponent from "../components/MainComponent/MainComponent";

const MainLayout = () => {
    return (
        <div>
            <MainComponent/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;