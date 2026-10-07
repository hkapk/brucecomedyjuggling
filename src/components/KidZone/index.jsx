import React, { useState, useEffect } from "react";
import { coloringBookPages } from '../../data/coloringbook'



function KidZone() {

    const [lightbox, setLightbox] = useState(null);
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") setLightbox(null);
        };
        if (lightbox) window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [lightbox]);


    return (
        <div className="bg-black min-h-screen w-full">
            <h2 className="text-white pt-12 text-center">
                Download Coloring Book Pages
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-2 gap-6">
                {coloringBookPages.map((src, index) =>
                    <button
                        key={index}
                        type="button"
                        className="overflow-hidden rounded-xl shadow-md focus:outline-none object-cover object-[30%_25%]"
                        onClick={() =>
                            setLightbox({
                                src: coloringBookPages[index],
                                caption: ``,

                            })
                        }
                    >

                        <img
                            src={src}
                            alt={`Coloring Book Page ${index + 1}`}
                            className=""
                        />
                    </button>
                )}
            </div>

        </div>
    )
}

export default KidZone
