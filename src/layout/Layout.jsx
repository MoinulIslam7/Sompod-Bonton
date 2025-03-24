import React from "react";
import Navbar from '../components/Navbar/Navbar.jsx';
import Footer from '../components/Footer/Footer.jsx';
import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <div className='flex flex-col justify-between min-h-screen overflow-hidden'>
                <div className="bg-websiteBG font-comicSansMS">
                    <Navbar />
                    <Outlet />
                </div>
                <div className="mt-10">
                    <div className="flex justify-center items-center gap-4 my-6">
                        <NavLink to="https://bhumibd.com/" target="_blank" className="px-6 py-3 mt-6 bg-green-600 text-white rounded-md text-lg font-medium hover:bg-secondary">
                            ভূমি সেবা
                        </NavLink>
                        <NavLink to="https://ghorbd.com/" target="_blank" className="px-6 py-3 mt-6 bg-green-600 text-white rounded-md text-lg font-medium hover:bg-secondary">
                            ঘর তথ্য সেবা
                        </NavLink>
                    </div>
                </div>
                <Footer />
                {/* <Toaster /> */}
            </div>

        </>
    );
};

export default Layout;
