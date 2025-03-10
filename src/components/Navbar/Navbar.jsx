import React from "react";
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import HomeIcon from "../../assets/Icons/home.svg?react";
import BidhiIcon from "../../assets/Icons/bidhi.svg?react";
import AboutUs from "../../assets/Icons/aboutus.svg?react";
import PrivacyPolicy from "../../assets/Icons/privacypolicy.svg?react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("home");

  const toggleSidebar = () => { setIsSidebarOpen(!isSidebarOpen); };

  const handleTabClick = (tab) => { setActiveTab(tab); };

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isSidebarOpen]);

  return (
    <div id="home" className={`container w-full relative z-[999] ${isSidebarOpen ? "!bg-websiteBG/95" : ""}`}>
      <div className="py-[.9375rem] lg:!mx-5 2xl:!mx-0">
        <div className="container flex justify-between items-center">
          {/* Logo */}
          <NavLink to="/" className="z-10">
            <img src="/logo.png" alt="logo" className="w-72" />
          </NavLink>

          {/* <div className="text-center">
            <h1 className="text-lg md:text-4xl text-center font-bold text-primary">উত্তরাধিকার.org</h1>
            <p className="text-xs md:text-base">সহজেই উত্তরাধিকার হিসাব করুন।</p>
          </div> */}


          {/* Mobile Menu Toggle */}
          <button className="z-10 lg:hidden cursor-pointer" onClick={toggleSidebar}>
            {isSidebarOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.0303 8.96967C9.73744 8.67678 9.26256 8.67678 8.96967 8.96967C8.67678 9.26256 8.67678 9.73744 8.96967 10.0303L10.9393 12L8.96969 13.9697C8.6768 14.2626 8.6768 14.7374 8.96969 15.0303C9.26258 15.3232 9.73746 15.3232 10.0303 15.0303L12 13.0607L13.9696 15.0303C14.2625 15.3232 14.7374 15.3232 15.0303 15.0303C15.3232 14.7374 15.3232 14.2625 15.0303 13.9697L13.0606 12L15.0303 10.0303C15.3232 9.73746 15.3232 9.26258 15.0303 8.96969C14.7374 8.6768 14.2625 8.6768 13.9696 8.96969L12 10.9394L10.0303 8.96967Z" fill="#333333" />
                <path fillRule="evenodd" clipRule="evenodd" d="M12.0574 1.25H11.9426C9.63424 1.24999 7.82519 1.24998 6.41371 1.43975C4.96897 1.63399 3.82895 2.03933 2.93414 2.93414C2.03933 3.82895 1.63399 4.96897 1.43975 6.41371C1.24998 7.82519 1.24999 9.63422 1.25 11.9426V12.0574C1.24999 14.3658 1.24998 16.1748 1.43975 17.5863C1.63399 19.031 2.03933 20.1711 2.93414 21.0659C3.82895 21.9607 4.96897 22.366 6.41371 22.5603C7.82519 22.75 9.63423 22.75 11.9426 22.75H12.0574C14.3658 22.75 16.1748 22.75 17.5863 22.5603C19.031 22.366 20.1711 21.9607 21.0659 21.0659C21.9607 20.1711 22.366 19.031 22.5603 17.5863C22.75 16.1748 22.75 14.3658 22.75 12.0574V11.9426C22.75 9.63423 22.75 7.82519 22.5603 6.41371C22.366 4.96897 21.9607 3.82895 21.0659 2.93414C20.1711 2.03933 19.031 1.63399 17.5863 1.43975C16.1748 1.24998 14.3658 1.24999 12.0574 1.25ZM3.9948 3.9948C4.56445 3.42514 5.33517 3.09825 6.61358 2.92637C7.91356 2.75159 9.62177 2.75 12 2.75C14.3782 2.75 16.0864 2.75159 17.3864 2.92637C18.6648 3.09825 19.4355 3.42514 20.0052 3.9948C20.5749 4.56445 20.9018 5.33517 21.0736 6.61358C21.2484 7.91356 21.25 9.62177 21.25 12C21.25 14.3782 21.2484 16.0864 21.0736 17.3864C20.9018 18.6648 20.5749 19.4355 20.0052 20.0052C19.4355 20.5749 18.6648 20.9018 17.3864 21.0736C16.0864 21.2484 14.3782 21.25 12 21.25C9.62177 21.25 7.91356 21.2484 6.61358 21.0736C5.33517 20.9018 4.56445 20.5749 3.9948 20.0052C3.42514 19.4355 3.09825 18.6648 2.92637 17.3864C2.75159 16.0864 2.75 14.3782 2.75 12C2.75 9.62177 2.75159 7.91356 2.92637 6.61358C3.09825 5.33517 3.42514 4.56445 3.9948 3.9948Z" fill="#333333" />
              </svg>

            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_65_2588)">
                  <path d="M12.4 19H23.6M4 12H23.6M12.4 5H23.6" stroke="#333333" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_65_2588">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            )}
          </button>


          {/* Desktop Navigation */}
          <ul className="hidden lg:flex gap-x-2 text-whiteNatural text-base font-normal leading-[1.3938rem] z-10">
            <li>
              <NavLink
                to="/#home"
                className={`hover:bg-secondary hover:text-black transition-colors duration-300 flex gap-2 p-2 px-5 rounded-lg ${activeTab === "home" ? "bg-white text-secondary" : ""}`}
                onClick={() => handleTabClick("home")}
              >
                <HomeIcon />
                হোম
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/rules"
                className={`hover:bg-secondary hover:text-black transition-colors duration-300 flex items-center justify-center rounded-lg gap-2 p-2 px-5 ${activeTab === "rules" ? "bg-white text-secondary" : ""}`}
                onClick={() => handleTabClick("rules")}
              >
                <BidhiIcon />
                বিধি
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/aboutus"
                className={`hover:bg-secondary hover:text-black transition-colors duration-300 flex items-center justify-center rounded-lg gap-2 p-2 px-5 ${activeTab === "aboutus" ? "bg-white text-secondary" : ""}`}
                onClick={() => handleTabClick("aboutus")}
              >
                <AboutUs />
                আমাদের সম্পর্কে
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/privacy-policy"
                className={`hover:bg-secondary hover:text-black transition-colors duration-300 flex items-center justify-center rounded-lg gap-2 p-2 px-5 ${activeTab === "privacy-policy" ? "bg-white text-secondary" : ""}`}
                onClick={() => handleTabClick("privacy-policy")}
              >
                <PrivacyPolicy />
                গোপনীয়তার নীতি
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      {/* Sidebar for Mobile View */}
      {isSidebarOpen && <Sidebar toggleSidebar={toggleSidebar} isOpen={isSidebarOpen} />}
    </div>
  );
};

export default Navbar;
