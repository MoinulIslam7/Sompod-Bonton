import React, { useEffect, useState } from "react";
import HomeIcon from "../../assets/Icons/HomeRes.svg?react";
import BidhiIcon from "../../assets/Icons/BidhiRes.svg?react";
import AboutUsIcon from "../../assets/Icons/aboutus.svg?react";
import PrivacyPolicyIcon from "../../assets/Icons/privacypolicy.svg?react";
import BlogIcon from "../../assets/Icons/blog.svg?react";


const Sidebar = ({ toggleSidebar, isOpen }) => {
    const [sidebarClass, setSidebarClass] = useState("translate-x-full");

    useEffect(() => {
        if (isOpen) {
            setSidebarClass("translate-x-0");
        } else {
            setSidebarClass("translate-x-full");
        }
    }, [isOpen]);

    const menuItems = [
        { href: "/#home", label: "হোম", Icon: HomeIcon },
        { href: "/rules", label: "বিধি", Icon: BidhiIcon },
        { href: "/aboutus", label: "About Us", Icon: AboutUsIcon },
        { href: "/privacy-policy", label: "গোপনীয়তার নীতি", Icon: PrivacyPolicyIcon },
        { href: "/blog", label: "ব্লগ", Icon: BlogIcon },
    ];

    const handleLinkClick = (href) => {
        toggleSidebar();
        window.location.href = href;
    };

    return (
        <div
            className={`fixed top-[4.4rem] right-0 w-full h-full bg-[#FFFFDA] opacity-95 shadow-lg z-50 transform ${sidebarClass} transition-transform duration-300 ease-in-out`}
        >
            <ul className="px-5 h-full text-center text-whiteNatural leading-6 text-lg mt-5">
                {menuItems.map(({ href, label, Icon }) => (
                    <li key={href}>
                        <a
                            href="#"
                            onClick={() => handleLinkClick(href)}
                            className={`text-lg px-3 rounded transition-colors duration-300 flex gap-3 py-5 items-center`}
                        >
                            <Icon className="w-5 h-5" />
                            {label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;