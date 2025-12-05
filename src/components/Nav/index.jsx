import React from "react";

function Nav({ currentPage, handlePageChange }) {
    return (
        <header>
            <nav className="w-full">
                <ul className="grid grid-cols-2 gap-4 
                 sm:grid-cols-3 sm:gap-6 
                 md:flex md:justify-between md:gap-0">
                    <li className="pr-8">
                        <a
                            href="#About"
                            onClick={() => handlePageChange("About")}
                            className={currentPage === "About" ? "nav-link-active" : "nav-link"}
                        >
                            About
                        </a>
                    </li>

                    <li className="pr-8">
                        <a
                            href="#Videos"
                            onClick={() => handlePageChange("Videos")}
                            className={currentPage === "Videos" ? "nav-link-active" : "nav-link"}
                        >
                            Videos
                        </a>
                    </li>

                    <li className="pr-8">
                        <a
                            href="#Photos"
                            onClick={() => handlePageChange("Photos")}
                            className={currentPage === "Photos" ? "nav-link-active" : "nav-link"}
                        >
                            Photos
                        </a>
                    </li>

                    <li className="pr-8">
                        <a
                            href="#Events"
                            onClick={() => handlePageChange("Events")}
                            className={currentPage === "Events" ? "nav-link-active" : "nav-link"}
                        >
                            Events
                        </a>
                    </li>

                    <li className="pr-8">
                        <a
                            href="#Reviews"
                            onClick={() => handlePageChange("Reviews")}
                            className={currentPage === "Reviews" ? "nav-link-active" : "nav-link"}
                        >
                            Reviews
                        </a>
                    </li>

                    <li className="pr-8">
                        <a
                            href="#Contact"
                            onClick={() => handlePageChange("Contact")}
                            className={currentPage === "Contact" ? "nav-link-active" : "nav-link"}
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;