import React from "react";
import {Outlet} from "react-router-dom";
import Header from "./Sections/Header";
import Footer from "./Sections/Footer";

const HomeLayout = ({children, index}) => {
    return (
        <>
            {/* Page Preloder */}
            <div id="preloder">
                <div className="loader"></div>
            </div>
            {/* Header Section Begin */}
            <Header index={index}/>
            {/* Header Section End */}

            {/* Body Section */}
            {children}
            <Outlet/>
            {/* Body Section End*/}

            {/* Footer Section Begin */}
            <Footer/>
            {/* Footer Section End */}

        </>
    );
};

export default HomeLayout;
