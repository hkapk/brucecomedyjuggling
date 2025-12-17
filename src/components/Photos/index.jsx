import React, { useState, useEffect } from "react";
import { galleryImages } from '../../data/galleryImages';

function Photos() {
    const [lightbox, setLightbox] = useState(null);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") setLightbox(null);
        };
        if (lightbox) window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [lightbox]);

    return (
        <div className="min-h-screen w-full bg-slate-200 rounded-lg py-12 px-4">
            <div className="max-w-7xl mx-auto">

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                    {galleryImages.map((src, index) => (
                        <button
                            key={index}
                            type="button"
                            className="overflow-hidden rounded-xl shadow-md focus:outline-none object-cover object-[30%_20%]"
                            onClick={() =>
                                setLightbox({
                                    src,
                                    caption: ``,
                                })
                            }
                        >
                            <img
                                src={src}
                                alt={`Gallery Image ${index + 1}`}
                                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300 object-cover object-[30%_20%]"
                            />
                        </button>
                    ))}
                </div>

                {/* Lightbox */}
                {lightbox && (
                    <div
                        className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
                        onClick={() => setLightbox(null)}
                    >
                        <div
                            className="relative max-w-full max-h-full text-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={lightbox.src}
                                alt={lightbox.caption}
                                className="max-w-full max-h-[80vh] rounded-lg shadow-xl mx-auto"
                            />
                            <p className="mt-4 text-neutral-200 text-sm md:text-base">
                                {lightbox.caption}
                            </p>
                            <button
                                className="absolute top-2 right-2 text-white text-3xl hover:opacity-80"
                                onClick={() => setLightbox(null)}
                                aria-label="Close"
                            >
                                ×
                            </button>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}

export default Photos;
