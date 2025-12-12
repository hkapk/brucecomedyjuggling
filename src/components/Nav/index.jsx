import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import BruceLogo from "../../assets/BruceMannersLogo.png";

function Nav({ currentPage, handlePageChange }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gray-400 h-24 w-full fixed top-0 left-0 z-50 shadow-lg">
            <div className="h-full flex items-center justify-between px-6">

                {/* Logo links to Home */}
                <a
                    href="#Home"
                    onClick={() => handlePageChange("Home")}
                >
                    <img
                        src={BruceLogo}
                        alt="Bruce"
                        className="h-16 hover:opacity-80 transition"
                    />
                </a>

                {/* Desktop Nav */}
                <div className="hidden sm:flex space-x-8 text-white font-semibold">
                    {["Home", "About", "Media", "Events", "Reviews", "Contact"].map(page => (
                        <a
                            key={page}
                            href={`#${page}`}
                            onClick={() => handlePageChange(page)}
                            className={currentPage === page ? "nav-link-active" : "nav-link"}
                        >
                            {page}
                        </a>
                    ))}
                </div>

                {/* Mobile Button */}
                <button
                    className="sm:hidden text-white text-4xl transition-transform duration-300"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className={`${isOpen ? "rotate-180" : ""} transition-transform`}>
                        {isOpen ? <IoClose /> : <RxHamburgerMenu />}
                    </div>
                </button>
            </div>

            {/* Mobile Dropdown */}
            <div
                className={`
                    ${isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"} 
                    sm:hidden pb-4
                    w-2/3 rounded-xl shadow-lg
                    max-w-md 
                    overflow-hidden 
                    transition-all 
                    duration-300 
                    bg-gray-900/80 
                    text-center 
                    text-white 
                    space-y-4
                    mx-auto
                `}
            >
                {["Home", "About", "Media", "Events", "Reviews", "Contact"].map(page => (
                    <a
                        key={page}
                        href={`#${page}`}
                        onClick={() => {
                            handlePageChange(page);
                            setIsOpen(false); // close menu after clicking
                        }}
                        className="block text-xl font-semibold hover:text-gray-300"
                    >

                        {page}
                    </a>
                ))}
            </div>
        </nav>
    );
}

export default Nav;
