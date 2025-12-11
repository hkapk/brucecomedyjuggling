import React from "react";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import BruceLogo from "../../assets/BruceMannersLogo.png";


function Nav({ currentPage, handlePageChange }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gray-400 h-28">
            <div className="h-16 items-center flex justify-between">
                <div className="px-14 pt-14 text-white font-bold">
                    <img src={BruceLogo} style={{ height: "80px" }} alt="Bruce" /></div>
                {/* desktop view */}
                <div className="hidden sm:block text-white pt-14 pr-8">
                    <a href="#Home"
                        onClick={() => handlePageChange("Home")}
                        className={currentPage === "Home" ? "nav-link-active" : "nav-link"}>
                        Home </a>
                    <a href="#About"
                        onClick={() => handlePageChange("About")}
                        className={currentPage === "About" ? "nav-link-active" : "nav-link"}>
                        About
                    </a>
                    <a href="#Media"
                        onClick={() => handlePageChange("Media")}
                        className={currentPage === "Media" ? "nav-link-active" : "nav-link"}>
                        Media
                    </a>
                    <a href="#Events"
                        onClick={() => handlePageChange("Events")}
                        className={currentPage === "Events" ? "nav-link-active" : "nav-link"}>
                        Events
                    </a>
                    <a href="#Reviews"
                        onClick={() => handlePageChange("Reviews")}
                        className={currentPage === "Reviews" ? "nav-link-active" : "nav-link"}>
                        Reviews
                    </a>
                    <a href="#Contact"
                        onClick={() => handlePageChange("Contact")}
                        className={currentPage === "Contact" ? "nav-link-active" : "nav-link"}>
                        Contact
                    </a>
                </div>
                <button className="block sm:hidden px-4 pt-12 text-4xl text-white"
                    onClick={() => setIsOpen(!isOpen)}><RxHamburgerMenu /></button>
            </div>
            {/* Mobile view */}
            <div className={`${isOpen ? "block" : "hidden"} sm:hidden text-right px-4 space-y"`}>
                <a href="#Home"
                    onClick={() => handlePageChange("Home")}
                    className={currentPage === "Home" ? "mobile-nav-link-active" : "mobile-nav-link"}>
                    Home
                </a>
                <a href="#About"
                    onClick={() => handlePageChange("About")}
                    className={currentPage === "About" ? "mobile-nav-link-active" : "mobile-nav-link"}>
                    About
                </a>
                <a href="#Media"
                    onClick={() => handlePageChange("Media")}
                    className={currentPage === "Media" ? "mobile-nav-link-active" : "mobile-nav-link"}>
                    Media
                </a>
                <a href="#Events"
                    onClick={() => handlePageChange("Events")}
                    className={currentPage === "Events" ? "mobile-nav-link-active" : "mobile-nav-link"}>
                    Events
                </a>
                <a href="#Reviews"
                    onClick={() => handlePageChange("Reviews")}
                    className={currentPage === "Reviews" ? "mobile-nav-link-active" : "mobile-nav-link"}>
                    Reviews
                </a>
                <a href="#Contact"
                    onClick={() => handlePageChange("Contact")}
                    className={currentPage === "Contact" ? "mobile-nav-link-active" : "mobile-nav-link"}>
                    Contact
                </a>
            </div>
        </nav>


    );
}

export default Nav;
