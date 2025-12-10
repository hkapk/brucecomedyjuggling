import React from "react";

function Nav({ currentPage, handlePageChange }) {
    return (
        <header>
            <nav className="w-full
          fixed top-0 left-0 z-50 bg-white
          pt-2 md:pt-0 md:static
          border-b md:border-none pb-2"
                aria-label="Main navigation">
                <div className="max-w-6xl mx-auto px-4">
                    <ul className="grid grid-cols-2 gap-2
              sm:grid-cols-3 sm:gap-3
              md:flex md:flex-row md:justify-between md:items-center md:gap-0
              md:space-x-6
              w-full">
                        <li className="md:flex-initial">
                            <a
                                href="#Home"
                                onClick={() => handlePageChange("Home")}
                                className={currentPage === "Home" ? "nav-link-active" : "nav-link"}>
                                Home
                            </a>
                        </li>

                        <li className="md:flex-initial">
                            <a
                                href="#About"
                                onClick={() => handlePageChange("About")}
                                className={currentPage === "About" ? "nav-link-active" : "nav-link"}>
                                About
                            </a>
                        </li>

                        <li className="md:flex-initial">
                            <a
                                href="#Media"
                                onClick={() => handlePageChange("Media")}
                                className={currentPage === "Media" ? "nav-link-active" : "nav-link"}>
                                Media
                            </a>
                        </li>



                        <li className="md:flex-initial">
                            <a
                                href="#Events"
                                onClick={() => handlePageChange("Events")}
                                className={currentPage === "Events" ? "nav-link-active" : "nav-link"}>
                                Events
                            </a>
                        </li>

                        <li className="md:flex-initial">
                            <a
                                href="#Reviews"
                                onClick={() => handlePageChange("Reviews")}
                                className={currentPage === "Reviews" ? "nav-link-active" : "nav-link"}>
                                Reviews
                            </a>
                        </li>

                        <li className="md:flex-initial">
                            <a
                                href="#Contact"
                                onClick={() => handlePageChange("Contact")}
                                className={currentPage === "Contact" ? "nav-link-active" : "nav-link"}>
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="h-16 md:hidden" />
        </header>
    );
}

export default Nav;
