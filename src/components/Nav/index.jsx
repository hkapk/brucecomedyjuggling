import React from "react";

function Nav({ currentPage, handlePageChange }) {
    return (
        <header>
            <nav
                className="
          w-full
          fixed top-0 left-0 z-50 bg-white
          pt-2 md:pt-0 md:static
          border-b md:border-none pb-2"
                aria-label="Main navigation"
            >
                {/* container to center + limit width */}
                <div className="max-w-6xl mx-auto px-4">
                    <ul
                        className="
              grid grid-cols-2 gap-2
              sm:grid-cols-3 sm:gap-3
              md:flex md:flex-row md:justify-between md:items-center md:gap-0
              md:space-x-6
              w-full
            "
                    >
                        <li className="md:flex-initial">
                            <a
                                href="#About"
                                onClick={() => handlePageChange("About")}
                                className={currentPage === "About" ? "nav-link-active" : "nav-link"}
                            >
                                About
                            </a>
                        </li>

                        <li className="md:flex-initial">
                            <a
                                href="#Videos"
                                onClick={() => handlePageChange("Videos")}
                                className={currentPage === "Videos" ? "nav-link-active" : "nav-link"}
                            >
                                Videos
                            </a>
                        </li>

                        <li className="md:flex-initial">
                            <a
                                href="#Photos"
                                onClick={() => handlePageChange("Photos")}
                                className={currentPage === "Photos" ? "nav-link-active" : "nav-link"}
                            >
                                Photos
                            </a>
                        </li>

                        <li className="md:flex-initial">
                            <a
                                href="#Events"
                                onClick={() => handlePageChange("Events")}
                                className={currentPage === "Events" ? "nav-link-active" : "nav-link"}
                            >
                                Events
                            </a>
                        </li>

                        <li className="md:flex-initial">
                            <a
                                href="#Reviews"
                                onClick={() => handlePageChange("Reviews")}
                                className={currentPage === "Reviews" ? "nav-link-active" : "nav-link"}
                            >
                                Reviews
                            </a>
                        </li>

                        <li className="md:flex-initial">
                            <a
                                href="#Contact"
                                onClick={() => handlePageChange("Contact")}
                                className={currentPage === "Contact" ? "nav-link-active" : "nav-link"}
                            >
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
