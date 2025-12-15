import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { SocialIcon } from 'react-social-icons';
import BruceLogo from "../../assets/BruceMannersLogo.png";

function Nav({ currentPage, handlePageChange }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-neutral-200 h-24 w-full fixed top-0 left-0 z-50">

            <div className="hidden sm:grid grid-flow-col grid-rows-3 h-full w-full px-6">

                <div className="row-span-3 flex items-center">
                    <a href="#Home" onClick={() => handlePageChange("Home")}>
                        <img src={BruceLogo} alt="Bruce" className="h-16 hover:opacity-80 transition" />
                    </a>
                </div>

                <div className="col-span-2 flex justify-center items-center space-x-8 pt-8 justify-self-end">
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


                <div className="col-span-2 row-span-2 flex justify-center gap-4 items-start mt-2 pt-2 pr-2 justify-self-end">
                    <SocialIcon url="https://www.instagram.com/brucemanners"
                        style={{ height: 30, width: 30 }}
                        fgColor="#0f172a"
                        bgColor="transparent"
                    />
                    <SocialIcon url="https://www.facebook.com/ComedyJuggler"
                        style={{ height: 30, width: 30 }}
                        fgColor="#0f172a"
                        bgColor="transparent"
                    />
                    <SocialIcon url="https://www.youtube.com/user/IJuggle5"
                        style={{ height: 30, width: 30 }}
                        fgColor="#0f172a"
                        bgColor="transparent"
                    />
                </div>

            </div>

            {/* Mobile Row */}
            <div className="sm:hidden flex items-start justify-between px-6 h-32">

                {/* Logo + Socials stacked */}
                <div className="flex flex-col items-start">
                    {/* Logo */}
                    <a href="#Home" onClick={() => handlePageChange("Home")}>
                        <img src={BruceLogo} alt="Bruce" className="h-16 hover:opacity-80 transition pt-2" />
                    </a>

                    {/* Mobile social icons — below logo */}
                    <div className="flex gap-3">
                        <SocialIcon url="https://www.instagram.com/brucemanners"
                            style={{ height: 28, width: 28 }}
                            fgColor="#0f172a"
                            bgColor="transparent"
                        />
                        <SocialIcon url="https://www.facebook.com/ComedyJuggler"
                            style={{ height: 28, width: 28 }}
                            fgColor="#0f172a"
                            bgColor="transparent"
                        />
                        <SocialIcon url="https://www.youtube.com/user/IJuggle5"
                            style={{ height: 28, width: 28 }}
                            fgColor="#0f172a"
                            bgColor="transparent"
                        />
                    </div>
                </div>

                {/* Hamburger Button */}
                <button
                    className="absolute top-8 right-8 text-slate-900 text-4xl transition-transform duration-300"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <IoClose /> : <RxHamburgerMenu />}
                </button>

            </div>


            {/* Mobile Dropdown */}
            <div
                className={`
          ${isOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"} 
          sm:hidden pb-4
          w-2/3 rounded-xl shadow-lg
          max-w-md
          pt-2 
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
                            setIsOpen(false);
                        }}
                        className="block text-xl hover:text-gray-300"
                    >
                        {page}
                    </a>
                ))}
            </div>

        </nav>
    );
}

export default Nav;
